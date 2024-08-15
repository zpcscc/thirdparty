import nonNegativeData from './NonNegativeData';

/**
 * 计算传进来的数据，不让其移出可视区域
 * @param data 需要计算的数据
 * @param trimDistance 裁剪框宽度
 * @param canvasDistance 画布宽度
 */
const fixedData = (data: number, trimDistance: number, canvasDistance: number) => {
  if (nonNegativeData(data) + trimDistance > canvasDistance) {
    return nonNegativeData(canvasDistance - trimDistance);
  }
  return nonNegativeData(data);
};

export default fixedData;
