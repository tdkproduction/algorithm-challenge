/*
  take the str parameter being passed and capitalize the first letter of each word.
*/

const letterCapitalize = str => {
  return str 
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(letterCapitalize('my name is thomas'));