function delayedAddition(num1, num2) {
  setTimeout(() => {
    console.log(num1 + num2);
  }, 4000);
}
delayedAddition(2, 3);
// Output after 4 seconds:
// 5
