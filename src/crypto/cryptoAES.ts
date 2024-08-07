import { toData, toString } from '@zpcscc/utils';
import { AES, enc, mode, pad } from 'crypto-js';
import type { AESConfigType } from './type';

const { Base64, Hex, Utf8 } = enc;

// 处理密钥,确保是16位字符串
const keyHandler = (key: string) => `${key}`.slice(0, 16).padEnd(16);

const defaultCfg: AESConfigType = {
  iv: '0000000000000000',
  mode: 'CBC',
  padding: 'Pkcs7'
};

// 处理配置
const formatCfg = (aesCfg?: AESConfigType) => {
  const config = { ...defaultCfg, ...aesCfg };
  return {
    iv: Utf8.parse(keyHandler(config.iv)),
    mode: mode[config.mode],
    padding: pad[config.padding]
  };
};

/**
 * @name AES加密
 * @param {any} data 需要加密的数据
 * @param {string} key 密钥
 * @param {AESConfigType} AEScfg AES配置
 * @returns {string} 加密后的数据
 */
const encrypt = (data: any, key: string, AEScfg?: AESConfigType): string => {
  const dataStr = toString(data);
  const utf8Data = Utf8.parse(dataStr);
  const utf8Key = Utf8.parse(keyHandler(key));
  const config = formatCfg(AEScfg);
  const encryptedDS = AES.encrypt(utf8Data, utf8Key, config);
  return encryptedDS.ciphertext.toString().toUpperCase();
};

/**
 * @name AES解密
 * @param {any} data 需要解密的数据
 * @param {string} key 密钥
 * @param {AESConfigType} AEScfg AES配置
 * @returns {string} 解密后的数据
 */
const decrypt = (data: string, key: string, AEScfg?: AESConfigType): any => {
  const base64Data = Base64.stringify(Hex.parse(data));
  const utf8Key = Utf8.parse(keyHandler(key));
  const config = formatCfg(AEScfg);
  const decryptedDS = AES.decrypt(base64Data, utf8Key, config);
  const decryptedStr = decryptedDS.toString(Utf8);
  return toData(decryptedStr);
};

const cryptoAES = { encrypt, decrypt };
export default cryptoAES;
