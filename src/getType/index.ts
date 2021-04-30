/**
 * @desc 获取对象的数据类型
 * @author Conrad
 */

/** 对象类型枚举 */
const TypeEnum = {
  Number: '[object Number]',
  String: '[object String]',
  Boolean: '[object Boolean]',
  Null: '[object Null]',
  Undefined: '[object Undefined]',
  Symbol: '[object Symbol]',
  BigInt: '[object BigInt]',
  Object: '[object Object]',
   Array: '[object Array]',
  Date: '[object Date]',
  RegExp: '[object RegExp]',
};

/**
 * 获取对象的类型
 * @param {*} obj
 * @returns {string} [object type]
 */
const getObjectType = (obj: any) => Object.prototype.toString.call(obj);

const getType = (obj: any) => {
  const type = getObjectType(obj);
  return type.slice(8, -1); 
};

export default getType;
