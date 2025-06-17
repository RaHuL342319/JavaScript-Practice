# JavaScript Practice

A collection of JavaScript practice problems and solutions, organized by day and topic. Exercises cover ES6+ features, array/object methods, and more.

---

## 📅 Day-wise Practice Sets

- [Day 1](./Day1/) – Basics, Voting Eligibility, etc.
- [Day 2](./Day2/) – Array Methods, Filtering, Mapping
- [Day 3](./Day3/) – Objects, Destructuring
- [Day 4](./Day4/) – Functions, Arrow Functions
- [Day 5](./Day5/) – String Manipulation
- [Day 6](./Day6/) – Loops, Conditionals
- [Day 7](./Day7/) – Advanced Array Methods
- [Day 8](./Day8/) – ES6 Features
- [Day 9](./Day9/) – Practice Problems, Reduce, Counting

---

## 🚀 Example: Counting String Occurrences

```javascript
const countStrings = (fruits) =>
  fruits.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

const fruits = [
  "apple",
  "banana",
  "banana",
  "cherry",
  "apple",
  "apple",
  "banana",
];

console.log(countStrings(fruits));
// Output: { apple: 3, banana: 3, cherry: 1 }
```

---

## 📝 How to Use

1. **Browse by Day:**  
   Each folder contains JavaScript files and markdown instructions.
2. **Run Solutions:**  
   Open any `.js` file and run it using Node.js or your browser console.
3. **Practice:**  
   Try solving the problems before viewing the solutions.

---

## 📚 Topics Covered

- ES6+ Syntax and Features
- Array Methods (`map`, `filter`, `reduce`, etc.)
- Object Manipulation
- Destructuring
- Functional Programming

---

## 💻 Getting Started

1. Clone the repository:
   ```sh
   git clone <repo-url>
   ```
2. Open in [Visual Studio Code](https://code.visualstudio.com/).
3. Run any `.js` file using Node.js:
   ```sh
   node Day9/Question10.js
   ```

---

Happy Coding!
