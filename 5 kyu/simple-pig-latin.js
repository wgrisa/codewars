# simple-pig-latin
// https://www.codewars.com/kata/simple-pig-latin/solutions/javascript/me/best_practice


```
const pigIt = str => {
  const words = str.split(' ');
  let newPhrase = [];

  for (word of words) {
    let newWord = Array.from(word);
    const firstLetter = newWord[0];

    newWord.shift();
    newWord = newWord.join('');
    newWord = `${newWord}${firstLetter}ay`;

    newPhrase.push(newWord);
  }

  return newPhrase.join(' ');
};

```
