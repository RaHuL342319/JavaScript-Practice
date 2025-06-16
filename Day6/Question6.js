const filterLongStrings = (fruits) =>
  fruits.filter((ele) => {
    if (ele.length > 5) {
      return ele;
    }
  });
const fruits = ["apple", "banana", "cherry", "watermelon", "pineapple"];
console.log(filterLongStrings(fruits));
// Output: ["banana", "cherry", "watermelon", "pineapple"]
