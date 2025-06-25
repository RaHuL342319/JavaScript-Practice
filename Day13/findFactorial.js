/**
You are given a single non-negative integer, N. You need to calculate and print N factorial (N!)
N factorial is defined as the product of all integers from 1 to N (both inclusive)
 */

const findFactorial = (num) => {
  if (num < 0) {
    return "Invalid Input";
  }

  if (num == 0 || num === 1) {
    return 1;
  }

  let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact *= i;
  }
  return fact;
};

// Example
console.log(findFactorial(5));
console.log(findFactorial(0));
console.log(findFactorial(-1));
