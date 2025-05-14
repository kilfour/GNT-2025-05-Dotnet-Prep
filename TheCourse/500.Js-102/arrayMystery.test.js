import { nameThisFunction } from './arrayMystery.js';

describe('describe this functionality', () => {
    it('describe this test 1', () => {
        const input = [1, 2, 3];
        const result = nameThisFunction(input);
        expect(result).toBe(3);
        expect(input.length).toBe(2);
    });
});
