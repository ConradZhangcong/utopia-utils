import cloneDeep from '../src/clone-deep';

function createData(deep) {
  let data = {};
  let temp = data;

  for (let i = 0; i < deep; i++) {
    temp['data'] = {};
    temp = temp['data'];
  }

  return data;
}

const obj2 = createData(10000);

console.log(cloneDeep(obj2));
