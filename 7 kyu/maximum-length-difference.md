# maximum-length-difference
// https://www.codewars.com/kata/maximum-length-difference/solutions/javascript/me/best_practice


```
const mxdiflg = (a1, a2) => !a1.length || !a2.length ? -1 : Math.max(...calculateAbsolutes(a1, a2));

const calculateAbsolutes = (a1, a2) => {
  let absolutes = [];
  for(let i of a1) {
    for(let j of a2) {
      absolutes.push(Math.abs(i.length - j.length));
    }
  }
  return absolutes;
}
```
