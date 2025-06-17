# ES6+ Practice Question Set 3

**Instructions:** Avoid usage of in-built methods in JavaScript. You can make use of basic methods such as `.length`, `toLowerCase()`, `toUpperCase()`, `push()` if needed. Make use of for-loops and if-else statements wherever needed.

---

### 1. Format Array
Create a function that takes an array of strings as an argument and returns a string that includes the number of items in the array and the first and last items.
```js
const items = ['apple', 'banana', 'orange']
const message = formatArray(items)
console.log(message)
// The array has 3 items, and the first item is "apple", and the last item is "orange".
```

---

### 2. Format Product
Create a function that takes a product object as an argument and returns a string that includes the product name, price, and a message based on whether it is in stock or not.
```js
const product = {
  name: 'Socks',
  price: 249,
  inStock: true,
}
const message = formatProduct(product)
console.log(message)
// Socks costs INR 249 and is in stock.
```

---

### 3. Find Person
Write a function `findPerson` that takes an array of person objects and a name as parameters and returns the object with the matching name, or null if not found.
```js
console.log(
  findPerson(
    [
      { name: 'Amay', age: 25 },
      { name: 'Akhil', age: 25 },
    ],
    'Akhil',
  ),
)
```

---

### 4. Pick First and Second
Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.
```js
console.log(pickFirstAndSecond(['orange', 'banana', 'apple']))
// {first: 'orange', second: 'banana'}
console.log(pickFirstAndSecond(['red', 'blue', 'green']))
// {first: 'red', second: 'blue'}
```

---

### 5. Starts With A
Convert the following code to ES6+ syntax with minimum number of characters.
```js
function startsWithA(str) {
  if (str.charAt(0) === 'A') {
    return true
  } else {
    return false
  }
}
console.log(startsWithA('Akshita')) // true
console.log(startsWithA('Jeena')) // false
```

---

### 6. Print First Character
Write an ES6 function to return only the first character of the given array.
```js
console.log(printFirstCharacter([1, 2, 3, 5, 8]))
// 1
```

---

### 7. Print Last Five
Write a function to return the last 5 characters as an array from the given array.
```js
console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]))
// [1, 2, 3, 5, 8]
```

---

### 8. Print Second Character Multiplied
Write an ES6 function to return the second element of the given array by multiplying 20 to it.
```js
console.log(printSecondCharacter([1, 2, 3, 5, 8]))
// 40
```

---

### 9. Say Hello
Write an ES6 function to return the second element of the given array by adding “Hello” before it.
```js
console.log(sayHello(['Akshay', 'Sweta', 'Prerana', 'Vinay']))
// Hello Sweta
console.log(sayHello(['Kanika', 'Rakesh', 'Prerana', 'Puja']))
// Hello Rakesh
```

---

### 10. Sum of Even Indices
Write an ES6 function to return sum of all numbers at even indices of the given array.
```js
console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])) // 6
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])) // 30
```

---

### 11. Sum First Two Elements
Write an ES6 function to return the sum of only first 2 elements of the array.
```js
console.log(sumFirstTwoElements([10, 4, 3, 7, 1, 5])) // 14
console.log(sumFirstTwoElements([12, 14, 3, 27, 15])) // 26
```

---

### 12. Print First Multiple of 5
Write an ES6 function to return the first element which is a multiple of 5 in the given array.
```js
console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3])) // 10
console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3])) // 5
```

---

### 13. Get Address
Create a function which takes in the given object and returns another object only with the properties `postalCode` and `city` in it.
```js
const userData = {
  name: 'Jane Doy',
  postalCode: '12134',
  city: 'Germany',
}
console.log(getAddress(userData))
// {postalCode: '12134', city: 'Germany'}
```

---

### 14. Print Data
Create a function which takes in the given object and returns a sentence which indicates name of the person and where the person lives.
```js
const userData1 = {
  name: 'Gaurav',
  postalCode: '12134',
  country: 'Japan',
}
console.log(printData(userData1)) // Gaurav lives in Japan

const userData2 = {
  name: 'Pritam',
  postalCode: '560223',
  country: 'India',
}
console.log(printData(userData2)) // Pritam lives in India
```

---

### 15. Print Product Details
Create a function which takes a product object and returns a sentence about the product using ES6 features.
```js
const product = {
  name: 'Apple MacBook Air 2020',
  specification: {
    capacity: '256GB',
    size: '13.3 Inch',
  },
  price: 82900,
}
console.log(printProductDetails(product))
// Apple MacBook Air 2020 which is of 13.3 Inch
```
