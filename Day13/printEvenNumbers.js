/*
Print Even Numbers

You are given a single positive integer, N. 
You need to print all even integers that occur between 1 and N (both inclusive).
*/

const printEvenNumbers = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i, " ");
    }
  }
};

printEvenNumbers(10);
