import getDocument from './getDocument';

const createImage = (url: string, ownerDocument?: Document | null): HTMLImageElement => {
  const img = getDocument(ownerDocument).createElement('img');
  img.decoding = 'sync';
  img.loading = 'eager';
  img.src = url;
  return img;
};

export default createImage;
