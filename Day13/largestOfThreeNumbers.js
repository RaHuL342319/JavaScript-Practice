// const largestOfThreeNumbers = (a, b, c) => {
//   return Math.max(a, b, c);
// };

const largestOfThreeNumbers = (a, b, c) => {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
};

// Example usage:
console.log(largestOfThreeNumbers(5, 10, 15)); // Output:
// Output: 15
console.log(largestOfThreeNumbers(-2, 4, 6)); // Output:
// Output: 6
