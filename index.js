// FIXME: eslint+prettier confict
const isEmpty = () => {};
const data = [];
const opertaionList = isEmpty(data)
  ? []
  : data.map((item) => ({
      id: item.id,
      name: item.name,
      actKey: item.actKey,
      callbackBeans: item.callbackBeans,
      outflowInfo: item.outflowInfo,
    }));

// console.log(performance.now());
