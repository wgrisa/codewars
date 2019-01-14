# printer-errors
// https://www.codewars.com/kata/printer-errors/solutions/javascript/me/best_practice


```
const printerError = s => s.match(/[^a-m]/ig) ? `${s.match(/[^a-m]/ig).length}/${s.length}` : `0/${s.length}`;
```
