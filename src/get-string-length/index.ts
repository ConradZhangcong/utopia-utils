const codePointLength = (text: string): number => {
  const result = text.match(/[\s\S]/gu);
  return result ? result.length : 0;
  // return Array.from(string).length;
};

export default codePointLength;
