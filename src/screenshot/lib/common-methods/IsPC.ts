const isPC = (): boolean => {
  const userAgentInfo = navigator.userAgent;
  const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  let flag = true;
  for (const Agent of Agents) {
    if (userAgentInfo.indexOf(Agent) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

export default isPC;
