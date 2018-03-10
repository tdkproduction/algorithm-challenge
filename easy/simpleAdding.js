/*
  add up all the numbers from 1 to n
*/

const simpleAdding = n => {
  return Array(n)
    .fill()
    .map((n, i) => i + 1)
    .reduce((acc, cur) => acc + cur);
}

console.log(simpleAdding(5)); //