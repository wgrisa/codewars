# sum-of-numbers-from-0-to-n
// https://www.codewars.com/kata/sum-of-numbers-from-0-to-n/solutions/javascript/me/best_practice


```
const SequenceSum = {
  showSequence (count) {
    if (count <= 0) {
      return count < 0 ? `${count}<0` : '0=0';
    }
    const values = [...Array(count + 1).keys()];
    return `${values.join('+')} = ${values.reduce((total, next) => total + next)}`;
  }
}

```
