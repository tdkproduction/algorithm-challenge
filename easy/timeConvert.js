/*
  have the function timeConvert(num) take the num parameter being passed and return the number of hours and minutes the paramter
  converts to .

  separate the number of hours and minutes with a colon.
*/

const timeConvert = num => {
  
  return Math.floor(num / 60) + ':' + num % 60;
}

console.log(timeConvert(126)); // 2:6