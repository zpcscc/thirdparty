import saveCanvasToBase64 from 'src/screenshot/lib/common-methods/SaveCanvasToBase64';
import saveCanvasToImage from 'src/screenshot/lib/common-methods/SaveCanvasToImage';
import InitData from 'src/screenshot/lib/main-entrance/InitData';
import PlugInParameters from 'src/screenshot/lib/main-entrance/PlugInParameters';

/**
 * 将指定区域的canvas转为图片
 */
const getCanvasImgData = (isSave: boolean) => {
  const data = new InitData();
  const plugInParameters = new PlugInParameters();
  const screenShotCanvas = data.getScreenShotContainer()?.getContext('2d');
  // 获取裁剪区域位置信息
  const { startX, startY, width, height } = data.getCutOutBoxPosition();
  let base64 = '';
  if (screenShotCanvas) {
    if (isSave) {
      // 将canvas转为图片
      saveCanvasToImage(screenShotCanvas, startX, startY, width, height);
    } else {
      // 将canvas转为base64
      base64 = saveCanvasToBase64(
        screenShotCanvas,
        startX,
        startY,
        width,
        height,
        0.75,
        plugInParameters.getWriteImgState()
      );
    }
  }
  return base64;
};

export default getCanvasImgData;
