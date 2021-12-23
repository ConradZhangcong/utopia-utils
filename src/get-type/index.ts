import getObjectType from './get-object-type';
import { TypeEnum } from './types';

// 截取"[object type]"的起始位置
const OBJECT_TYPE_SLICE_INDEX_START = 8;
// 截取"[object type]"的终点位置
const OBJECT_TYPE_SLICE_INDEX_END = -1;

/**
 * @desc 获取对象的类型
 * @author Conrad
 * @param {*} obj 需要检测类型的对象
 * @return {TypeEnum} 对象的类型
 */
const getType = (obj: any): TypeEnum => {
  const objectType = getObjectType(obj); // 返回 "[object type]"
  // 截取type
  const type = objectType.slice(
    OBJECT_TYPE_SLICE_INDEX_START,
    OBJECT_TYPE_SLICE_INDEX_END,
  );
  return type as TypeEnum;
};

export { TypeEnum };

export default getType;
