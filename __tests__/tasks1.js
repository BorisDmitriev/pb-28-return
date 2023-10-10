const rewire = require("rewire");

describe("1. Check age", () => {
  test("`checkAge` function exists", () => {
    const solution = rewire("../index");
    const checkAge = solution.__get__("checkAge");
    expect(checkAge).toBeDefined()
  });
  test("Should return `true` if passed age is greater than 18", () => {
    const solution = rewire("../index");
    const checkAge = solution.__get__("checkAge");
    expect(checkAge(19)).toBe(true);
  });
  test("Should return `false` if passed age is 18 or lower", () => {
    const solution = rewire("../index");
    const checkAge = solution.__get__("checkAge");
    expect(checkAge(10)).toBe(false);
    expect(checkAge(18)).toBe(false);
  });
});

describe("2. Lower number", () => {
  test("`min` function exists", () => {
    const solution = rewire("../index");
    const min = solution.__get__("min");
    expect(min).toBeDefined()
  });
  test("Should return the lower of two passed numbers", () => {
    const solution = rewire("../index");
    const min = solution.__get__("min");
    let a = 5; let b = 10;
    expect(min(a, b)).toBe(5);
  });
})

describe("3. To the power of", () => {
  test("`pow` function exists", () => {
    const solution = rewire("../index");
    const pow = solution.__get__("pow");
    expect(pow).toBeDefined()
  });
  test("pow(x,n) Should return x to the power of n", () => {
    const solution = rewire("../index");
    const pow = solution.__get__('pow')
    expect(pow(3, 3)).toBe(27);
    expect(pow(3, 2)).toBe(9);
    expect(pow(1, 100)).toBe(1);
  });
});

