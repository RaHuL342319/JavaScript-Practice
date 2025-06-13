const multiplyByIndex = (arr) => {
  return arr.map((num, index) => num * index);
};

// Your ES6 code here
console.log(multiplyByIndex([1, 2, 3, 4])); // [0, 2, 6, 12]

const stringToArray = (str) => {
  return str.split("");
};

// Your ES6 code here
console.log(stringToArray("Hello World")); // ["Hello", "World"]
