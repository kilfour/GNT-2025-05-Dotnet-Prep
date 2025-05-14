import { nameThisFunction } from './flipTruth.js';

describe('describe this functionality', () => {
    it('describe this test 1', () => {
        expect(nameThisFunction(true)).toBe(false);
    });
    it('describe this test 2', () => {
        expect(nameThisFunction(false)).toBe(true);
    });
    it('describe this test 3', () => {
        expect(nameThisFunction("")).toBe(true);
    });
    it('describe this test 4', () => {
        expect(nameThisFunction("something")).toBe(false);
    });
});
