/**
 * 获取对象的类型 返回"[object type]"
 * @param {*} obj
 * @returns {string} [object type]
 */
const getObjectType = (obj: any): string => Object.prototype.toString.call(obj);

export default getObjectType;
