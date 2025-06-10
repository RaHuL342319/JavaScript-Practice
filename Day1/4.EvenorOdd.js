/* ### 4. Even or Odd
Write a function that takes a number as input and determines if it is even or odd.
```js
console.log(isEvenOdd(5)) // Odd Number
console.log(isEvenOdd(8)) // Even Number
console.log(isEvenOdd(10)) // Even Number
```
*/

function isEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even Number";
  } else {
    return "Odd Number";
  }
}

// Example usage
console.log(isEvenOdd(5)); // Odd Number
console.log(isEvenOdd(8)); // Even Number
