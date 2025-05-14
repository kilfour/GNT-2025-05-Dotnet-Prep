import { nameThisFunction } from './defaultGreet.js';

describe('describe this functionality', () => {
  it('describe this test 1', () => {
    expect(nameThisFunction("Sara")).toBe("Hello Sara");
  });
  it('describe this test 2', () => {
    expect(nameThisFunction()).toBe("Hello Stranger");
  });
  it('describe this test 3', () => {
    expect(nameThisFunction(undefined)).toBe("Hello Stranger");
  });
});
