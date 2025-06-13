/* 2. Find Minimum Element

Write a function that returns the minimum element in an array of numbers.

```js
Your ES6 code here
console.log(getMinElement([12, 4, 56, 2, 89])); // 2
```
*/
const getMinElement = (arr) => {
  if (arr.length > 0) {
    // Initialize the first element as the minimum
    let minElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[0]) {
        minElement = arr[i];
      }
    }
    return minElement;
  }
  return -1;
};

// const getMinElement = (arr) => {
//   if (arr.length === 0) return -1; // Return -1 for empty array
//   return arr.reduce((min, current) => (current < min ? current : min), arr[0]);
// };

console.log(getMinElement([12, 4, 56, 2, 89])); // 2
