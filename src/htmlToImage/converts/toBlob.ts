import type { Options } from '../types';
import { canvasToBlob } from '../util';
import toCanvas from './toCanvas';

const toBlob = async <T extends HTMLElement>(
  node: T,
  options: Options = {}
): Promise<Blob | null> => {
  const canvas = await toCanvas(node, options);
  const blob = await canvasToBlob(canvas);
  return blob;
};

export default toBlob;
