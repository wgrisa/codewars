# lexical-this
// https://www.codewars.com/kata/lexical-this/solutions/javascript/me/best_practice


```
var Person = function(){
  return {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {
      this._friends = this._friends.concat(f);
    }
  }
}
```

```
var Person = function () {
  return {
    _name: 'Leroy',
    _friends: [],
    fillFriends (f) {
      this._friends = this._friends.concat(f);
    }
  };
};
```
