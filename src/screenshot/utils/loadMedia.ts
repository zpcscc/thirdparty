import {
  isElementNode,
  isImageElement,
  isSVGImageElementNode,
  isVideoElement
} from './checkElement';
import createImage from './createImage';

type LoadMediaOptions = {
  ownerDocument?: Document;
  timeout?: number;
  onError?: (error: Error) => void;
};

type Media = HTMLVideoElement | HTMLImageElement | SVGImageElement;

export const getDocument = <T extends Node>(target?: T | null): Document => {
  return ((target && isElementNode(target as any) ? target?.ownerDocument : target) ??
    window.document) as any;
};

const loadMedia = (media: any, options?: LoadMediaOptions): Promise<any> => {
  // @ts-expect-error
  return new Promise((resolve) => {
    const { timeout, ownerDocument, onError: userOnError } = options ?? {};
    const node: Media =
      typeof media === 'string' ? createImage(media, getDocument(ownerDocument)) : media;
    let timer: any = null;
    let removeEventListeners: null | (() => void) = null;

    const onResolve = () => {
      resolve(node);
      // eslint-disable-next-line no-unused-expressions
      timer && clearTimeout(timer);
      removeEventListeners?.();
    };

    if (timeout) {
      timer = setTimeout(onResolve, timeout);
    }

    if (isVideoElement(node)) {
      const currentSrc = node.currentSrc || node.src;
      if (!currentSrc) {
        if (node.poster) {
          // eslint-disable-next-line no-promise-executor-return
          return loadMedia(node.poster, options).then(resolve);
        }
        onResolve();
        return;
      }
      if (node.readyState >= 2) {
        onResolve();
        return;
      }
      const onLoadeddata = onResolve;
      const onError = (error: any) => {
        userOnError?.(error);
        onResolve();
      };
      removeEventListeners = () => {
        node.removeEventListener('loadeddata', onLoadeddata);
        node.removeEventListener('error', onError);
      };
      node.addEventListener('loadeddata', onLoadeddata, { once: true });
      node.addEventListener('error', onError, { once: true });
    } else {
      const currentSrc = isSVGImageElementNode(node)
        ? node.href.baseVal
        : node.currentSrc || node.src;

      if (!currentSrc) {
        onResolve();
        return;
      }

      const onLoad = async () => {
        if (isImageElement(node) && 'decode' in node) {
          try {
            await node.decode();
          } catch (error) {
            console.log('error:', error);
          }
        }
        onResolve();
      };

      const onError = (error: any) => {
        console.log('error:', error);
        onResolve();
      };

      if (isImageElement(node) && node.complete) {
        // eslint-disable-next-line no-promise-executor-return
        return onLoad();
      }

      removeEventListeners = () => {
        node.removeEventListener('load', onLoad);
        node.removeEventListener('error', onError);
      };

      node.addEventListener('load', onLoad, { once: true });
      node.addEventListener('error', onError, { once: true });
    }
  });
};

export default loadMedia;
