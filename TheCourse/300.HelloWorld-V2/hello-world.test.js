
import { describe, it, expect } from 'vitest';
import { helloWorld } from './hello-world.js';

describe('helloWorld', () => {
    it('greets the world', () => {
        expect(helloWorld()).toBe("Hello world!");
    });
});



