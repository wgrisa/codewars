# unexpected-parsing
// https://www.codewars.com/kata/unexpected-parsing/solutions/javascript/me/best_practice


```
function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");

  console.log(msg)

  return {
    status : msg
  }
}
```

```
function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  console.log(msg);
  return {status: msg}
}
```

```
function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  console.log(msg);
  return {
    status: msg
  }
}
```

```
function getStatus(isBusy) {
  var msg = isBusy ? "busy" : "available";
  console.log(msg)
  return {status: msg}
}
```
