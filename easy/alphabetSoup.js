/*  
  have the function alphabetSoup(str) take the str parameter beging pased and 
  return the string with the letters in alphabetical order.
  
  assume the numbers and punctuation symbols will not be included in the string.
*/

const alphabetSoup = str => str.split('').sort().join('');

