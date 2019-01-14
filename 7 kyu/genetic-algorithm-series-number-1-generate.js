# genetic-algorithm-series-number-1-generate
// https://www.codewars.com/kata/genetic-algorithm-series-number-1-generate/solutions/javascript/me/best_practice


```
const generate = length => Array.from({length: length}, () => +((Math.random() * 2) < 1)).join('');
```
