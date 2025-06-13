const countChar = (str, char) => {
  return str.split("").reduce((acc, curr) => {
    if (curr === char) {
      acc++;
    }
    return acc;
  }, 0);
};
console.log(countChar("hello", "l")); // 2
