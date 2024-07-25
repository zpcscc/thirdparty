import type { Options } from '../types';
import createCanvas from '../utils/createCanvas';
import createImage from '../utils/createImage';
import { toSvgNode } from './toSvg';

import { getImageSize, svgToDataURL } from '../util';
import loadMedia from '../utils/loadMedia';

export const toCanvas = async <T extends HTMLElement>(
  node: T,
  options: Options = {}
): Promise<HTMLCanvasElement> => {
  const { timeout = 30000, drawImageInterval = 100 } = options;
  const { width, height } = getImageSize(node, options);
  const svg = await toSvgNode(node, options);
  const svgDataUrl = await svgToDataURL(svg);

  const image = createImage(svgDataUrl, svg.ownerDocument);
  const loaded = await loadMedia(image, { timeout });
  const { canvas, context2d } = createCanvas(image.ownerDocument, {
    ...options,
    width,
    height
  });
  const drawImage = () => {
    try {
      context2d?.drawImage(loaded, 0, 0, canvas.width, canvas.height);
    } catch (error) {
      console.log('error:', error);
    }
  };

  drawImage();

  // @ts-expect-error
  for (let i = 0; i < (window.drawImageCount ?? 0); i++) {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        drawImage();
        resolve();
      }, i + drawImageInterval);
    });
  }

  // @ts-expect-error
  window.drawImageCount = 0;
  return canvas;
};

export default toCanvas;
