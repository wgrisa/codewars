# rock-paper-scissors
// https://www.codewars.com/kata/rock-paper-scissors/solutions/javascript/me/best_practice


```
const rps = (p1, p2) => p1 === p2 ? 'Draw!' : [['rock', 'scissors'],['scissors', 'paper'],['paper', 'rock']].filter(x => x[0] === p1 && x[1] === p2 || x[0] === p2 && x[1] === p1).pop()[0] === p1 ? 'Player 1 won!' : 'Player 2 won!';
```
