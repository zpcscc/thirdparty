import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { cryptoBase64 } from '@zpcscc/thirdparty';
import { toString } from '@zpcscc/utils';
import { Button, Input, Space } from 'antd';
import { useState, type FC } from 'react';

const Base64: FC = () => {
  // 待加密数据
  const [encryptValue, setEncryptValue] = useState<string>('');
  // 待解密数据
  const [decryptValue, setDecryptValue] = useState<string>('');
  // 加密
  const onEncrypt = () => {
    setDecryptValue(cryptoBase64.encrypt(encryptValue));
  };
  // 解密
  const onDecrypt = () => {
    setEncryptValue(cryptoBase64.decrypt(decryptValue));
  };

  return (
    <Space wrap>
      <Input.TextArea
        rows={5}
        style={{ width: '300px' }}
        value={toString(encryptValue)}
        onChange={(e) => setEncryptValue(e.target.value)}
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
        onChange={(e) => setDecryptValue(e.target.value)}
      />
    </Space>
  );
};

export default Base64;
