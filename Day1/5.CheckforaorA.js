/*
### 5. Check for 'a' or 'A'
Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.
```js
console.log(checkForAlphabetA('Rahul')) // Includes a
console.log(checkForAlphabetA('Jeep')) // Does not include a
console.log(checkForAlphabetA('Jane')) // Includes a
```
*/

// Make use of `for-loops` and `if-else` statements wherever needed.
// This function checks if the input string contains the letter 'a' or 'A'.

function checkForAlphabetA(str) {
  const lowerStr = str.toLowerCase();
  // Check if 'a' is present in the string
  if (lowerStr.includes("a")) {
    return "Includes a";
  } else {
    return "Does not include a";
  }
}

// Example usage
console.log(checkForAlphabetA("Rahul")); // Includes a
console.log(checkForAlphabetA("Jeep")); // Does not include a
console.log(checkForAlphabetA("Jane")); // Includes a
