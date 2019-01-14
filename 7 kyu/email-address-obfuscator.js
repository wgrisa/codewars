# email-address-obfuscator
// https://www.codewars.com/kata/email-address-obfuscator/solutions/javascript/me/best_practice


```
const obfuscate = email => email.replace(/(@)/, (match, at) => at = ' [at] ').replace(/(\.)/g, (match, point) => point = ' [dot] ');
```
