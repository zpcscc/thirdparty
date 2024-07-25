export type Options = {
  /**
   * 渲染前应用于节点的像素宽度.
   */
  width?: number;
  /**
   * 渲染前应用于节点的高度（像素）.
   */
  height?: number;
  /**
   * 背景颜色的字符串值，任何有效的CSS颜色值.
   */
  backgroundColor?: string;
  /**
   * 导出时应用于画布的宽度（像素）.
   */
  canvasWidth?: number;
  /**
   * 导出时应用于画布的高度（像素）.
   */
  canvasHeight?: number;
  /**
   * 在渲染之前将其属性复制到节点样式的对象.
   */
  style?: Partial<CSSStyleDeclaration>;
  /**
   * 一个以DOM节点为参数的函数。如果传递的节点应包含在输出中，则应返回“true”。排除节点意味着也排除其子节点.
   */
  filter?: (domNode: HTMLElement) => boolean;
  /**
   * 介于“0”和“1”之间的数字，表示JPEG图像的图像质量（例如0.92=>92%）.
   */
  quality?: number;
  /**
   * 设置为“true”，将当前时间作为查询字符串附加到URL请求中，以启用缓存破坏.
   */
  cacheBust?: boolean;
  /**
   * 设置false以使用所有URL作为缓存键.
   * 默认值：false | undefined-去掉查询参数
   */
  includeQueryParams?: boolean;
  /**
   * 占位符图像的数据URL，将在获取图像失败时使用。默认为空字符串，将为失败的图像呈现空白区域.
   */
  imagePlaceholder?: string;
  /**
   * 捕获图像的像素比。Defalut是设备的实际像素比。设置1作为图像的初始比例1
   */
  pixelRatio?: number;
  /**
   * 跳过字体下载和嵌入的选项.
   */
  skipFonts?: boolean;
  /**
   * 首选字体格式。如果指定，则忽略所有其他字体格式.
   */
  preferredFontFormat?:
    | 'woff'
    | 'woff2'
    | 'truetype'
    | 'opentype'
    | 'embedded-opentype'
    | 'svg'
    | string;
  /**
   * 为字体嵌入指定的CSS字符串。如果指定，则只有此CSS将出现在生成的图像中。使用`getFontEmbedCSS（）`创建嵌入CSS，以便在对库函数的多个调用中使用.
   */
  fontEmbedCSS?: string;
  /**
   * 表示图像格式的字符串。默认类型为image/png；如果给定的类型不受支持，也会使用该类型.
   */
  type?: string;
  /**
   * window.fetch的第二个参数（Promise<Response>fetch（input[，init]））
   */
  fetchRequestInit?: RequestInit;
  /**
   * 加载媒体超时和获取远程资产超时（毫秒）.
   * 默认值：30000
   */
  timeout?: number;
  /**
   * 画布“drawImage”间隔
   * 用于修复Safari、Firefox中解码图像时的错误
   * 默认值：100
   */
  drawImageInterval?: number;
  /**
   * 一个布尔值，用于关闭过大图像的自动缩放. 开启后，会不再使用 maximumCanvasSize 值 限制画布尺寸；
   */
  skipAutoScale?: boolean;
  /**
   * 最大画布大小（像素）.
   * 默认值：16384
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#maximum_canvas_size
   */
  maximumCanvasSize?: number;
};
