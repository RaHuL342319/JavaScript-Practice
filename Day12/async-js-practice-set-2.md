## Async JS Practice Question Set 2

**Instructions:**

- Specific instructions have been written for each question present in this set.
- Please follow ES6 norms for writing your functions.
- You can make use of basic methods such as `.length`, `toLowerCase()`, `toUpperCase()` if needed.
- An example has been provided for fetch call related questions for your understanding.

---

### 1. Fetch and Display Comments Emails

Use this URL - `https://example.com/post/comments` to make a fake fetch call and list out all the emails of users on the DOM in an ordered list.

```js
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/post/comments") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { email: "xyz@gmail.com", commentBody: "Well done keep it up" },
            {
              email: "hello@outlook.com",
              commentBody: "Good going a lot to learn from you awesome",
            },
            {
              email: "ram99@gmail.com",
              commentBody: "Anyone from Vadodara here",
            },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "No Commentes found.",
        });
      }
    }, 2000);
  });
};
```

Output:

```
1. xyz@gmail.com
2. hello@outlook.com
3. ram99@gmail.com
```

---

### 2.Display Winner Team Names

Use this URL - `https://example.com/winner-team` to fetch names and display a congratulatory message.

```js
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/winner-team") {
        resolve({
          status: 200,
          data: {
            message: "Success",
            data: ["Jhon", "Raju", "Anjali", "Sakshi"],
          },
        });
      } else {
        reject({
          status: 404,
          message: "No Users found.",
        });
      }
    }, 2000);
  });
};
```

Output:

```
Congratulation to the members of winning team Jhon, Raju, Anjali, Sakshi, great work
```

---

### 3.ShowAuthenticationStatus

Use this URL - `https://example.com/login` to fetch and show whether the user is authenticated.

```js
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/login") {
        resolve({
          status: 200,
          data: {
            auth: true,
          },
        });
      } else {
        reject({
          status: 404,
          message: "Status not found",
        });
      }
    }, 2000);
  });
};
```

Output:

```
Verified
```

---

### 4.ShowOrderStatus

Use this URL - `https://example.com/order/status/OR00A12` to fetch and display order status with user name.

```js
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/order/status/OR00A12") {
        resolve({
          status: 200,
          data: {
            order: {
              orderId: "OR00A12",
              status: "delivery pending",
              userName: "Kajal Kumari",
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "No order found",
        });
      }
    }, 2000);
  });
};
```

Output:

```
Hello Kajal Kumari your order status is delivery pending.
```

---

### 5.ShowImagefromURL

Use this URL - `https://example.com/photo` to fetch and show an image.

```js
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/photo") {
        resolve({
          status: 200,
          data: {
            photo: {
              link: "https://source.unsplash.com/featured/300x201",
              title: "Random Image",
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "No order found",
        });
      }
    }, 2000);
  });
};
```

Output:

> An image on the DOM.

---

### 6.CalculateTotalPrice

Use this URL - `https://example.com/api/productlist` to fetch and calculate total price.

```js
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/productlist") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { itemName: "Shoes", price: 100, quantity: 2 },
            { itemName: "Hat", price: 350, quantity: 1 },
            { itemName: "Tshirt", price: 410, quantity: 5 },
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
```

Output:

```
Total: INR 2600
```

---

### 7.HandleServerError

Use this URL - `https://example.com/api/users` and display a red error message if the call fails.

```js
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/users") {
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
```

Output (in red color):

```h
Oops. Unexpected Error. Please try again.
```

---

### 8.HandleBadRequest

Use this URL - `https://example.com/api/allbooks` and handle a 400 status.

```js
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/allbooks") {
        reject({
          status: 400,
          message: "Bad Request",
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
```

Output:

```
Bad Request! Requested size too large.
```

---

### 9.DisplayWelcomeMessage

Use this URL - `https://example.com/welcome` and show welcome message if logged in.

```js
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!(url === "https://example.com/welcome")) {
        reject({
          status: 511,
          message: "Network auth required",
        });
      } else {
        resolve({
          status: 200,
          data: {
            logged: true,
          },
        });
      }
    }, 2000);
  });
};
```

Output:

```
Welcome to the server (or custom welcome message)
```

---

### 10.DisplayImagewithDimensions

Use this URL - `https://example.com/getImage` with dimensions to fetch and show image.

```js
const fakeFetch = (url, dimensions) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/getImage") {
        resolve({
          status: 200,
          data: {
            image: {
              link: `https://picsum.photos/${dimensions[0]}/${dimensions[1]}`,
              title: "Random Image",
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "No photo of such dimension found",
        });
      }
    }, 2000);
  });
};
```

Output:

> Image should be displayed with given dimensions.

---

**Well Done! Completed all the sets of practice set.**
