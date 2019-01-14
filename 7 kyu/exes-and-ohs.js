# exes-and-ohs
// https://www.codewars.com/kata/exes-and-ohs/solutions/javascript/me/best_practice


```
const XO = str => {
  let arr = Array.from(str.toLowerCase());
  let os = arr.filter(x => x === 'o').length;
  let aos = arr.filter(x => x === 'x').length;
  return os === aos;
}
```
