import { nameThisFunction } from './undefinedTrick.js';

describe('describe this functionality', () => {
    it('describe this test 1', () => {
        expect(nameThisFunction()).toBe("missing");
    });
    it('describe this test 2', () => {
        expect(nameThisFunction(undefined)).toBe("explicit");
    });
    it('describe this test 3', () => {
        expect(nameThisFunction(null)).toBe("null");
    });
});
