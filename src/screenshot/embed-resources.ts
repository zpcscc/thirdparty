import { isDataUrl, makeDataUrl, resourceToDataURL } from './dataurl';
import { getMimeType } from './mimes';
import type { Options } from './types';
import { resolveUrl, shouldEmbed } from './util';

const URL_REGEX = /url\((["']?)([^"']+?)\1\)/g;
const URL_WITH_FORMAT_REGEX = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g;
const FONT_SRC_REGEX = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;

const toRegex = (url: string): RegExp => {
  // eslint-disable-next-line no-useless-escape
  const escaped = url.replaceAll(/([$()*+./?[\\\]^{|}])/g, String.raw`\$1`);
  return new RegExp(`(url\\(['"]?)(${escaped})(['"]?\\))`, 'g');
};

export const parseURLs = (cssText: string): string[] => {
  const urls: string[] = [];

  cssText.replaceAll(URL_REGEX, (raw, quotation, url) => {
    urls.push(url);
    return raw;
  });

  return urls.filter((url) => !isDataUrl(url));
};

export const embed = async (
  cssText: string,
  resourceURL: string,
  baseURL: string | null,
  options: Options,
  getContentFromUrl?: (url: string) => Promise<string>
): Promise<string> => {
  try {
    const resolvedURL = baseURL ? resolveUrl(resourceURL, baseURL) : resourceURL;
    const contentType = getMimeType(resourceURL);
    let dataURL: string;
    if (getContentFromUrl) {
      const content = await getContentFromUrl(resolvedURL);
      dataURL = makeDataUrl(content, contentType);
    } else {
      dataURL = await resourceToDataURL(resolvedURL, contentType, options);
    }
    return cssText.replace(toRegex(resourceURL), `$1${dataURL}$3`);
  } catch (error) {
    console.log('error:', error);
  }
  return cssText;
};

const filterPreferredFontFormat = (str: string, { preferredFontFormat }: Options): string => {
  return preferredFontFormat
    ? str.replaceAll(FONT_SRC_REGEX, (match: string) => {
        while (true) {
          const [src, , format] = URL_WITH_FORMAT_REGEX.exec(match) || [];
          if (!format) {
            return '';
          }

          if (format === preferredFontFormat) {
            return `src: ${src};`;
          }
        }
      })
    : str;
};

export const embedResources = async (
  cssText: string,
  baseUrl: string | null,
  options: Options
): Promise<string> => {
  if (!shouldEmbed(cssText)) {
    return cssText;
  }

  const filteredCSSText = filterPreferredFontFormat(cssText, options);
  const urls = parseURLs(filteredCSSText);
  return urls.reduce(
    (deferred, url) => deferred.then((css) => embed(css, url, baseUrl, options)),
    Promise.resolve(filteredCSSText)
  );
};
