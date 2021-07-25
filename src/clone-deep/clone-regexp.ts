/**
 * 克隆RegExp
 * @param {symbol} source 原数据
 * @returns 克隆后的数据
 */
const cloneRegExp = (source: RegExp): RegExp => {
  const reFlags = /\w*$/;
  const result = new source.constructor(source.source, reFlags.exec(source));
  result.lastIndex = source.lastIndex;
  return result;
};

export default cloneRegExp;
