/*
### 6. String Length
Write a function that takes a string as input and determines if it is longer than 5 characters.
```js
console.log(checkLength('Programming')) // more than 5 characters
console.log(checkLength('Jeep')) // less than 5 characters
```

*/

function checkLength(str) {
  // Check if the length of the string is greater than 5
  if (str.length > 5) {
    return "more than 5 characters";
  } else {
    return "less than or equal to 5 characters";
  }
}

// Example usage
console.log(checkLength("Programming")); // more than 5 characters
console.log(checkLength("Jeep")); // less than or equal to 5 characters
console.log(checkLength("Hello")); // less than or equal to 5 characters
