# grasshopper-grade-book
// https://www.codewars.com/kata/grasshopper-grade-book/solutions/javascript/me/best_practice


```
function getGrade (...grades) {
  let mean = grades.reduce((x, y) => x + y) / grades.length;
  return mean >= 90 ? 'A' :
         mean >= 80 ? 'B' :
         mean >= 70 ? 'C' :
         mean >= 60 ? 'D' : 'F';
}
```
