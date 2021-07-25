/**
 * 深克隆
 * @author Conrad
 * @param source 原数据
 * @returns 克隆后的数据
 */
function cloneDeep(source: any) {
  if (source === null) return null;
  if (source === undefined) return undefined;

  if (typeof source === "object") {
    const target = {};
    for (const key in target) {
      target[key] = cloneDeep(source[key]);
    }
    return target;
  } else {
    return source;
  }
}

export default cloneDeep
