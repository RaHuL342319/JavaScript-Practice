# JavaScript Hoisting – Guess the Output Questions

Practice predicting the output of the following code snippets related to hoisting in JavaScript.

## ✅ Level: Easy

### 1.

```js
console.log(a);
var a = 10;
```

**Guess the Output:**
**undefined**
Because Before running the code. In global execution context would be having variable a = undefined,
When It starts reading code line by line, At first line, It is logging the value of a so it will log undefined.

---

### 2.

```js
var a = 5;
function test() {
  console.log(a);
  var a = 15;
}
test();
```

**Guess the Output:**
**undefined**
Because Code is converted like this:

```js
function test() {
  var a; // Hoisted declaration (undefined at this point)
  console.log(a); // Logs `undefined`, not the global `a`
  a = 15; // Now assigned 15 locally
}
```

and Function variable will shadow the global variable, thats why it is logging undefined.

### 3.

```js
function greet() {
  console.log("Hello");
}
greet();
```

**Guess the Output:**
**Hello**

---

### 4.

```js
greet();
function greet() {
  console.log("Hi");
}
```

**Guess the Output:**
**Hi**
Because, before runing the code function is hoisted on the top with definition.

```js
function greet() {
  console.log("Hi");
}
greet();
```

---

## ✅ Level: Medium

### 5.

```js
greet();
var greet = function () {
  console.log("Hello");
};
```

**Guess the Output:**
**IT will throw error like typeError greet is not a function.**
Because, Before running Execution context will store greet as variable and put value as undefined, Because it is not normal function, It is arrow function or function expression and Function expression is not getting hoisted like normal function.

After Hoisting, the code will look like:

```js
var greet; // Hoisted, value is undefined
greet(); // Trying to call undefined as a function →  TypeError
greet = function () {
  console.log("Hello");
};
```

---

### 6.

```js
console.log(typeof foo);
var foo = "bar";
```

**Guess the Output:**
**undefined**

---

### 7.

```js
function show() {
  console.log(message);
  var message = "Hi!";
}
show();
```

**Guess the Output:** ?
**undefined**

---

### 8.

```js
var a = 10;
(function () {
  console.log(a);
  var a = 20;
})();
```

**Guess the Output:** ?
**undefined**

---

## ✅ Level: Hard

### 9.

```js
{
  console.log(x);
  let x = 10;
}
```

**Guess the Output:**
**ReferenceError: Cannot access 'x' before initialization**

---

### 10.

```js
function test() {
  console.log(typeof a);
  console.log(a);
  var a = 1;
}
test();
```

**Guess the Output:** ?
**undefined**
**undefined**

---

### 11.

```js
console.log(myFunc);
function myFunc() {
  return "Hoisted!";
}
```

**Guess the Output:** ?
**[Function: myFunc]**
It will work because function declaration is already hoisted so it will print reference.

---

### 12.

```js
let x = 5;
function hoistTest() {
  console.log(x);
  let x = 10;
}
hoistTest();
```

**Guess the Output:**
**ReferenceError: Cannot access 'x' before initialization**

---

### 13.

```js
const fun = () => msg{
  console.log();
};
let msg = "Hello";
fun();
```

**Guess the Output:**
It's error during runtime.

---

### 14.

```js
console.log(name);
var name = "Rahul";
function name() {}
```

**Guess the Output:** ?
**[Function: name]**

---

### 15.

```js
var x = 10;
function demo() {
  console.log(x);
  var x = 20;
}
demo();
```

**Guess the Output:**
**undefined**

---

Happy Learning! 🎯
