import { ObjectTypeEnum } from '../get-type/types';
import cloneSymbol from './clone-symbol';
import cloneRegExp from './clone-regexp';
import cloneFunction from './clone-function';

/**
 * @desc 克隆不可继续递归的数据类型
 */
const cloneUnIterableTypes = (source, type) => {
  const Ctor = source.constructor;
  switch (type) {
    case ObjectTypeEnum.String:
    case ObjectTypeEnum.Number:
    case ObjectTypeEnum.Boolean:
    case ObjectTypeEnum.Date:
    case ObjectTypeEnum.Error:
      return source;
    case ObjectTypeEnum.BigInt:
      return BigInt(source);
    case ObjectTypeEnum.Symbol:
      return cloneSymbol(source);
    case ObjectTypeEnum.RegExp:
      return cloneRegExp(source);
    case ObjectTypeEnum.Function:
      return cloneFunction(source);
    case ObjectTypeEnum.Global:
      return source;
    default:
      return null;
  }
};

export default cloneUnIterableTypes;
