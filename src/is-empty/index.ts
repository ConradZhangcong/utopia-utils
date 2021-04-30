import getType, { TypeEnum } from '../get-type';

/**
 * @desc 判断值否为空
 * null,undefined,空字符串为false
 * 空的数组,对象,set,map为false
 *
 * @author conrad
 * @param {*} value 判断的值
 * @return {boolean} 判断的值为空返回true,否则返回false
 * @example
 *
 * isEmpty(null) // true
 * isEmpty(undefined) // true
 * isEmpty('') // true
 * isEmpty({}) // true
 * isEmpty([]) // true
 * isEmpty(new Set()) // true
 * isEmpty(new Map()) // true
 * isEmpty(0) // false
 * isEmpty(false) // false
 * isEmpty({ a: 1 }) // false
 * isEmpty([1]) // false
 */
const isEmpty = (value: any): boolean => {
  const type = getType(value);
  switch (type) {
    case TypeEnum.Null:
    case TypeEnum.Undefined:
      return false;
    case TypeEnum.Array:
    case TypeEnum.Arguments:
      return !value.length;
    case TypeEnum.Set:
    case TypeEnum.Map:
      return !value.size();
    case TypeEnum.Object:
      return !Object.keys(value).length;
    default:
      return true;
  }
};

export default isEmpty;
