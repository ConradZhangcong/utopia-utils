// import
console.log(123);

const obj = {
  a: 1,
  b: 2,
};

const isEmpty = (obj) => {
  if (!obj) return false;
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return false;
    }
  }
};

const arr = [
  {
    id: 1,
    name: 'contad',
    actKey: 'test',
    callbackBeans: 'testHandler',
    outflowInfo: { action: 'TS', test: 'res', test1: '1' },
  },
];

const opertaionList = isEmpty(arr)
  ? []
  : arr.map((item) => ({
      id: item.id,
      name: item.name,
      actKey: item.actKey,
      callbackBeans: item.callbackBeans,
      outflowInfo: item.outflowInfo,
    }));

console.log(234);
console.error(123);
