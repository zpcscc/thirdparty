import type { Options } from '../types';
import { getImageSize } from '../util';
import toCanvas from './toCanvas';

const toPixelData = async <T extends HTMLElement>(
  node: T,
  options: Options = {}
): Promise<Uint8ClampedArray> => {
  const { width, height } = getImageSize(node, options);
  const canvas = await toCanvas(node, options);
  const ctx = canvas.getContext('2d')!;
  return ctx.getImageData(0, 0, width, height).data;
};

export default toPixelData;
