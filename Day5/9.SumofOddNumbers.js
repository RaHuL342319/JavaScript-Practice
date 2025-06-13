const sumOfOdds = (arr) =>
  arr.reduce((acc, curr) => {
    if (curr % 2 != 0) {
      acc = acc + curr;
    }
    return acc;
  }, 0);
console.log(sumOfOdds([1, 2, 3, 4, 5])); // 9
console.log(sumOfOdds([10, 15, 20, 25])); // 40
