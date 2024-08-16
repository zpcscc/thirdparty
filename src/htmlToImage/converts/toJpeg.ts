import type { Options } from '../types';
import toCanvas from './toCanvas';

const toJpeg = async <T extends HTMLElement>(node: T, options: Options = {}): Promise<string> => {
  const canvas = await toCanvas(node, options);
  return canvas.toDataURL('image/jpeg', options.quality || 1);
};

export default toJpeg;
