/**
 ### 3. Count Vowels in a String

Write a function to count the number of vowels in a given string.

```js
// Your ES6 code here
console.log(countVowels("hello world")); // 3
```

 */
const countVowels = (str) => {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

// Alternative using reduce
const countVowels2 = (str) => {
  const vowels = "aeiouAEIOU";
  return str.split("").reduce((count, char) => {
    return count + (vowels.includes(char) ? 1 : 0);
  }, 0);
};

console.log(countVowels("hello world")); // 3
console.log(countVowels2("hello world")); // 3`
