const totalLength = (strings) =>
  strings.reduce((acc, curr) => {
    acc += curr.length;
    return acc;
  }, 0);
const strings = ["apple", "banana", "cherry", "date", "blueberry"];
// Your code here
console.log(totalLength(strings));
// Output: 30
