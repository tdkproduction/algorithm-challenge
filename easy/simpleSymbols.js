/*
  take the str parameter being passed and determine if it is an acceptable sequence by either returning the 
  string true or false.

  the str parameter will be composed of + and = symbols with several letters between them.

  for the string to return true each letter mush be surrounded by a + symbol.

*/


const simpleSymbols = str => {
  return str.split("").every((l, i, array) => {
    if (l.match(/[a-zA-Z]/)) {
      return array[i - 1] === "+" && array[i + 1] === "+";
    }

    return true;
  });
};

const str1 = '+a+===+b+=+c+';
const str2 = '+a+===+b+=+c';

console.log(simpleSymbols(str1)); // true
console.log(simpleSymbols(str2)); // false
