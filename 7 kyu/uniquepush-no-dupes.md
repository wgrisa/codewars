# uniquepush-no-dupes
// https://www.codewars.com/kata/uniquepush-no-dupes/solutions/javascript/me/best_practice


```
//only push obj onto arr if it has a unique phoneNumber
function uniquePush(arr, obj) {
  if(obj.phoneNumber && arr.every(x => x.phoneNumber !== obj.phoneNumber)) {
    arr.push(obj);
    return true;
  }

  return false;
}
```
