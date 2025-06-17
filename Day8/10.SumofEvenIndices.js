const sumOfEvenIndices = (arr) =>
  arr.reduce((acc, curr, index) => {
    if (index % 2 === 0) {
      acc += curr;
    }
    return acc;
  }, 0);
console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])); // 6
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])); // 30
