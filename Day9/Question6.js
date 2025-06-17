const longestString = (strings) =>
  strings.reduce((acc, curr) => {
    if (curr.length > acc.length) {
      acc = curr;
    }
    return acc;
  }, "");
const strings = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];
console.log(longestString(strings));
// Output: 'Haule Haule'
