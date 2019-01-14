# smallest-unused-id
// https://www.codewars.com/kata/smallest-unused-id/solutions/javascript/me/best_practice


```
const nextId = ids => ids.indexOf(0) > -1 ? ids.sort((x, y) => x - y).reduce((prev, curr) => curr !== prev + 1 ? prev : prev + 1, 0) + 1 : 0;
```
