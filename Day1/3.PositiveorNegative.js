/**
 
### 3. Positive or Negative
Write a function that takes a number as input and determines if it is positive or negative.
```js
console.log(checkNum(9)) // Positive Number
console.log(checkNum(-8)) // Negative Number
console.log(checkNum(22)) // Positive Number
```

 */

function checkNum(num) {
  if (num > 0) {
    return "Positive Number";
  } else if (num < 0) {
    return "Negative Number";
  } else {
    return "Zero is neither positive nor negative";
  }
}
// Example usage
console.log(checkNum(9)); // Positive Number
console.log(checkNum(-8)); // Negative Number
console.log(checkNum(0)); // Zero is neither positive nor negative
