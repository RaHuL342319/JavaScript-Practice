# ES6+ Practice Question Set 3

**Instructions:** Avoid usage of in-built methods in JavaScript. You can make use of basic methods such as `.length`, `toLowerCase()`, `toUpperCase()`, `push()` if needed. Make use of `for`-loops and `if-else` statements wherever needed.

---

### Question 1

Create a function that takes an array of strings as an argument and returns a string that includes the number of items in the array and the first and last items.

### Solution:

```js
// Your ES6 code here
const formatArray = (arr) =>
  `the first item is ${arr[0]}, and the last item is ${arr[arr.length - 1]}`;
const items = ["apple", "banana", "orange"];
const message = formatArray(items);
console.log(message);
// The array has 3 items, and the first item is "apple", and the last item is "orange".
```

---

### Question 2

Create a function that takes a product object as an argument and returns a string that includes the product name, price, and a message based on whether it is in stock or not.

###Solution:

```js
// Your ES6 code here
const formatProduct = (product) =>
  `${product.name} costs INR ${product.price} and is ${
    product.inStock ? "in" : "not in"
  } stock`;
const product = {
  name: "Socks",
  price: 249,
  inStock: true,
};
const message = formatProduct(product);
console.log(message);
// Socks costs INR 249 and is in stock.
```

---

### Question 3

Write a function `findPerson` that takes an array of person objects and a name as parameters and returns the object with the matching name, or null if not found.

### Solution:

```js
// Your ES6 code here
const findPerson = (arr, personName) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === personName) {
      return arr[i];
    }
  }
  return "Person not found";
};

console.log(
  findPerson(
    [
      { name: "Amay", age: 25 },
      { name: "Akhil", age: 25 },
    ],
    "Akhil"
  )
);
```

---

### Question 4

Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.

### Solution:

```js
// Your ES6 code here
const pickFirstAndSecond = (arr) => {
  const [first, second] = arr;
  return { first, second };
};
console.log(pickFirstAndSecond(["orange", "banana", "apple"]));
// {first: 'orange', second: 'banana'}

console.log(pickFirstAndSecond(["red", "blue", "green"]));
// {first: 'red', second: 'blue'}
```

---

### Question 5

Convert the following code to ES6+ syntax with minimum number of characters.

### Solution:

```js
// function startsWithA(str) {
//   if (str.charAt(0) === "A") {
//     return true;
//   } else {
//     return false;
//   }
// }
const startsWithA = (str) => str.charAt(0) === "A";
console.log(startsWithA("Akshita")); // true
console.log(startsWithA("Jeena")); // false
```

---

### Question 6

Write an ES6 function to return only the first character of the given array.

### Solution:

```js
// Your ES6 code here
const printFirstCharacter = (arr) => console.log(arr[i]);
console.log(printFirstCharacter([1, 2, 3, 5, 8])); // 1
```

---

### Question 7

Write a function to return the last 5 characters as an array from the given array.

### Solution:

```js
// Your ES6 code here
const printLastFive = (arr) =>
  arr[arr.length - 5] ? arr.slice(arr.length - 5) : arr;
console.log(printLastFive([0, 1, 1, 2, 3, 5, 8])); // [1, 2, 3, 5, 8]
```

---

### Question 8

Write an ES6 function to return the second element of the given array by multiplying 20 to it.

### Solution:

```js
// Your ES6 code here
const printSecondCharacter = (arr) => arr[1] * 20;
console.log(printSecondCharacter([1, 2, 3, 5, 8])); // 40
```

---

### Question 9

Write an ES6 function to return the second element of the given array by adding “Hello” before it.

### Solution:

```js
// Your ES6 code here
const sayHello = (arr) => `Hello ${arr[1]}`;
console.log(sayHello(["Akshay", "Sweta", "Prerana", "Vinay"])); // Hello Sweta
console.log(sayHello(["Kanika", "Rakesh", "Prerana", "Puja"])); // Hello Rakesh
```

---

### Question 10

Write an ES6 function to return sum of all numbers at even indices of the given array.

### Solution:

```js
// Simple Way
const sumOfEvenIndices = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      sum += arr[i];
    }
  }
  return sum;
};

// By using reduce
const sumOfEvenIndices = (arr) => {
  return arr.reduce(
    (acc, curr, index) => (index % 2 === 0 ? acc + curr : acc),
    0
  );
};

console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])); // 6
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])); // 30
```

---

### Question 11

Write an ES6 function to return the sum of only first 2 elements of the array.

### Solution:

```js
// Your ES6 code here
const sumFirstTwoElements = (arr) => arr[0] + arr[1];
console.log(sumFirstTwoElements([10, 4, 3, 7, 1, 5])); // 14
console.log(sumFirstTwoElements([12, 14, 3, 27, 15])); // 26
```

---

### Question 12

Write an ES6 function to return the first element which is a multiple of 5 in the given array.

### Solution:

```js
// Your ES6 code here
const printMultipleOfFive = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0) {
      return arr[i];
    }
  }
  return -1;
};
console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3])); // 10
console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3])); // 5
```

---

### Question 13

Create a function which takes in the given object and returns another object only with the properties `postalCode` and `city` in it.

### Solution:

```js
// Your ES6 code here
const getAddress = ({ postalCode, city }) => {
  return {
    postalCode,
    city,
  };
};
const userData = {
  name: "Jane Doy",
  postalCode: "12134",
  city: "Germany",
};
console.log(getAddress(userData));
// {postalCode: '12134', city: 'Germany'}
```

---

### Question 14

Create a function which takes in the given object and returns a sentence which indicates name of the person and where the person lives.

### Solution:

```js
// Your ES6 code here
const printData = ({ name, country }) => `${name} lives in ${country}`;

const userData1 = {
  name: "Gaurav",
  postalCode: "12134",
  country: "Japan",
};
console.log(printData(userData1)); // Gaurav lives in Japan

const userData2 = {
  name: "Pritam",
  postalCode: "560223",
  country: "India",
};
console.log(printData(userData2)); // Pritam lives in India
```

---

### Question 15

Create a function which takes a product object and returns a sentence about the product using ES6 features.

### Solution:

```js
// Your ES6 code here
const printProductDetails = ({ name, specification }) =>
  `${name} which is of ${specification.size}`;
const product = {
  name: "Apple MacBook Air 2020",
  specification: {
    capacity: "256GB",
    size: "13.3 Inch",
  },
  price: 82900,
};
console.log(printProductDetails(product));
// Apple MacBook Air 2020 which is of 13.3 Inch
```
