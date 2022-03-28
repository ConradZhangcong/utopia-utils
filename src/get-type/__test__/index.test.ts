import getType from '../index';
import { TypeEnum } from '../types';

describe('test get-type', () => {
  test('number type', () => {
    expect(getType(1)).toBe(TypeEnum.Number);
  });

  test('string type', () => {
    expect(getType('hello world!')).toBe(TypeEnum.String);
  });

  test('boolean type', () => {
    expect(getType(true)).toBe(TypeEnum.Boolean);
  });

  test('null type', () => {
    expect(getType(null)).toBe(TypeEnum.Null);
  });

  test('undefined type', () => {
    expect(getType(undefined)).toBe(TypeEnum.Undefined);
  });

  test('symbol type', () => {
    expect(getType(Symbol())).toBe(TypeEnum.Symbol);
  });

  test('bigint type', () => {
    // expect(getType(24n)).toBe(TypeEnum.BigInt);
  });

  test('error type', () => {
    expect(getType(new Error())).toBe(TypeEnum.Error);
  });

  test('object type', () => {
    expect(getType({})).toBe(TypeEnum.Object);
  });

  test('array type', () => {
    expect(getType([])).toBe(TypeEnum.Array);
  });

  test('set type', () => {
    expect(getType(new Set())).toBe(TypeEnum.Set);
  });

  test('map type', () => {
    expect(getType(new Map())).toBe(TypeEnum.Map);
  });

  test('date type', () => {
    expect(getType(new Date())).toBe(TypeEnum.Date);
  });

  test('function type', () => {
    const fn = function () {
      // ...
    };
    expect(getType(fn)).toBe(TypeEnum.Function);
  });

  test('arrow function type', () => {
    const fn = () => {
      // ...
    };
    expect(getType(fn)).toBe(TypeEnum.Function);
  });
});
