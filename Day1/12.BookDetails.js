/**
 ### 12. Book Details
Create an object `book` with properties title, author, and pages. 
Create a function `getBookDetails` that takes a book object as a parameter and returns if the book has more than 100 pages.
```js
console.log(getBookDetails(book)) // true or false based on pages
```
 */
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
};
function getBookDetails(book) {
  if (book && book.pages) {
    return book.pages > 100; // Check if the book has more than 100 pages
  }
  return false; // Return false if book or pages property is not defined
}

// Example usage
console.log(getBookDetails(book)); // true
console.log(
  getBookDetails({ title: "Short Book", author: "Unknown", pages: 50 })
); // false
console.log(getBookDetails({ title: "No Pages", author: "Author" })); // false
