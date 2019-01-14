# hello-happy-codevarrior
// https://www.codewars.com/kata/hello-happy-codevarrior/solutions/javascript/me/best_practice


```
function Warrior(n){
  var name = n;
  this.name = n => {
    if(n) {
      name = n;
    }
    return name;
  }
}

Warrior.prototype.toString = function() {
  return `Hi! my name's ${this.name()}`;
}
```
