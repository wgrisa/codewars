# whats-up-next
// https://www.codewars.com/kata/whats-up-next/solutions/javascript/me/best_practice


```
function nextItem(xs, item) {
  for (let n of xs) {
    if(foundItem) {
      return n;
    }
    if (n === item) {
      var foundItem = true;
    }
  }
}
```
