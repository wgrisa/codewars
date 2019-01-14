# tip-calculator
// https://www.codewars.com/kata/tip-calculator/solutions/javascript/me/best_practice


```
function calculateTip(amount, rating) {
  let ratings = {
    TERRIBLE : 0,
    POOR : 0.05,
    GOOD : 0.10,
    GREAT : 0.15,
    EXCELLENT : 0.20
  };

  if(ratings[rating.toUpperCase()] === undefined) {
    return "Rating not recognised";
  }

  return Math.ceil(ratings[rating.toUpperCase()] * amount);
}
```
