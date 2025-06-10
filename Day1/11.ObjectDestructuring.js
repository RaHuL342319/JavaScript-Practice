/*
### 11. Object Destructuring
Console individual values of the product object using object destructuring.
```js
const product = {
  title: 'iPhone',
  price: 5999,
  description: 'The iPhone is a smartphone developed by Apple',
}
console.log(title) // iPhone
console.log(price) // 5999
console.log(description) // The iPhone is a smartphone developed by Apple
```

*/

const product = {
  title: "iPhone",
  price: 5999,
  description: "The iPhone is a smartphone developed by Apple",
};
const { title, price, description } = product;

console.log(title); // iPhone
console.log(price); // 5999
console.log(description); // The iPhone is a smartphone developed by Apple
