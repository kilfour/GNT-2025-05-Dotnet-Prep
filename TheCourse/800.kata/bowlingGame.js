export class BowlingGame {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
    let score = 0;
    let rollIndex = 0;
    for (let frame = 0; frame < 10; frame++) {
      const isStrike = this.rolls[rollIndex] === 10;
      const isSpare = this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;

      if (isStrike) {
        score += 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
        rollIndex += 1;
      } else if (isSpare) {
        score += 10 + this.rolls[rollIndex + 2];
        rollIndex += 2;
      } else {
        score += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
        rollIndex += 2;
      }
    }
    return score;
  }
}
