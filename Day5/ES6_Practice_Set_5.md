## ES6+ Practice Question Set 5

**Instructions**: Avoid usage of in-built methods in JavaScript. You may use basic methods like `.length`, `toLowerCase()`, `toUpperCase()`, `push()` etc. Use `for` loops and `if-else` as needed.

---

### 1. Reverse an Array

Write an ES6 function that reverses an array without using the `.reverse()` method.

```js
// Your ES6 code here
console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
```

### 2. Find Minimum Element

Write a function that returns the minimum element in an array of numbers.

```js
// Your ES6 code here
console.log(getMinElement([12, 4, 56, 2, 89])); // 2
```

---

### 3. Count Vowels in a String

Write a function to count the number of vowels in a given string.

```js
// Your ES6 code here
console.log(countVowels("hello world")); // 3
```

---

### 4. Multiply Elements by Index

Write a function that takes an array and returns a new array where each element is multiplied by its index.

```js
// Your ES6 code here
console.log(multiplyByIndex([1, 2, 3, 4])); // [0, 2, 6, 12]
```

---

### 5. Convert String to Array

Write a function that takes a string and returns an array of its characters.

```js
// Your ES6 code here
console.log(stringToArray("hello")); // ['h', 'e', 'l', 'l', 'o']
```

---

### 6. Check if Palindrome

Write a function that checks whether a given string is a palindrome.

```js
// Your ES6 code here
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
```

---

### 7. Capitalize First Letter of Each Word

Write a function that capitalizes the first letter of each word in a string.

```js
// Your ES6 code here
console.log(capitalizeSentence("hello world from es6")); // "Hello World From Es6"
```

---

### 8. Find Duplicates in Array

Write a function that returns all duplicate numbers from an array.

```js
// Your ES6 code here
console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1])); // [2, 1]
```

---

### 9. Sum of Odd Numbers

Write a function that returns the sum of all odd numbers in an array.

```js
// Your ES6 code here
const sumOfOdds = (arr) =>
  arr.reduce((acc, curr) => {
    if (curr % 2 != 0) acc + curr;
    return curr;
  });
console.log(sumOfOdds([1, 2, 3, 4, 5])); // 9
```

---

### 10. Count Occurrences of a Character

Write a function that takes a string and a character and returns the number of times the character appears in the string.

```js
// Your ES6 code here
const countChar = 
console.log(countChar("hello", "l")); // 2
```

---

**Keep Practicing and Strengthen Your ES6 Skills!**
