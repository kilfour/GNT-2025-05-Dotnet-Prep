import { nameThisFunction } from './sumLoop.js';

describe('describe this functionality', () => {
  it('describe this test 1', () => {
    expect(nameThisFunction([1, 2, 3])).toBe(6);
  });
  it('describe this test 2', () => {
    expect(nameThisFunction([])).toBe(0);
  });
  it('describe this test 3', () => {
    expect(nameThisFunction([10])).toBe(10);
  });
});
