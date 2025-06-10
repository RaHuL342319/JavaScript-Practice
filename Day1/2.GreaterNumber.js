/* ### 2. Greater Number
Write a function that takes two numbers as input and determines which one is greater.
```js
console.log(isGreater(2, 5)) // 5 is greater than 2
console.log(isGreater(10, 5)) // 10 is greater than 5
``` */

function isGreater(num1, num2) {
  if (num1 > num2) {
    return `${num1} is greater than ${num2}`;
  } else if (num2 > num1) {
    return `${num2} is greater than ${num1}`;
  } else {
    return `${num1} and ${num2} are equal`;
  }
}
// Example usage
console.log(isGreater(2, 5)); // 5 is greater than 2
console.log(isGreater(10, 5)); // 10 is greater than 5
console.log(isGreater(7, 7)); // 7 and 7 are equal
