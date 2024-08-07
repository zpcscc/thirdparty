import type { AxiosError, AxiosResponse } from 'axios';
import type { codeMessage } from './utils';

export type ErrorMessageType = {
  error: AxiosError;
  // 默认返回信息
  response?: AxiosResponse<any>;
  // 状态码
  status?: keyof typeof codeMessage;
  // 报错返回的提示内容
  message: string;
  // 自定义状态码提示
  codeMessage: string;
  // 系统默认状态码提示
  statusText?: string;
};
