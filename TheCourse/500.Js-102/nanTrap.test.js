import { nameThisFunction } from './nanTrap.js';

describe('describe this functionality', () => {
    it('describe this test 1', () => {
        expect(nameThisFunction("a")).toBe(true);
    });
    it('describe this test 2', () => {
        expect(nameThisFunction("123")).toBe(false);
    });
    it('describe this test 3', () => {
        expect(nameThisFunction("")).toBe(true);
    });
});
