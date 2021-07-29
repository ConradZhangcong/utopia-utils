/**
 * @desc 克隆函数Function
 * @param {function} source 原数据
 * @returns 克隆后的数据
 */
const cloneFunction = (func) => {
  const bodyReg = /(?<={)(.|\n)+(?=})/m;
  const paramReg = /(?<=\().+(?=\)\s+{)/;
  const funcString = func.toString();
  if (func.prototype) {
    // 普通函数
    const param = paramReg.exec(funcString);
    const body = bodyReg.exec(funcString);
    if (body) {
      // 匹配到函数体
      if (param) {
        // 匹配到参数
        const paramArr = param[0].split(',');
        return new Function(...paramArr, body[0]);
      } else {
        return new Function(body[0]);
      }
    } else {
      return null;
    }
  } else {
    // 箭头函数
    return eval(funcString);
  }
};

export default cloneFunction;
