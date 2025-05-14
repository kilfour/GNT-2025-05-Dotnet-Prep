import { describe, it, expect, beforeEach } from 'vitest';
import { BowlingGame } from './bowlingGame.js';

describe('describe this functionality', () => {
  let game;

  beforeEach(() => {
    game = new BowlingGame();
  });

  function rollMany(n, pins) {
    for (let i = 0; i < n; i++) {
      game.roll(pins);
    }
  }

  it('describe this test 1', () => {
    rollMany(20, 0);
    expect(game.score()).toBe(0);
  });
});
