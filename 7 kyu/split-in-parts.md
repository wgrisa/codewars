# split-in-parts
// https://www.codewars.com/kata/split-in-parts/solutions/javascript/me/best_practice


```
var splitInParts = function(s, partLength) {
  let index = 0,
      newString = "";

  while (index < s.length) {
    newString += s.substring(index, index + partLength) + " ";
    index += partLength;
  }

  return newString.trim();
}
```
