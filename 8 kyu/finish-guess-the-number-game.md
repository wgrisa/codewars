# finish-guess-the-number-game
// https://www.codewars.com/kata/finish-guess-the-number-game/solutions/javascript/me/best_practice


```
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    return this.lives === 0 ? alreadyDead() : n === this.number ? true : (--this.lives, false);
  }
}

const alreadyDead = () => { throw 'already dead'; }
```
