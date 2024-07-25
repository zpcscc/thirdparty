import { toArray, uuid } from './util';

type Pseudo = ':before' | ':after';

const formatCSSText = (style: CSSStyleDeclaration) => {
  const content = style.getPropertyValue('content');
  return `${style.cssText} content: '${content.replaceAll(/'|"/g, '')}';`;
};

const formatCSSProperties = (style: CSSStyleDeclaration) => {
  return toArray<string>(style)
    .map((name) => {
      const value = style.getPropertyValue(name);
      const priority = style.getPropertyPriority(name);

      return `${name}: ${value}${priority ? ' !important' : ''};`;
    })
    .join(' ');
};

const getPseudoElementStyle = (
  className: string,
  pseudo: Pseudo,
  style: CSSStyleDeclaration
): Text => {
  const selector = `.${className}:${pseudo}`;
  const cssText = style.cssText ? formatCSSText(style) : formatCSSProperties(style);

  return document.createTextNode(`${selector}{${cssText}}`);
};

const clonePseudoElement = <T extends HTMLElement>(
  nativeNode: T,
  clonedNode: T,
  pseudo: Pseudo
) => {
  const style = window.getComputedStyle(nativeNode, pseudo);
  const content = style.getPropertyValue('content');
  if (content === '' || content === 'none') {
    return;
  }

  const className = uuid();
  try {
    clonedNode.className = `${clonedNode.className} ${className}`;
  } catch {
    return;
  }

  const styleElement = document.createElement('style');
  styleElement.append(getPseudoElementStyle(className, pseudo, style));
  clonedNode.append(styleElement);
};

export const clonePseudoElements = <T extends HTMLElement>(nativeNode: T, clonedNode: T) => {
  clonePseudoElement(nativeNode, clonedNode, ':before');
  clonePseudoElement(nativeNode, clonedNode, ':after');
};
