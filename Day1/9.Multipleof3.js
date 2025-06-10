/* ### 9. Multiple of 3
Write a function that takes a number as input and determines if it is a multiple of 3.
```js
console.log(isMultipleOfThree(5)) // false
console.log(isMultipleOfThree(9)) // true
```
*/

function isMultipleOfThree(num) {
  // Check if the number is a multiple of 3
  if (num % 3 === 0) {
    return true; // It is a multiple of 3
  }
  return false; // It is not a multiple of 3
}

// Example usage
console.log(isMultipleOfThree(5)); // false
console.log(isMultipleOfThree(9)); // true
