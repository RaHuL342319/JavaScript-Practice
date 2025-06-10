/**
 ### 8. Contains “hello”
Write a function that takes a string as input and determines if it contains the word "hello".
```js
console.log(isHelloPresent('Hello World')) // true
console.log(isHelloPresent('World')) // false
```

 */

function isHelloPresent(str) {
  // Convert the string to lowercase to make the check case-insensitive
  const lowerStr = str.toLowerCase();

  // Check if the string contains "hello"
  if (lowerStr.includes("hello")) {
    return true;
  } else {
    return false;
  }
}
// Example usage
console.log(isHelloPresent("Hello World")); // true
console.log(isHelloPresent("World")); // false
