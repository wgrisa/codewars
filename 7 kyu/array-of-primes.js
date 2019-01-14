# array-of-primes
// https://www.codewars.com/kata/array-of-primes/solutions/javascript/me/best_practice


```
const primes = (start, end) => {
  let primes = Array.from({length: end - start + 1}, (v, k) => start + k).filter(isPrime);
  return primes.length > 0 ? primes : null;
}

const isPrime = num => {
  if(num < 2) {
    return false;
  }
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}
```
