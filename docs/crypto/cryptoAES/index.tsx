import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { cryptoAES, type AESConfigType } from '@zpcscc/thirdparty';
import { toString } from '@zpcscc/utils';
import { Button, Input, Radio, Space } from 'antd';
import { useState, type FC } from 'react';

const AES: FC = () => {
  // 待加密数据
  const [encryptValue, setEncryptValue] = useState<string>('');
  // 待解密数据
  const [decryptValue, setDecryptValue] = useState<string>('');
  // 密钥
  const [key, setKey] = useState<string>('1111111111111111');
  // 密钥偏移量
  const [iv, setIv] = useState<string>('0000000000000000');
  // 加密模式
  const [mode, setMode] = useState<AESConfigType['mode']>('CBC');
  // 填充方式
  const [padding, setPadding] = useState<AESConfigType['padding']>('Pkcs7');
  // aes加密配置，可选项
  const aesConfig = { iv, mode, padding };

  // 加密
  const onEncrypt = () => {
    console.log('jiam');
    setDecryptValue(cryptoAES.encrypt(encryptValue, key, aesConfig));
  };

  // 解密
  const onDecrypt = () => {
    setEncryptValue(cryptoAES.decrypt(decryptValue, key, aesConfig));
  };

  return (
    <Space direction='vertical' wrap>
      <Space direction='vertical' wrap>
        <Input
          style={{ width: '300px' }}
          placeholder={'请输入密钥'}
          addonBefore='密钥'
          maxLength={16}
          value={key}
          onChange={({ target: { value } }) => setKey(value)}
        />
        <Input
          style={{ width: '300px' }}
          placeholder={'请输入密钥偏移量'}
          addonBefore='密钥偏移量'
          maxLength={16}
          value={iv}
          onChange={({ target: { value } }) => setIv(value)}
        />
        <Space wrap>
          加密模式：（默认：CBC）
          <Radio.Group
            options={[
              { label: 'CBC', value: 'CBC' },
              { label: 'CFB', value: 'CFB' },
              { label: 'CTR', value: 'CTR' },
              { label: 'CTRGladman', value: 'CTRGladman' },
              { label: 'ECB', value: 'ECB' },
              { label: 'OFB', value: 'OFB' }
            ]}
            onChange={({ target: { value } }) => setMode(value)}
            value={mode}
            optionType='button'
            buttonStyle='solid'
          />
        </Space>
        <Space wrap>
          填充模式：（默认：Pkcs7）
          <Radio.Group
            options={[
              { label: 'Pkcs7', value: 'Pkcs7' },
              { label: 'AnsiX923', value: 'AnsiX923' },
              { label: 'Iso10126', value: 'Iso10126' },
              { label: 'Iso97971', value: 'Iso97971' },
              { label: 'NoPadding', value: 'NoPadding' },
              { label: 'ZeroPadding', value: 'ZeroPadding' }
            ]}
            onChange={({ target: { value } }) => setPadding(value)}
            value={padding}
            optionType='button'
            buttonStyle='solid'
          />
        </Space>
      </Space>
      <Space wrap>
        <Input.TextArea
          rows={5}
          style={{ width: '300px' }}
          value={toString(encryptValue)}
          onChange={({ target: { value } }) => setEncryptValue(value)}
        />
        <Space direction='vertical'>
          <Button type='primary' onClick={onEncrypt} icon={<RightOutlined />}>
            加密
          </Button>
          <Button type='primary' onClick={onDecrypt} icon={<LeftOutlined />}>
            解密
          </Button>
        </Space>
        <Input.TextArea
          rows={5}
          style={{ width: '300px' }}
          value={toString(decryptValue)}
          onChange={({ target: { value } }) => setDecryptValue(value)}
        />
      </Space>
    </Space>
  );
};

export default AES;
