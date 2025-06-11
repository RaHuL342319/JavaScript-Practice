# ES6+ Practice Question Set 2

**Instructions:** Avoid usage of in-built methods in JavaScript. You can make use of basic methods such as `.length`, `toLowerCase()`, `toUpperCase()`, `push()` if needed. Make use of `for`-loops and `if-else` statements wherever needed.

---

### Question 1.

Create an object `person` with two properties, "name" and "age" and then update the "age" property to a new value. Initial age should be 30.

```js
// Your code here
console.log(person.age); // Output: 35
```

### Solution:

```js
const person = {
  name: "Rahul",
  age: 30,
};

person.age = 35;
console.log(person.age);
```

---

### Question 2.

Write a function that takes an object `car` and returns true if the car is a sports car (i.e. has a horsepower property greater than or equal to 300)

```js
// Your ES6 code here
const car1 = { make: "Porsche", model: "911", horsepower: 450 };
const car2 = { make: "Toyota", model: "Camry", horsepower: 200 };
console.log(isSportsCar(car1)); // true
console.log(isSportsCar(car2)); // false
```

### Solution:

```js
function isSportsCar(car) {
  if (car && car.horsepower) {
    return car.horsepower >= 300;
  }
  return false;
}

const car1 = { make: "Porsche", model: "911", horsepower: 450 };
const car2 = { make: "Toyota", model: "Camry", horsepower: 200 };
console.log(isSportsCar(car1)); // true
console.log(isSportsCar(car2)); // false
```

### Question 3.

Write a function that takes an object `person` and a number `num` as arguments and returns true if the person's age plus `num` is greater than 21.

```js
// Your ES6 code here
const person1 = { name: "Ajay", age: 20 };
console.log(isEligible(person1, 1)); // false
console.log(isEligible(person1, 2)); // true
```

### Solution:

```js
function isEligible(person, num) {
  if (person && person.age) {
    return person.age + num > 21;
  }
  return false;
}
```

### Question 4.

Write a function that takes an object `blog` and returns true if the blog has more than 1000 views.

```js
// Your ES6 code here
const blog1 = {
  title: "How to Learn JavaScript",
  author: "John Doe",
  views: 1430,
};
const blog2 = {
  title: "10 Reasons to Start a Blog",
  author: "Jane Smith",
  views: 500,
};
console.log(getViews(blog1)); // true
console.log(getViews(blog2)); // false
```

### Solution:

```js
function getViews(blog) {
  if (blog && blog.views) {
    return blog.views > 1000;
  }
  return false;
}
const blog1 = {
  title: "How to Learn JavaScript",
  author: "John Doe",
  views: 1430,
};
const blog2 = {
  title: "10 Reasons to Start a Blog",
  author: "Jane Smith",
  views: 500,
};
console.log(getViews(blog1)); // true
console.log(getViews(blog2)); // false
```

### Question 5.

Swap the values of two variables using array destructuring.

```js
let a = 1;
let b = 2;
// Your ES6 code here
console.log(a); // 2
console.log(b); // 1
```

### Solution:

```js
let a = 1;
let b = 2;

[b, a] = [a, b];
console.log(a); // 2
console.log(b); // 1
```

### Question 6.

Convert this function into ES6 with least amount of characters.

```js
function add(a = 30, b = 0) {
  return a + b;
}
console.log(add(2, 3));
```

### Solution:

```js
const add = (a = 30, b = 0) => a + b;
console.log(add(2, 3)); // 5
```

### Question 7.

Write an ES6 function `combineObjects` with least amount of characters which merges two objects into one.

```js
// Your ES6 code here
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = combineObjects(obj1, obj2);
console.log(combinedObj);
// Expected Output: {a: 1, b: 2, c: 3, d: 4}
```

### Solution:

```js
function combineObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = combineObjects(obj1, obj2);
console.log(combinedObj);
```

### Question 8.

Convert the function `getData`, into an ES6 function with least amount of characters using destructuring.

```js
function getData(person) {
  const name = person.name;
  const address = person.address.city;
  console.log(name); // John Doe
  console.log(address); // New York
}
const person = {
  name: "John Doe",
  address: {
    city: "New York",
    state: "NY",
  },
};
getData(person);
```

### Solution:

```js
const getData = (person) => {
  console.log(person.name); // John Doe
  console.log(person.address.city); // New York
};
const person = {
  name: "John Doe",
  address: {
    city: "New York",
    state: "NY",
  },
};
getData(person);
```

### Question 9.

Write a function that takes a string as input and returns the string in all uppercase letters.

```js
// Your ES6 code here
console.log(stringToUpperCase("hello")); // "HELLO"
```

### Solution:

```js
function stringToUpperCase(str) {
  return str.toUpperCase();
}
console.log(stringToUpperCase("hello")); // "HELLO"
```

### Question 10.

Write a function that takes two strings as input and concatenates them together.

```js
// Your ES6 code here
console.log(concatenateStrings("hello", "world")); // "helloworld"
```

### Solution:

````js
const concatenateStrings = (str1, str2) => str1 + str2;
console.log(concatenateStrings("hello", "world")); // "helloworld"

```

### Question 11.

Write a function that takes an array and returns the last element in the array.

```js
// Your ES6 code here
console.log(lastElement([1, 2, 3, 4, 5])); // 5
````

### Solution:

```js
const lastElement = (arr) => arr[arr.length - 1];
console.log(lastElement([1, 2, 3, 4, 5])); // 5
```

### Question 12.

Write a function that takes an array and returns the first element of the array.

```js
// Your ES6 code here
console.log(firstElement([1, 2, 3, 4, 5])); // 1
```

### Solution:

```js
const firstElement = (arr) => arr[0];
console.log(firstElement([1, 2, 3, 4, 5])); // 1
```

### Question 13.

Write a function that takes an array and a number and returns the sum of first element and the number.

```js
// Your ES6 code here
console.log(sumFirstElement([1, 2, 3], 5)); // 6
```

### Solution:

```js
const sumFirstElement = (arr, num) => arr[0] + num;
console.log(sumFirstElement([1, 2, 3], 5)); // 6
```

---

### Question 14.

Write a function that takes an array and returns the sum of first and last element.

```js
// Your ES6 code here
console.log(sumFirstAndLast([1, 2, 3, 4, 8])); // 9
```

### Solution:

```js
const sumFirstAndLast = (arr) => arr[0] + arr[arr.length - 1];
console.log(sumFirstAndLast([1, 2, 3, 4, 8])); // 9
```

### Question 15.

Write a function that takes an object representing a person's information and returns a template literal that includes the person's name and age in a sentence.

```js
// Your ES6 code here
const person1 = { name: "John", age: 25, occupation: "Software Engineer" };
const person2 = { name: "Jane", age: 45, occupation: "Data Analyst" };
console.log(personInfo(person1)); // "John is 25 years old."
console.log(personInfo(person2)); // "Jane is 45 years old."
```

### Solution:

```js
const personInfo = (person) => `${person.name} is ${person.age} years old.`;
const person1 = { name: "John", age: 25, occupation: "Software Engineer" };
const person2 = { name: "Jane", age: 45, occupation: "Data Analyst" };
console.log(personInfo(person1)); // "John is 25 years old."
console.log(personInfo(person2)); // "Jane is 45 years old."
```
