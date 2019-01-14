# genetic-algorithm-series-number-2-mutation
// https://www.codewars.com/kata/genetic-algorithm-series-number-2-mutation/solutions/javascript/me/best_practice


```
const mutate = (chromosome, p) => p === 1 ? chromosome.replace(/[01]/g, x => x === '0' ? x = '1' : x = '0') : p > 0 ? chromosome.replace(/[01]/g, x => x = ~~(Math.random() > p)) : chromosome;
```
