import { fetchAsDataURL } from './dataurl';
import { embedResources } from './embed-resources';
import type { Options } from './types';
import { shouldEmbed, toArray } from './util';

type Metadata = {
  url: string;
  cssText: string;
};

const cssFetchCache: { [href: string]: Metadata } = {};

const fetchCSS = async (url: string) => {
  let cache = cssFetchCache[url];
  if (cache != null) {
    return cache;
  }

  const res = await fetch(url);
  const cssText = await res.text();
  cache = { url, cssText };

  // eslint-disable-next-line require-atomic-updates
  cssFetchCache[url] = cache;

  return cache;
};

const embedFonts = (data: Metadata, options: Options): Promise<string> => {
  let cssText = data.cssText;
  const regexUrl = /url\(["']?([^"')]+)["']?\)/g;
  const fontLocs = cssText.match(/url\([^)]+\)/g) || [];
  const loadFonts = fontLocs.map(async (loc: string) => {
    let url = loc.replaceAll(regexUrl, '$1');
    if (!url.startsWith('https://')) {
      url = new URL(url, data.url).href;
    }

    return fetchAsDataURL<[string, string]>(url, options.fetchRequestInit, ({ result }) => {
      cssText = cssText.replace(loc, `url(${result})`);
      return [loc, result];
    });
  });

  return Promise.all(loadFonts).then(() => cssText);
};

const parseCSS = (source: string) => {
  if (!source) {
    return [];
  }

  const result: string[] = [];
  const commentsRegex = /(\/\*[\S\s]*?\*\/)/gi;
  // strip out comments
  let cssText = source.replaceAll(commentsRegex, '');

  // eslint-disable-next-line prefer-regex-literals
  const keyframesRegex = new RegExp(String.raw`((@.*?keyframes [\s\S]*?){([\s\S]*?}\s*?)})`, 'gi');

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const matches = keyframesRegex.exec(cssText);
    if (matches === null) {
      break;
    }
    result.push(matches[0]);
  }
  cssText = cssText.replaceAll(keyframesRegex, '');

  const importRegex = /@import[\S\s]*?url\([^)]*\)[\S\s]*?;/gi;
  // to match css & media queries together
  const combinedCSSRegex =
    String.raw`((\s*?(?:\/\*[\s\S]*?\*\/)?\s*?@media[\s\S]` +
    String.raw`*?){([\s\S]*?)}\s*?})|(([\s\S]*?){([\s\S]*?)})`;
  // unified regex
  const unifiedRegex = new RegExp(combinedCSSRegex, 'gi');

  // eslint-disable-next-line no-constant-condition
  while (true) {
    let matches = importRegex.exec(cssText);
    if (matches === null) {
      matches = unifiedRegex.exec(cssText);
      if (matches === null) {
        break;
      } else {
        importRegex.lastIndex = unifiedRegex.lastIndex;
      }
    } else {
      unifiedRegex.lastIndex = importRegex.lastIndex;
    }
    result.push(matches[0]);
  }

  return result;
};

const getCSSRules = async (
  styleSheets: CSSStyleSheet[],
  options: Options
): Promise<CSSStyleRule[]> => {
  const ret: CSSStyleRule[] = [];
  const deferreds: Promise<number | void>[] = [];

  // First loop inlines imports
  styleSheets.forEach((sheet) => {
    if ('cssRules' in sheet) {
      try {
        toArray<CSSRule>(sheet.cssRules || []).forEach((item, index) => {
          if (item.type === CSSRule.IMPORT_RULE) {
            let importIndex = index + 1;
            const url = (item as CSSImportRule).href;
            const deferred = fetchCSS(url)
              .then((metadata) => embedFonts(metadata, options))
              .then((cssText) =>
                parseCSS(cssText).forEach((rule) => {
                  try {
                    sheet.insertRule(
                      rule,
                      rule.startsWith('@import') ? (importIndex += 1) : sheet.cssRules.length
                    );
                  } catch (error) {
                    console.error('Error inserting rule from remote css', {
                      rule,
                      error
                    });
                  }
                })
              )
              .catch((error) => {
                console.error('Error loading remote css', error.toString());
              });

            deferreds.push(deferred);
          }
        });
      } catch (error) {
        const inline = styleSheets.find((a) => a.href == null) || document.styleSheets[0];
        if (sheet.href != null) {
          deferreds.push(
            fetchCSS(sheet.href)
              .then((metadata) => embedFonts(metadata, options))
              .then((cssText) =>
                parseCSS(cssText).forEach((rule) => {
                  inline.insertRule(rule, sheet.cssRules.length);
                })
              )
              .catch((error_: unknown) => {
                console.error('Error loading remote stylesheet', error_);
              })
          );
        }
        console.error('Error inlining remote css file', error);
      }
    }
  });

  return Promise.all(deferreds).then(() => {
    // Second loop parses rules
    styleSheets.forEach((sheet) => {
      if ('cssRules' in sheet) {
        try {
          toArray<CSSStyleRule>(sheet.cssRules || []).forEach((item) => {
            ret.push(item);
          });
        } catch (error) {
          console.error(`Error while reading CSS rules from ${sheet.href}`, error);
        }
      }
    });

    return ret;
  });
};

const getWebFontRules = (cssRules: CSSStyleRule[]): CSSStyleRule[] => {
  return cssRules
    .filter((rule) => rule.type === CSSRule.FONT_FACE_RULE)
    .filter((rule) => shouldEmbed(rule.style.getPropertyValue('src')));
};

const parseWebFontRules = async <T extends HTMLElement>(node: T, options: Options) => {
  if (node.ownerDocument == null) {
    throw new Error('Provided element is not within a Document');
  }

  const styleSheets = toArray<CSSStyleSheet>(node.ownerDocument.styleSheets);
  const cssRules = await getCSSRules(styleSheets, options);

  return getWebFontRules(cssRules);
};

export const getWebFontCSS = async <T extends HTMLElement>(
  node: T,
  options: Options
): Promise<string> => {
  const rules = await parseWebFontRules(node, options);
  const cssTexts = await Promise.all(
    rules.map((rule) => {
      const baseUrl = rule.parentStyleSheet ? rule.parentStyleSheet.href : null;
      return embedResources(rule.cssText, baseUrl, options);
    })
  );

  return cssTexts.join('\n');
};

export const embedWebFonts = async <T extends HTMLElement>(clonedNode: T, options: Options) => {
  const cssText =
    options.fontEmbedCSS == null
      ? options.skipFonts
        ? null
        : await getWebFontCSS(clonedNode, options)
      : options.fontEmbedCSS;

  if (cssText) {
    const styleNode = document.createElement('style');
    const sytleContent = document.createTextNode(cssText);

    styleNode.append(sytleContent);

    if (clonedNode.firstChild) {
      clonedNode.insertBefore(styleNode, clonedNode.firstChild);
    } else {
      clonedNode.append(styleNode);
    }
  }
};
