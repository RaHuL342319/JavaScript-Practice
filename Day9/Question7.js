const oldestPersonName = (people) => {
  return people.reduce((acc, curr) => {
    if (curr.age > acc.age) {
      return curr;
    }
    return acc;
  }, people[0]).name;
};
const people = [
  { name: "Jeena", age: 25 },
  { name: "Priya", age: 30 },
  { name: "Naina", age: 45 },
];
// Your code here
console.log(oldestPersonName(people));
// Output: 'Naina'
