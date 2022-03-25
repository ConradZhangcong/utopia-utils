import isEmpty from '../index';

describe('test is-empty', () => {
  test('null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('array', () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([null])).toBe(false);
    expect(isEmpty([1])).toBe(false);
  });

  test('object', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ [Symbol()]: 1, a: 1 })).toBe(false);
  });

  test('set and map', () => {
    expect(isEmpty(new Set())).toBe(true);
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set([1, 2]))).toBe(false);
    expect(isEmpty(new Map([['a', 1]]))).toBe(false);
  });

  test('number', () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(1)).toBe(false);
  });

  test('string', () => {
    expect(isEmpty('')).toBe(false);
    expect(isEmpty('hello')).toBe(false);
  });
});
