import { isDataUrl, resourceToDataURL } from './dataurl';
import { embedResources } from './embed-resources';
import { getMimeType } from './mimes';
import type { Options } from './types';
import { shouldEmbed, toArray } from './util';
import addImageCount from './utils/addImageCount';
import {
  isElementNode,
  isHTMLElementNode,
  isImageElement,
  isInstanceOfElement
} from './utils/checkElement';

const embedProp = async (propName: string, node: HTMLElement, options: Options) => {
  const propValue = node.style?.getPropertyValue(propName);
  if (propValue) {
    if (shouldEmbed(propValue)) {
      addImageCount();
    }
    const cssString = await embedResources(propValue, null, options);
    node.style.setProperty(propName, cssString, node.style.getPropertyPriority(propName));
    return true;
  }
  return false;
};

const embedBackground = async <T extends HTMLElement>(clonedNode: T, options: Options) => {
  if (!(await embedProp('background', clonedNode, options))) {
    await embedProp('background-image', clonedNode, options);
  }
  if (!(await embedProp('mask', clonedNode, options))) {
    await embedProp('mask-image', clonedNode, options);
  }
};

const embedImageNode = async <T extends HTMLElement | SVGImageElement>(
  clonedNode: T,
  options: Options
) => {
  const isImageElement = isInstanceOfElement(clonedNode, HTMLImageElement);
  if (
    !(isImageElement && !isDataUrl(clonedNode.src)) &&
    !(isInstanceOfElement(clonedNode, SVGImageElement) && !isDataUrl(clonedNode.href.baseVal))
  ) {
    return;
  }

  const url = isImageElement ? clonedNode.src : clonedNode.href.baseVal;

  const dataURL = await resourceToDataURL(url, getMimeType(url), options);
  await new Promise((resolve, reject) => {
    clonedNode.addEventListener('load', resolve);
    clonedNode.addEventListener('error', reject);

    const image = clonedNode as HTMLImageElement;
    if (image.decode) {
      image.decode = resolve as any;
    }

    if (image.loading === 'lazy') {
      image.loading = 'eager';
    }

    if (isImageElement) {
      clonedNode.srcset = '';
      clonedNode.src = dataURL;
    } else {
      clonedNode.href.baseVal = dataURL;
    }
  });
};

const embedChildren = async <T extends HTMLElement>(clonedNode: T, options: Options) => {
  const children = toArray<HTMLElement>(clonedNode.childNodes);
  const deferreds = children.map((child) => embedImages(child, options));
  await Promise.all(deferreds).then(() => clonedNode);
};

export const embedImages = async <T extends HTMLElement>(clonedNode: T, options: Options) => {
  if (isInstanceOfElement(clonedNode, Element)) {
    await embedBackground(clonedNode, options);
    await embedImageNode(clonedNode, options);
    await embedChildren(clonedNode, options);
  }

  if (isHTMLElementNode(clonedNode)) {
    const properties = [
      'background-image',
      'border-image-source',
      '-webkit-border-image',
      '-webkit-mask-image',
      'list-style-image'
    ];

    // @ts-expect-error
    properties.forEach((property) => {
      const value = clonedNode.style.getPropertyValue(property);
      if (!value || value === 'none') {
        return null;
      }
      addImageCount();
    });
  }

  if (isElementNode(clonedNode) && isImageElement(clonedNode)) {
    addImageCount();
  }
};
