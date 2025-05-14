import { nameThisFunction } from './isEvenVerbose.js';

describe('describe this functionality', () => {
  it('describe this test 1', () => {
    expect(nameThisFunction(2)).toBe(true);
  });
  it('describe this test 2', () => {
    expect(nameThisFunction(3)).toBe(false);
  });
  it('describe this test 3', () => {
    expect(nameThisFunction(0)).toBe(true);
  });
});
