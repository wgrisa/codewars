# get-the-middle-character
// https://www.codewars.com/kata/get-the-middle-character/solutions/javascript/me/best_practice


```
const getMiddle = s => s.length & 1 ? s.charAt(Math.floor(s.length / 2)) : s.slice(s.length / 2 - 1, s.length / 2 + 1);
```
