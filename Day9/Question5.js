const product = (numbers) =>
  numbers.reduce((acc, curr) => {
    acc *= curr;
    return acc;
  }, 1);
const numbers = [1, 2, 3, 4, 5];
// Your code here
console.log(product(numbers));
// Output: 120
