const isNamesGreaterThan8 = (names) => names.find((name) => name.length > 8);
const names = [
  "Mohan",
  "Anjali",
  "Geetanjali",
  "Ankit",
  "Bhanu Kumar",
  "Ramakrishnan",
];
// Your code here
console.log(isNamesGreaterThan8(names));
// Output: "Geetanjali"
