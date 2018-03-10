/*
  take the str parameter being passed and modify it using the following algorithm:
  * replace every letter in the string with the letter follwoing it in the alphabet.
  * capitalize every vowel int the new string
  * return the modified string

*/


function LetterChanges(str) {
  var res = [];
  var nxtChar;
  for (var i = 0; i < str.length; i++) {
    nxtChar = String.fromCharCode(str.charCodeAt(i) + 1);
    str[i].match(/[a-z]/gi)
      ? nxtChar.match(/[aeiou]/)
        ? res.push(nxtChar.toUpperCase())
        : res.push(nxtChar)
      : res.push(str[i]);
  }
  return res.join("");
}

// or

function LetterChanges(str) {
  // code goes here
  const arr = str
    .toLowerCase()
    .trim()
    .split("")
    .map(el => {
      if (el === "z") {
        return 97;
      }

      if (el.match(/[a-z]/g)) {
        return el.charCodeAt() + 1;
      }

      return el.charCodeAt();
    });
  return String.fromCharCode(...arr).replace(/[aeiou]/g, letter =>
    letter.toUpperCase()
  );
}
