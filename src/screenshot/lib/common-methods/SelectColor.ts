import InitData from 'src/screenshot/lib/main-entrance/InitData';

const selectColor = () => {
  const data = new InitData();
  // 显示颜色选择面板
  data.setColorPanelStatus(true);
};

export default selectColor;
