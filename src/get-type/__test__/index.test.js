import getType from '../index';
import { TypeEnum } from '../types';

test('test number type', () => {
  expect(getType(1)).toBe(TypeEnum.Number);
});

test('test string type', () => {
  expect(getType('hello world!')).toBe(TypeEnum.String);
});

test('test boolean type', () => {
  expect(getType(true)).toBe(TypeEnum.Boolean);
});

test('test null type', () => {
  expect(getType(null)).toBe(TypeEnum.Null);
});

test('test undefined type', () => {
  expect(getType(undefined)).toBe(TypeEnum.Undefined);
});

test('test symbol type', () => {
  expect(getType(Symbol())).toBe(TypeEnum.Symbol);
});

test('test bigint type', () => {
  expect(getType(24n)).toBe(TypeEnum.BigInt);
});

test('test error type', () => {
  expect(getType(new Error())).toBe(TypeEnum.Error);
});

test('test object type', () => {
  expect(getType({})).toBe(TypeEnum.Object);
});

test('test array type', () => {
  expect(getType([])).toBe(TypeEnum.Array);
});

test('test set type', () => {
  expect(getType(new Set())).toBe(TypeEnum.Set);
});

test('test map type', () => {
  expect(getType(new Map())).toBe(TypeEnum.Map);
});

test('test date type', () => {
  expect(getType(new Date())).toBe(TypeEnum.Date);
});

test('test function type', () => {
  const fn = function () {
    // ...
  };
  expect(getType(fn)).toBe(TypeEnum.Function);
});

test('test arrow function type', () => {
  const fn = () => {
    // ...
  };
  expect(getType(fn)).toBe(TypeEnum.Function);
});
