/**
 * @name 判断是否为苹果公司的设备
 * @returns {boolean} 返回布尔值
 */
const isApple = (): boolean => {
  const userAgent = navigator.userAgent;
  // 检测是否为 iOS 设备
  const isIOS = /iPhone|iPad|iPod/.test(userAgent);
  // 检测是否为 macOS 设备并且使用 Safari 浏览器，排除 Chrome、Edge 和 Firefox
  const isMac = /Macintosh/.test(userAgent);
  const isSafari = /Safari/.test(userAgent) && !/Chrome|CriOS|Edg|Edge|Firefox/.test(userAgent);
  return isIOS || (isMac && isSafari);
};

export default isApple;
