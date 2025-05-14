import { nameThisFunction } from './varHoistSurprise.js';

describe('describe this functionality', () => {
    it('describe this test 1', () => {
        expect(nameThisFunction()).toBe(undefined);
    });
});
