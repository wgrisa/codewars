# invalid-login-bug-fixing-number-11
// https://www.codewars.com/kata/invalid-login-bug-fixing-number-11/solutions/javascript/me/best_practice


```
function validate(username, password){
  if(/\|\||\\\\/.test(`${username}${password}`)) {
    return 'Wrong username or password!';
  }
  var database = new Database();
  return database.login(username, password);
}
```
