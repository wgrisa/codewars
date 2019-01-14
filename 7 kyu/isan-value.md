# isan-value
// https://www.codewars.com/kata/isan-value/solutions/javascript/me/best_practice


```
const isAN = value => !isNaN(value) && typeof value !== 'boolean' && value !== null && typeof value !== 'string' && value.constructor !== Array;
```
