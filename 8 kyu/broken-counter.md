# broken-counter
// https://www.codewars.com/kata/broken-counter/solutions/javascript/me/best_practice


```
const Counter = () => { this.value = 0; }
Counter.prototype.increase = () => { this.value++; }
Counter.prototype.getValue = () => this.value;
Counter.prototype.reset = () => { this.value = 0; }
```

```
const Counter = () => this.value = 0;
Counter.prototype.increase = () => this.value++;
Counter.prototype.getValue = () => this.value;
Counter.prototype.reset = () => this.value = 0;
```
