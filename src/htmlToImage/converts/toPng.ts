import type { Options } from '../types';
import toCanvas from './toCanvas';

const toPng = async <T extends HTMLElement>(node: T, options: Options = {}): Promise<string> => {
  const canvas = await toCanvas(node, options);
  return canvas.toDataURL();
};

export default toPng;
