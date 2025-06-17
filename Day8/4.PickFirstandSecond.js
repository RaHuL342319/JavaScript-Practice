const pickFirstAndSecond = (fruits) => ({
  first: fruits[0],
  second: fruits[1],
});
console.log(pickFirstAndSecond(["orange", "banana", "apple"]));
// {first: 'orange', second: 'banana'}

console.log(pickFirstAndSecond(["red", "blue", "green"]));
// {first: 'red', second: 'blue'}
