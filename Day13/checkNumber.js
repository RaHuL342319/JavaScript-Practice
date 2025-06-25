/**
You are given a single number. You need to print one of the following outputs according to the number's nature.
Print 1, if the number is positive
Print -1, if it's negative
Print 0, if it's equal to 0} number 
 */

const checkNumber = (number) => {
  if (number === 0) {
    return "Zero";
  } else if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  }
};

// Example usage:
console.log(checkNumber(5)); // Output: Positive
console.log(checkNumber(-3)); // Output: Negative
console.log(checkNumber(0)); // Output: Zero
