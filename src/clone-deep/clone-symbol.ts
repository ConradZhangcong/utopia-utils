/**
 * 克隆Symbol类型的数据
 * @param {symbol} source 原数据
 * @returns 克隆后的数据
 */
const cloneSymbol = (source: symbol): symbol => {
  return Object(Symbol.prototype.valueOf.call(source));
};

export default cloneSymbol;
