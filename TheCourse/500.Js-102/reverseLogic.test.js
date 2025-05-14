import { nameThisFunction } from './reverseLogic.js';

describe('describe this functionality', () => {
    it('describe this test 1', () => {
        expect(nameThisFunction(true)).toBe("no");
    });
    it('describe this test 2', () => {
        expect(nameThisFunction(false)).toBe("yes");
    });
    it('describe this test 3', () => {
        expect(nameThisFunction("")).toBe("yes");
    });
});
