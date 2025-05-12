import { describe, it, expect } from 'vitest';
import * as eq from './equality.js';


describe('undefined, null en gelijkheid', () => {
  it('getX() returns undefined', () => {
    expect(eq.getX()).toBe(42 /* answer here */);
  });

  it('getX() returns undefined bonus points', () => {
    expect(eq.getX()).toBe(42 /* different answer here */);
  });

  it('doNothing() returns undefined', () => {
    expect(eq.doNothing()).toBe(42 /* answer here */);
  });

  it('undefined !== null met ===', () => {
    expect(eq.isStrictlyEqual(undefined, null)).toBe(42 /* answer here */);
  });

  it('undefined == null met ==', () => {
    expect(eq.isLooselyEqual(undefined, null)).toBe(42 /* answer here */);
  });

  it('NaN !== NaN met ===', () => {
    expect(eq.isStrictlyEqual(NaN, NaN)).toBe(42 /* answer here */);
  });

  it('NaN === NaN met Object.is', () => {
    expect(eq.isSame(NaN, NaN)).toBe(42 /* answer here */);
  });

  it('-0 === 0 met ===', () => {
    expect(eq.isStrictlyEqual(-0, 0)).toBe(42 /* answer here */);
  });

  it('-0 !== 0 met Object.is', () => {
    expect(eq.isSame(-0, 0)).toBe(42 /* answer here */);
  });
});

