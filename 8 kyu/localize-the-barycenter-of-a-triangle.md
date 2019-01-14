# localize-the-barycenter-of-a-triangle
// https://www.codewars.com/kata/localize-the-barycenter-of-a-triangle/solutions/javascript/me/best_practice


```
function barTriang(p1, p2, p3){
  let barycenter = [];
  barycenter.push(parseFloat(((p1[0] + p2[0] + p3[0]) /3).toFixed(4)));
  barycenter.push(parseFloat(((p1[1] + p2[1] + p3[1]) /3).toFixed(4)));
  return barycenter;
}
```
