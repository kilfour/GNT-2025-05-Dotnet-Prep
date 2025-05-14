import { nameThisFunction } from './zeroOrNot.js';

describe('describe this functionality', () => {
    it('describe this test 1', () => {
        expect(nameThisFunction(0)).toBe("Zero");
    });
    it('describe this test 2', () => {
        expect(nameThisFunction("0")).toBe("String Zero");
    });
    it('describe this test 3', () => {
        expect(nameThisFunction(false)).toBe("False");
    });
});
