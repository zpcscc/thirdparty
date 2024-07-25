import isApple from './isApple';

const addImageCount = () => {
  if (isApple()) {
    // @ts-expect-error
    window.drawImageCount = (window.drawImageCount || 0) + 1;
  }
};

export default addImageCount;
