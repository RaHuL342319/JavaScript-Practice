const isDivisibleBy3and5 = (numbers) => {
  return numbers.filter((num) => num % 3 === 0 && num % 5 === 0);
};

const numbers = [1, 2, 30, 4, 15];
console.log(isDivisibleBy3and5(numbers));
// Output: [30, 15]
