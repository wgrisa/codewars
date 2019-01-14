# beginner-series-number-3-sum-of-numbers
// https://www.codewars.com/kata/beginner-series-number-3-sum-of-numbers/solutions/javascript/me/best_practice


```
function GetSum( a,b )
{
  if(a == b)
  {
    return a;
  }
  else if(b < a)
  {
    return sumValues(b,a)
  }
  else
  {
    return sumValues(a,b)
  }
}

function sumValues( a,b )
{
  var sum = 0;

  for(a; a <= b; a++) {
      sum += a;
  }

  return sum
}

```
