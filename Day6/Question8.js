const filterByAge = (people) => people.filter((ele) => ele.age > 30);
const people = [
  { name: "Rahul", age: 25 },
  { name: "Raj", age: 35 },
  { name: "Vijay", age: 45 },
];
console.log(filterByAge(people));
