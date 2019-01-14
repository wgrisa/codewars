# convert-number-to-reversed-array-of-digits
// https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits/solutions/javascript/me/best_practice


```
const digitize = n => Array.from(`${n}`).map(x => +x).reverse();
```
