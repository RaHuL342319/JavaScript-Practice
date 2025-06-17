const sumSquares = (numbers) =>
  numbers.reduce((acc, curr) => {
    acc += curr * curr;
    return acc;
  }, 0);
const numbers = [1, 2, 3, 4, 5];
// Your code here
console.log(sumSquares(numbers));
// Output: 55
