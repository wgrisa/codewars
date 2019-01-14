# mobile-operator-detector
// https://www.codewars.com/kata/mobile-operator-detector/solutions/javascript/me/best_practice


```
const detectOperator = a => {
  switch(`${a}`.match(/.(\d{3})/)[1]) {
    case '093' :
    case '063' :
    case '093' : return 'Life:)';
    case '050' :
    case '066' :
    case '095' : return 'MTS';
    case '067' :
    case '096' :
    case '097' :
    case '098' : return 'Kyivstar';
    case '099' : return 'MTS Test';
    case '068' : return 'Beeline';
    case '039' : return 'Golden Telecom';
    default : return "no info";
  }
}
```
