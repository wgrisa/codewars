# grasshopper-summation
// https://www.codewars.com/kata/grasshopper-summation/solutions/javascript/me/best_practice


```
var summation = num => Array.from({length: num}, (value, index) => index + 1).reduce((pre, curr) => pre + curr, 0);
```
