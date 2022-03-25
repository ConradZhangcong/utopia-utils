import getStringLength from '../index';

describe('test get-string-length', () => {
  test('test common string length', () => {
    expect(getStringLength('hello world')).toBe(11);
  });

  test('test string length that chars code point over \uffff', () => {
    const string = 'hello world𠮷';
    expect(getStringLength(string)).toBe(12);
    expect(string.length).toBe(13);
  });
});
