import { nameThisFunction } from './sumStrange.js';

describe('describe this functionality', () => {
    it('describe this test 1', () => {
        expect(nameThisFunction("2", 2)).toBe(4);
    });
    it('describe this test 2', () => {
        expect(nameThisFunction(2, "2")).toBe(4);
    });
    it('describe this test 3', () => {
        expect(nameThisFunction("2", "2")).toBe(4);
    });
});
