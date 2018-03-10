// have a function take a parameter begin passed and return the largest word in the string.
// if there are two or more words that are the same length, return the first word from the string with that length.
// ignore punctuation and asssume sen will not be empty.

function longestWord(sen) {
  return sen
    .match(/[\w]+/g)
    .sort((a,b) => b.length - a.length)
    .shift();
}

