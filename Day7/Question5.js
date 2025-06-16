const studentName = [
  "Ram",
  "Anjali",
  "Arpit",
  "Bhanu Kumar",
  "Jaya",
  "Ankit",
  "shayam",
];
// Your code here
const studentNames = studentName.filter((student) => student.startsWith("A"));
console.log(studentNames);
// Output: ["Anjali", "Arpit", "Ankit"]
