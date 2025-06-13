## ES6+ Practice Question Set 4

**Instructions**: Avoid usage of in-built methods in JavaScript. You can make use of basic methods such as `.length`, `toLowerCase()`, `toUpperCase()`, `push()` if needed. Make use of `for`-loops and `if-else` statements wherever needed.

---

### 1. Maximum Element in Array

Write an ES6 function that accepts an array of integers and returns the maximum element in the array.

```js
// Your ES6 code here

let array = [4, 78, 8, 3, 6, 0, 12, 34];
console.log(getMaxElement(array)); // 78
```

---

### Solution:

```js
// Your ES6 code here
const getMaxElement = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
};
let array = [4, 78, 8, 3, 6, 0, 12, 34];
console.log(getMaxElement(array)); // 78
```

### 2. Average of Numbers

Write an ES6 function that takes an array of numbers and returns the average of all the numbers.

```js
// Your ES6 code here
console.log(calculateAverage([1, 2, 3, 4, 5])); // 3
```

---

### Solution:

```js
// Your ES6 code here
const calculateAverage = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("Input must be a non-empty array");
  }
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
};
console.log(calculateAverage([1, 2, 3, 4, 5])); // 3
```

### 3. Convert Even Numbers to Odd

Write an ES6 function that takes an array of numbers and converts even numbers to odd numbers by adding 1 to that number.

```js
// Your ES6 code here

var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(convertEvenToOdd(numArr));
// [1, 3, 3, 5, 5, 7, 7, 9, 9]
```

---

### Solution:

```js
// Your ES6 code here
const convertEvenToOdd = (arr) => {
  return arr.map((num) => {
    if (num % 2 == 0) {
      return num + 1;
    }
    return num;
  });
};

var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(convertEvenToOdd(numArr));
// [1, 3, 3, 5, 5, 7, 7, 9, 9]
```

### 4. Filter Words Longer Than 5 Characters

Write an ES6 function that takes an array of words and returns an array with all its elements whose length is greater than 5.

```js
// Your ES6 code here
var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
console.log(filterWords(words)); // ["repeat", "community"]
```

---

### Solution:

```js
// Your ES6 code here
const filterWords = (words) => {
  return words.filter((word) => word.length > 5);
};
var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
console.log(filterWords(words)); // ["repeat", "community"]
```

### 5. Capitalize Words

Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.

```js
// Your ES6 code here
console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]));
// ["EAT", "SLEEP", "CODE", "REPEAT"]
```

---

### Solution:

```js
// Your ES6 code here
const capitalizeWords = (words) => words.map((word) => word.toUpperCase());
console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]));
// ["EAT", "SLEEP", "CODE", "REPEAT"]
```

### 6. Get Values by Property

Write an ES6 function that takes an array of objects and a property name and returns a new array with only the values of that property.

```js
// Your ES6 code here

console.log(
  getValues(
    [
      { name: "John", age: 21 },
      { name: "Mary", age: 22 },
      { name: "Peter", age: 23 },
    ],
    "name"
  )
);
// ["John", "Mary", "Peter"]
```

---

### Solution:

```js
// Your ES6 code here
const getValues = (arr, property) => {
  return arr.map((item) => item[property]);
};
console.log(
  getValues(
    [
      { name: "John", age: 21 },
      { name: "Mary", age: 22 },
      { name: "Peter", age: 23 },
    ],
    "name"
  )
);
// ["John", "Mary", "Peter"]
```

### 7. Add Team ID to User

Write an ES6 function that takes the user's details and returns the data with team ID.

```js
// Your ES6 code here
const userData = { firstName: "John", lastName: "Dee" };
console.log(podAndTeamAllocation(userData));
// { firstName: 'John', lastName: 'Dee', teamId: 667543 }
```

---

### Solution:

```js
// Your ES6 code here
const podAndTeamAllocation = (userData) => {
  const teamId = 667543; // Example team ID
  return { ...userData, teamId };
};
const userData = { firstName: "John", lastName: "Dee" };
console.log(podAndTeamAllocation(userData));
// { firstName: 'John', lastName: 'Dee', teamId: 667543 }
```

### 8. Check for Team Assignment

Write an ES6 function which checks if a student already has a team. If team is not given then add them to team "A" and return the object else do nothing and return the same object.

```js
// Your ES6 code here
console.log(checkForTeam({ firstName: "Penn", lastName: "Ma" }));
// { firstName: 'Penn', lastName: 'Ma', team: 'A' }

console.log(checkForTeam({ firstName: "John", lastName: "Dee", team: "B" }));
// { firstName: 'John', lastName: 'Dee', team: 'B' }

console.log(checkForTeam({ firstName: "Priya", lastName: "Raj" }));
// { firstName: 'Priya', lastName: 'Raj', team: 'A' }
```

---

### Solution:

```js
// Your ES6 code here
const checkForTeam = (student) => {
  if (student.team) {
    return student;
  }
  return { ...student, team: "A" };
};
console.log(checkForTeam({ firstName: "Penn", lastName: "Ma" }));
// { firstName: 'Penn', lastName: 'Ma', team: 'A' }

console.log(checkForTeam({ firstName: "John", lastName: "Dee", team: "B" }));
// { firstName: 'John', lastName: 'Dee', team: 'B' }

console.log(checkForTeam({ firstName: "Priya", lastName: "Raj" }));
// { firstName: 'Priya', lastName: 'Raj', team: 'A' }
```

### 9. Object Destructuring

Destructure the following code to get the desired outputs.

```js
const book = {
  title: "JavaScript: The Definitive Guide",
  authors: [
    { name: "David Flanagan", age: 49 },
    { name: "Yukihiro Matsumoto", age: 57 },
  ],
  publisher: { name: "O'Reilly Media", location: "CA" },
};

// Your ES6 code here
console.log(title); // JavaScript: The Definitive Guide
console.log(author1); // David Flanagan
console.log(author2); // Yukihiro Matsumoto
console.log(publisherName); // O'Reilly Media
```

---

### Solution:

```js
const book = {
  title: "JavaScript: The Definitive Guide",
  authors: [
    { name: "David Flanagan", age: 49 },
    { name: "Yukihiro Matsumoto", age: 57 },
  ],
  publisher: { name: "O'Reilly Media", location: "CA" },
};
const { title, authors, publisher } = book;
const publisherName = publisher.name;
const author1 = authors[0].name;
const author2 = authors[1].name;
// Your ES6 code here
console.log(title); // JavaScript: The Definitive Guide
console.log(author1); // David Flanagan
console.log(author2); // Yukihiro Matsumoto
console.log(publisherName); // O'Reilly Media
```

### 10. Sum of All Ages

Write an ES6 function that takes an array of objects and returns the sum of all ages.

```js
// Your ES6 code here
var array = [
  { name: "Jay", age: 60 },
  { name: "Gloria", age: 36 },
  { name: "Manny", age: 16 },
  { name: "Joe", age: 9 },
];
console.log(sumOfAges(array)); // 121
```

### Solution:

```js
// Your ES6 code here
const sumOfAges = (arr) =>
  arr.reduce((acc, curr) => {
    return acc + curr.age;
  }, 0);
var array = [
  { name: "Jay", age: 60 },
  { name: "Gloria", age: 36 },
  { name: "Manny", age: 16 },
  { name: "Joe", age: 9 },
];
console.log(sumOfAges(array)); // 121
```
