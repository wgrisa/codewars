# mumbling
// https://www.codewars.com/kata/mumbling/solutions/javascript/me/best_practice


```
const accum = s => Array.from(s).map((x, y) => Array(y + 2).join(x.toLowerCase())).join('-').replace(/^[a-z]|\-[a-z]{1}/g, x => x.toUpperCase());
```
