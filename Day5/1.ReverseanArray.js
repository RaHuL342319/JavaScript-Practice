/*
### 1. Reverse an Array

Write an ES6 function that reverses an array without using the `.reverse()` method.
console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
*/

// Your ES6 code here
// const reverseArray = (arr) => {
//   return arr.reduce((acc, curr) => {
//     acc.unshift(curr);
//     return acc;
//   }, []);
// };

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const reverseArray = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    swap(arr, i, arr.length - 1 - i);
  }
  return arr;
};

console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]
