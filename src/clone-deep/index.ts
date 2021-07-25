import cloneSymbol from './clone-symbol';
import cloneRegExp from './clone-regexp';
import cloneFunction from './clone-function';
import getType from '../get-type/get-object-type';
import { ObjectTypeEnum } from '../get-type/types';
import { IteriableTypes } from './types';

const getConstructor = (target: any) => {
  const Constructor = target.constructor;
  return new Constructor();
};

/**
 * 深克隆
 * @author Conrad
 * @param {*} source 原数据
 * @returns {*} 克隆后的数据
 */
function cloneDeep(source: any): any {
  if (source === null) return null;
  if (source === undefined) return undefined;

  // 获取对象的数据类型
  const type = getType(source);

  // 初始化对象
  let target: any;
  if (IteriableTypes.includes(type)) {
    target = getConstructor(source);
  }

  // 克隆set
  if (type === ObjectTypeEnum.Set) {
    (source as Set<any>).forEach((value) => {
      target.add(cloneDeep(value));
    });
    return target;
  }

  // 克隆map
  if (type === ObjectTypeEnum.Map) {
    (source as Map<any, any>).forEach((value, key) => {
      target.set(key, cloneDeep(value));
    });
    return target;
  }

  // 克隆数组
  if (type === ObjectTypeEnum.Array) {
    (source as any[]).forEach((value, index) => {
      target[index] = cloneDeep(value);
    });
    return target;
  }

  // 克隆对象
  if (type === ObjectTypeEnum.Object) {
    const keys = Object.keys(source);
    keys.forEach((key) => {
      target[key] = cloneDeep(source[key]);
    });
    return target;
  }

  return cloneOtherType(source, type);
}

const cloneOtherType = (source: any, type: ObjectTypeEnum) => {
  const Ctor = source.constructor;
  switch (type) {
    case ObjectTypeEnum.String:
    case ObjectTypeEnum.Number:
    case ObjectTypeEnum.Boolean:
    case ObjectTypeEnum.Date:
    case ObjectTypeEnum.Error:
      return new Ctor(source);
    case ObjectTypeEnum.BigInt:
      return BigInt(source);
    case ObjectTypeEnum.Symbol:
      return cloneSymbol(source);
    case ObjectTypeEnum.RegExp:
      return cloneRegExp(source);
    case ObjectTypeEnum.Function:
      return cloneFunction(source);
    case ObjectTypeEnum.Global:
    case ObjectTypeEnum.Window:
      return source;
    default:
      return null;
  }
};

export default cloneDeep;
