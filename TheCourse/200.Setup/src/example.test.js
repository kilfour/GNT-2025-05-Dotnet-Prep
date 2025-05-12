
import { describe, it, expect } from 'vitest';
import { exists } from './example.js';

describe('example', () => {
    it('exists', () => {
        expect(exists()).toBe(true);
    });
});



