/*
  have the function checkNums(n1, n2) take both parameters being passed and return the string true if 
  n2 is greater than n1, otherwise return the string false.

  if the parameter values are equal to each other, return the string -1
*/

const checkNums = (n1, n2) => {
  
  return n1 === n2 ? "-1" : n2 > n1 ? "true" : "false";
}

console.log(checkNums(1, 5)); // "true"
console.log(checkNums(7, 5)); // "false"

