/**
### 15. Default Parameters
Convert the given function into ES6 with least amount of characters.
```js
function defaultParamsFunc(a, b, c) {
  if (c === undefined) {
    c = 4
  }
  return a * b * c
}
console.log(defaultParamsFunc(3, 1)) // 12
console.log(defaultParamsFunc(3, 10)) // 120
```
*/

function defaultParamsFunc(a, b, c = 4) {
  return a * b * c;
}
console.log(defaultParamsFunc(3, 1)); // 12
console.log(defaultParamsFunc(3, 10)); // 120
console.log(defaultParamsFunc(3, 10, 2)); // 60
