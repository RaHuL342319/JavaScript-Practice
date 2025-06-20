# Fake Fetch Practice – HTML, CSS, JS Projects

This document includes several JavaScript fake fetch problems to help practice handling asynchronous operations, DOM updates, and error handling using promises.

---

## 1. Error Handling (Status 404)

Use this URL - https://example.com/api/itemlist to make a fake fetch call and handle errors if
any. Show a proper message to the user on the DOM, as per the status and message received
from the server.

```js
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/itemlist") {
        reject({
          status: 404,
          message: "Items list not found.",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
            data: [
              { itemName: "Bread", price: 30 },
              { itemName: "Water Bottle", price: 50 },
              { itemName: "Dairy Milk", price: 20 },
            ],
          },
        });
      }
    }, 2000);
  });
};

// Output on the DOM should be:
// The data you are looking for, does not exist.

const displayOutput = document.querySelector("#output");
fakeFetch("https://example.com/api/itemlist")
  .then((response) => console.log(response))
  .catch((error) => {
    if (error.status === 404) {
      displayOutput.textContent =
        "The data you are looking for, does not exist.";
    }
  });
```

---

## 2. Error Handling (Status 503)

Use this URL - https://example.com/api/chat to make a fake fetch call and handle errors if any.
Show a proper message to the user on the DOM, as per the status and message received from
the server. A fakeFetch has been provided.

```js
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/chat") {
        reject({
          status: 503,
          message: "Service Unavailable",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
          },
        });
      }
    }, 2000);
  });
};

// Your Code here
// Output on the DOM should be:
// We are facing high demand at the moment. Please check back later in sometime.
```

---

## 3. Display Ordered List from API

Use this URL - https://example.com/api/itemlist to make a fake fetch call and list out all the
items as an ordered list on the DOM. A fakeFetch has been provided. Use HTML, CSS & JS
template in REPL or Vanilla template in CodeSandbox for this question.

```js
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/itemlist") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { itemName: "Bread", price: 30, quantity: 10 },
            { itemName: "Water Bottle", price: 50, quantity: 50 },
            { itemName: "Dairy Milk", price: 20, quantity: 30 },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found.",
        });
      }
    }, 2000);
  });
};

// Your Code here
// Output on the DOM should be in the format, {itemName} -- INR {price} -- {quantity}:
// 1. Bread -- INR 30 -- 10
// 2. Water Bottle -- INR 50 -- 50
// 3. Dairy Milk -- INR 20 -- 30
```

---

## 4. Error Handling (Status 500)

```js
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/data") {
        reject({
          status: 500,
          message: "Internal Server Error",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
          },
        });
      }
    }, 2000);
  });
};

// Your Code here
// Output on the DOM should be:
// Internal Server Error! The server crashed. Please try again in some time.
```

---

## 5. Error Handling (Status 401)

```js
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/profile") {
        reject({
          status: 401,
          message: "Unauthorized Access",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
          },
        });
      }
    }, 2000);
  });
};

// Your Code here
// Output on the DOM should be:
// Unauthorized Access! Looks like you are not logged in. Please login to see your profil
```

---

## 6. Welcome User (ID Based Fetch)

```js
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/profile/NC002") {
        resolve({
          status: 200,
          data: {
            message: "Success",
            data: {
              id: "NC002",
              name: "Roshan",
              institute: "neoG Camp",
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "Resource not found",
        });
      }
    }, 2000);
  });
};

// Your Code here
// Output on the DOM should be: Welcome!, Roshan from neoG Cam
```

---

> 📝 **Note**: For all these examples, ensure you have a DOM element with `id="output"` in your HTML file.

```html
<div id="output"></div>
```
