import { nameThisFunction } from './greeting.js';

describe('describe this functionality', () => {
    it('describe this test 1', () => {
        expect(nameThisFunction()).toBe("Hello Stranger");
    });
    it('describe this test 2', () => {
        expect(nameThisFunction(null)).toBe("Hello null");
    });
    it('describe this test 3', () => {
        expect(nameThisFunction("You")).toBe("Hello You");
    });
});
