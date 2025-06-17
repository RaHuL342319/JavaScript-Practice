const printLastFive = (arr) => {
  if (arr.length < 5) {
    return arr;
  }
  return arr.slice(-5);
};
console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]));
// [1, 2, 3, 5, 8]
