const getAverageAge = (people) =>
  people.reduce((acc, curr) => {
    acc += curr.age;
    return acc;
  }, 0) / people.length;
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];
// Your code here
console.log(getAverageAge(people));
// Output: { averageAge: 32.5 }
