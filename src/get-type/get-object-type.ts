import { ObjectTypeEnum } from './types';

/**
 * 获取对象的类型 返回"[object type]"
 * @param {*} obj
 * @returns {string} [object type]
 */
const getObjectType = (obj: any): ObjectTypeEnum =>
  Object.prototype.toString.call(obj) as ObjectTypeEnum;

export default getObjectType;
