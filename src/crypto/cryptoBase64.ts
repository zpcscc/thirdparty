import { toData, toString } from '@zpcscc/utils';
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';

/**
 * @name base64加密
 * @param {any} data 需要加密的数据
 * @returns {string} 加密后的数据
 */
const encrypt = (data: any): string => {
  const dataStr = toString(data);
  return Base64.stringify(Utf8.parse(dataStr));
};

/**
 * @name base64解密
 * @param {any} base64 需要解密的数据
 * @returns {string} 解密后的数据
 */
const decrypt = (base64: string): string => {
  let decryptValue = '';
  try {
    decryptValue = Base64.parse(base64).toString(Utf8);
  } catch {
    decryptValue = '格式错误';
  }
  return toData(decryptValue);
};

const cryptoBase64 = { encrypt, decrypt };
export default cryptoBase64;
