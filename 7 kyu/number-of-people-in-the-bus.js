# number-of-people-in-the-bus
// https://www.codewars.com/kata/number-of-people-in-the-bus/solutions/javascript/me/best_practice


```
var number = function(busStops){
  var inBus = 0;
  var outBus = 0;

  for(var i = 0; i < busStops.length; i++) {
    inBus += parseFloat(busStops[i][0]);
    outBus += parseFloat(busStops[i][1]);
  }

  return inBus - outBus
}
```
