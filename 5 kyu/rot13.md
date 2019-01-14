# rot13
// https://www.codewars.com/kata/rot13/solutions/javascript/me/best_practice


```
const rot13 = str => {
  let normal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let rot = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  let result = '';

  for(let i of str) {
    result += normal.indexOf(i) > -1 ? (rot[normal.indexOf(i)]) : i;
  }

  return result;
}
```
