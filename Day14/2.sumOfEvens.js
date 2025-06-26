/**
 Sum of evens

You are given a single positive integer, N. 
You need to calculate and print the sum of all even numbers which occur in the range 1 to N (both inclusive).
 */

const sumOfEvens = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumOfEvens(10));
