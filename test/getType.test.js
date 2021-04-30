import getType from '../dist/getType';

console.log(getType(1));
console.log(getType('1'));
console.log(getType(true));
console.log(getType(null));
console.log(getType(undefined));
console.log(getType(Symbol('test')));
console.log(getType(5n));

console.log(getType({}));
console.log(getType([]));
console.log(getType(new Date()));
console.log(getType(/^19&/));
