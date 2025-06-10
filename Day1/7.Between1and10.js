/**
 ### 7. Between 1 and 10
Write a function that takes a number as input and determines if it is between 1 and 10.
```js
console.log(isBetweenOneAndTen(5)) // true
console.log(isBetweenOneAndTen(11)) // false
```
 */

function isBetweenOneAndTen(num) {
  // Check if the number is between 1 and 10 (inclusive)
  if (num >= 1 && num <= 10) {
    return true;
  }
  return false;
}
// Example usage
console.log(isBetweenOneAndTen(5)); // true
console.log(isBetweenOneAndTen(11)); // false
