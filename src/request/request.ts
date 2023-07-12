/* eslint-disable @typescript-eslint/promise-function-async */
import axios, { type AxiosError } from 'axios';
import { getErrorMsg } from './utils';

// 创建axios实例
const request = axios.create();

axios.defaults.headers.post = {
  'Content-type': 'application/x-www-form-urlencoded',
};

// application/x-www-form-urlencoded
// multipart/form-data
// application/json

// 响应拦截，对报错做统一处理
request.interceptors.response.use(
  (res) =>
    // 该返回的数据则是axios.then(res)中接收的数据
    res,
  (err: AxiosError) =>
    // 该返回的数据则是axios.catch(err)中接收的数据
    Promise.reject(getErrorMsg(err)),
);

export default request;
