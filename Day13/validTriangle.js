const validTriangle = (a, b, c) => {
  // Check if the sum of any two sides is greater than the third side
  return a + b > c && a + c > b && b + c > a;
};
// Example usage:
console.log(validTriangle(3, 4, 5)); // Output: true (valid triangle)
console.log(validTriangle(1, 2, 3)); // Output: false (not a valid triangle)
console.log(validTriangle(5, 5, 10)); // Output: false (not a valid triangle)
console.log(validTriangle(7, 10, 5)); // Output: true (valid triangle)
console.log(validTriangle(0, 0, 0)); // Output: false (not a valid triangle)
