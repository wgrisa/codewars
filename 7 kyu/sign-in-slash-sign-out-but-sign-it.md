# sign-in-slash-sign-out-but-sign-it
// https://www.codewars.com/kata/sign-in-slash-sign-out-but-sign-it/solutions/javascript/me/best_practice


```
const sign = (number) => {
  if(number < 0) {
    return -1
  }
  else if(number > 0 ) {
    return 1
  }
  else if(number == 0){
    return 0
  }

  return NaN
}
```
