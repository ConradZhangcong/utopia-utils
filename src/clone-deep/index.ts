import getType from '../get-type/get-object-type';
import cloneUnIterableTypes from './clone-uniterable';
import { ObjectTypeEnum } from '../get-type/types';
import { IteriableTypes } from './types';

const getConstructor = (target: any) => {
  const Constructor = target.constructor;
  return new Constructor();
};

const iterableTags = [ObjectTypeEnum.Object, ObjectTypeEnum.Array, ObjectTypeEnum.Set, ObjectTypeEnum.Map];

/**
 * @desc 深克隆
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
  } else {
    return cloneUnIterableTypes(source, type);
  }

  // 栈
  const loopList = [{ parent: target, key: undefined, data: source, type }];

  while (loopList.length) {
    // 深度优先
    const node = loopList.pop();
    const { parent, key, data, type } = node;

    // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
    let res = parent;
    if (typeof key !== 'undefined') {
      res = parent[key] = getConstructor(data);
    }

    forEach(data, (v, k) => {
      const currentType = getType(v);
      if (iterableTags.includes(currentType)) {
        // 下一次循环
        loopList.push({
          parent: res,
          key: k,
          data: v,
          type: currentType,
        });
      } else {
        setIterableTypesValue(res, k, v);
      }
    });
  }

  return target;
}

const setIterableTypesValue = (source, key, value) => {
  const sourceType = getType(source);
  if (sourceType === ObjectTypeEnum.Set) {
    // 克隆set
    source.add(value);
  } else if (sourceType === ObjectTypeEnum.Map) {
    // 克隆map
    source.set(key, value);
  } else if (sourceType === ObjectTypeEnum.Array) {
    // 克隆数组
    source[key] = value;
  } else if (sourceType === ObjectTypeEnum.Object) {
    // 克隆对象
    source[key] = value;
  }

  return source;
};

const forEach = (array, iteratee) => {
  const type = getType(array);
  if (type === ObjectTypeEnum.Object) {
    const list = Object.keys(array);
    let index = -1;
    const length = list.length;
    while (++index < length) {
      iteratee(array[list[index]], list[index]);
    }
    return list;
  } else if (type === ObjectTypeEnum.Array) {
    let index = -1;
    const length = array.length;
    while (++index < length) {
      iteratee(array[index], index);
    }
    return array;
  } else if (type === ObjectTypeEnum.Set) {
    for (const index of array) {
      iteratee(index, index);
    }
    return array;
  } else if (type === ObjectTypeEnum.Map) {
    array.forEach((item, index) => iteratee(item, index));
    return array;
  }
};

export default cloneDeep;
