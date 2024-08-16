export const isElementNode = (node: Node): node is Element => node.nodeType === 1; // Node.ELEMENT_NODE

export const isVideoElement = (node: Element): node is HTMLVideoElement => node.tagName === 'VIDEO';

export const isSVGElementNode = (node: Element): node is SVGElement =>
  typeof (node as SVGElement).className === 'object';

export const isImageElement = (node: Element): node is HTMLImageElement => node.tagName === 'IMG';

export const isHTMLElementNode = (node: Node): node is HTMLElement =>
  isElementNode(node) && (node as HTMLElement).style !== undefined && !isSVGElementNode(node);

export const isSVGImageElementNode = (node: Element): node is SVGImageElement =>
  node.tagName === 'image';

export const isInstanceOfElement = <
  T extends typeof Element | typeof HTMLElement | typeof SVGImageElement
>(
  node: Element | HTMLElement | SVGImageElement,
  instance: T
): node is T['prototype'] => {
  if (node instanceof instance) return true;

  const nodePrototype = Object.getPrototypeOf(node);

  if (nodePrototype === null) return false;

  return (
    (nodePrototype.constructor.name &&
      instance.name &&
      nodePrototype.constructor.name === instance.name) ||
    isInstanceOfElement(nodePrototype, instance)
  );
};
