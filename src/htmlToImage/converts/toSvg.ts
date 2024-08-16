import { applyStyle } from '../apply-style';
import { cloneNode } from '../clone-node';
import { embedImages } from '../embed-images';
import { embedWebFonts } from '../embed-webfonts';
import type { Options } from '../types';
import { getImageSize, nodeToSvg, svgToDataURL } from '../util';

export const toSvgNode = async <T extends HTMLElement>(
  node: T,
  options: Options = {}
): Promise<SVGElement> => {
  const { width, height } = getImageSize(node, options);
  const clonedNode = (await cloneNode(node, options, true)) as HTMLElement;
  await embedWebFonts(clonedNode, options);
  await embedImages(clonedNode, options);
  applyStyle(clonedNode, options);
  return nodeToSvg(clonedNode, width, height);
};

export const toSvg = async <T extends HTMLElement>(
  node: T,
  options: Options = {}
): Promise<string> => {
  const svg = await toSvgNode(node, options);
  const dataurl = await svgToDataURL(svg);
  return dataurl;
};

export default toSvg;
