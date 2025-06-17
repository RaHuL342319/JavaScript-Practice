const printMultipleOfFive = (arr) => arr.find((item) => item % 5 == 0);
console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3])); // 10
console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3])); // 5
