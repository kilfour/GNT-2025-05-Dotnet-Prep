import { nameThisFunction } from './letShadow.js';

describe('describe this functionality', () => {
    it('describe this test 1', () => {
        expect(nameThisFunction()).toBe("outer");
    });
});
