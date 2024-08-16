import type { Options } from '../types';

import { getPixelRatio } from '../util';

// 检查画布尺寸
export const checkCanvasDimensions = (
  canvas: HTMLCanvasElement,
  canvasDimensionLimit: number = 16384
) => {
  if (canvas.width > canvasDimensionLimit || canvas.height > canvasDimensionLimit) {
    if (canvas.width > canvasDimensionLimit && canvas.height > canvasDimensionLimit) {
      if (canvas.width > canvas.height) {
        canvas.height *= canvasDimensionLimit / canvas.width;
        canvas.width = canvasDimensionLimit;
      } else {
        canvas.width *= canvasDimensionLimit / canvas.height;
        canvas.height = canvasDimensionLimit;
      }
    } else if (canvas.width > canvasDimensionLimit) {
      canvas.height *= canvasDimensionLimit / canvas.width;
      canvas.width = canvasDimensionLimit;
    } else {
      canvas.width *= canvasDimensionLimit / canvas.height;
      canvas.height = canvasDimensionLimit;
    }
  }
};

// 创建画布
const createCanvas = (ownerDocument: Document, options: Options) => {
  const canvas = ownerDocument.createElement('canvas');
  const context2d = canvas.getContext('2d')!;
  const ratio = options.pixelRatio || getPixelRatio();
  const canvasWidth = options.canvasWidth || options.width || 100;
  const canvasHeight = options.canvasHeight || options.height || 100;
  canvas.width = canvasWidth * ratio;
  canvas.height = canvasHeight * ratio;
  if (!options.skipAutoScale) {
    checkCanvasDimensions(canvas, options.maximumCanvasSize);
  }
  canvas.style.width = `${canvasWidth}`;
  canvas.style.height = `${canvasHeight}`;
  if (options.backgroundColor) {
    context2d.fillStyle = options.backgroundColor;
    context2d.fillRect(0, 0, canvas.width, canvas.height);
  }
  return { canvas, context2d };
};

export default createCanvas;
