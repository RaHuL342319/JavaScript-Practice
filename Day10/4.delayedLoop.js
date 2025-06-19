function delayedLoop(num) {
  for (let i = 1; i <= num; i++) {
    setTimeout(() => {
      if (i === 1) {
        console.log(`Hello -- after 1 second`);
      } else {
        console.log(`Hello -- after another 1 second`);
      }
    }, i * 1000);
  }
}

delayedLoop(3);
// Output:
// Hello -- after 1 second
// Hello -- after another 1 second
// Hello -- after another 1 second
