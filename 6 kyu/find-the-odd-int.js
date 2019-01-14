# find-the-odd-int
// https://www.codewars.com/kata/find-the-odd-int/solutions/javascript/me/best_practice


```
const findOdd = numbers => {
  for(let i of numbers.sort()) {
    if(numbers.filter(x => x === i).length % 2 === 1) {
      return i;
    }
  }
}
```
