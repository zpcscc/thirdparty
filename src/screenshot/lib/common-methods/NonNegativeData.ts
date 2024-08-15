/**
 * 对参数进行处理，小于0则返回0
 */
const nonNegativeData = (data: number) => {
  return data > 0 ? data : 0;
};

export default nonNegativeData;
