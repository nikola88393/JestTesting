const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./script.js");

it("First letter capitalized", () => {
  expect(capitalize("asdasd")).toMatch(/^[A-Z]/);
});

it("string reversed", () => {
  expect(reverseString("asdasd")).toMatch("dsadsa");
});

it("calcualtes", () => {
  expect(calculator.add(2, 5)).toBe(2 + 5);
  expect(calculator.subtract(2, 5)).toBe(2 - 5);
  expect(calculator.divide(2, 5)).toBe(2 / 5);
  expect(calculator.multiply(2, 5)).toBe(2 * 5);
});

describe("Caesar Cipher", () => {
  it("alphabet shifted correctly", () => {
    expect(caesarCipher("abc", 3)).toMatch("def");
    expect(caesarCipher("abc", 4)).toMatch("efg");
    expect(caesarCipher("abc", 5)).toMatch("fgh");
    expect(caesarCipher("abc", 10)).toMatch("klm");
  });

  it("skips punctuation symbols", () => {
    expect(caesarCipher(".abc.", 3)).toMatch(".def.");
    expect(caesarCipher("!abc!", 4)).toMatch("!efg!");
    expect(caesarCipher("?abc?", 5)).toMatch("?fgh?");
    expect(caesarCipher("!a.b?c+", 10)).toMatch("!k.l?m+");
  });

  it("keeps the same case", () => {
    expect(caesarCipher(".ABC.", 3)).toMatch(".DEF.");
    expect(caesarCipher("!Abc!", 4)).toMatch("!Efg!");
    expect(caesarCipher("?aBc?", 5)).toMatch("?fGh?");
    expect(caesarCipher("!a.b?C+", 10)).toMatch("!k.l?M+");
  });
});

describe("Analyze array", () => {
  it("finds the average", () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toHaveProperty("average", 3);
    expect(analyzeArray([1, 5, 2, 4, 3])).toHaveProperty("average", 3);
    expect(analyzeArray([2, 4, 6, 8, 10])).toHaveProperty("average", 6);
    expect(analyzeArray([3, 5, 1, 9, 7])).toHaveProperty("average", 5);
  });

  it("finds the min", () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toHaveProperty("min", 1);
    expect(analyzeArray([1, 5, 2, 4, 3])).toHaveProperty("min", 1);
    expect(analyzeArray([2, 4, 6, 8, 10])).toHaveProperty("min", 2);
    expect(analyzeArray([3, 5, 1, 9, 7])).toHaveProperty("min", 1);
  });

  it("finds the max", () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toHaveProperty("max", 5);
    expect(analyzeArray([1, 5, 2, 4, 3])).toHaveProperty("max", 5);
    expect(analyzeArray([2, 4, 6, 8, 10])).toHaveProperty("max", 10);
    expect(analyzeArray([3, 5, 1, 9, 7])).toHaveProperty("max", 9);
  });

  it("finds the length", () => {
    expect(analyzeArray([1, 2, 3])).toHaveProperty("length", 3);
    expect(analyzeArray([1, 5, 2, 4])).toHaveProperty("length", 4);
    expect(analyzeArray([2, 4])).toHaveProperty("length", 2);
    expect(analyzeArray([3, 5, 1, 9, 7])).toHaveProperty("length", 5);
  });
});
