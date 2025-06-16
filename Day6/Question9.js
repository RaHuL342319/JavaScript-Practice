const filterByScore = (students) =>
  students.filter((student) => student.score > 80);
const students = [
  { name: "Aditya", score: 85 },
  { name: "Bob", score: 75 },
  { name: "Charlie", score: 90 },
];
console.log(filterByScore(students));
// Output: [{ name: 'Aditya', score: 85 }, { name: 'Charlie', score: 90 }]
