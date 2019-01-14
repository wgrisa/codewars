# formatting-decimal-places-number-1
// https://www.codewars.com/kata/formatting-decimal-places-number-1/solutions/javascript/me/best_practice


```
const twoDecimalPlaces = n => +`${n}`.match(/\-?\d+\.\d{2}/g);
```
