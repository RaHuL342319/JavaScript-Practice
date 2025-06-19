# 📦 Async JS Practice Question Set 1

## 📘 Instructions

- Specific instructions have been provided for each question.
- **Do not use `async` / `await` in this set.**
- Follow ES6 norms for writing your functions.
- You may use methods such as `.length`, `toLowerCase()`, `toUpperCase()`, and `.join()` if needed.

---

### 1. `delayedGreeting()`

Write a function that consoles a greeting message after a delay of 2 seconds using `setTimeout`.

```js
// Your Code here
delayedGreeting();
// Output after 2 seconds:
// Hello, welcome to my portfolio!
```

---

### 2. `delayedAddition(a, b)`

Write a function that takes in two numbers and consoles their sum after a delay of 4 seconds using `setTimeout`.

```js
// Your Code here
function delayedAddition(num1, num2) {
  setTimeout(() => {
    console.log(num1 + num2);
  }, 4000);
}
delayedAddition(2, 3);
// Output after 4 seconds:
// 5
```

---

### 3. `delayedAlert(message, delay)`

Write a function that takes a message and delay in milliseconds and shows an alert after the delay.

```js
// Your Code here
delayedAlert("Hello, world!", 2000);
// Output: alert with message 'Hello, world!' after 2 seconds
```

---

### 4. `delayedLoop(n)`

Write a function that prints 'Hello' `n` times, one per second using a `for-loop` and `setTimeout`.

```js
// Your Code here
function delayedLoop(num) {
  for (let i = 1; i <= num; i++) {
    setTimeout(() => {
      console.log();
    }, i * 1000);
  }
}
delayedLoop(3);
// Output:
// Hello -- after 1 second
// Hello -- after another 1 second
// Hello -- after another 1 second
```

---

### 5. `fakeFetch(msg, shouldSucceed)`

Simulate a fake fetch call that logs the server message after 3 seconds.

```js
const fakeFetch = (msg, shouldSucceed) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve(`message from server: ${msg}`);
      }
      reject(`error from server: ${msg}`);
    }, 3000);
  });
};

// Your Code here
// Output after 3 seconds:
// Hi
```
