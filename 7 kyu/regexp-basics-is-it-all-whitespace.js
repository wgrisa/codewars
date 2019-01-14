# regexp-basics-is-it-all-whitespace
// https://www.codewars.com/kata/regexp-basics-is-it-all-whitespace/solutions/javascript/me/best_practice


```
String.prototype.whitespace = function() {
  return !/[^\s]/g.test(this);
}
```

```
String.prototype.whitespace=function(){
  return !/[^\s]/g.test(this)
}
```
