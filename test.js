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
