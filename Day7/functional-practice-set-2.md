# Functional Practice Question Set 2

**Instructions:**

- Use `.map()`, `.filter()`, and `.find()` methods.
- You can use `.length`, `toLowerCase()`, `toUpperCase()`, etc.
- **Do NOT use for-loops.**

---

### 1. Return only the names of people.

```js
const people = [
  { name: "Raj", age: 28 },
  { name: "Swapnil", age: 42 },
  { name: "Anushka", age: 35 },
];
const names = people.map((item) => item.name);
// Your code here
console.log(names); // Output: ['Raj', 'Swapnil', 'Anushka']
```

### 2. Multiply all elements by 5.

```js
const numbers = [1, 2, 3, 4];
const multiplyByFive = numbers.map((num) => num * 5);
// Your code here
console.log(multiplyByFive); // Output: [5, 10, 15, 20]
```

### 3. Greet employees for onboarding.

```js
const employeeData = [
  { name: "ram", dept: "marketer" },
  { name: "Radha", dept: "SDE" },
  { name: "shyam", dept: "finance professional" },
];
const greetEmployeeMessages = employeeData.map(
  (employee) => `Hi ${employee.name} we are glad to have you as a marketer`
);
// Your code here
console.log(greetEmployeeMessages);
// Output: ['Hi ram we are glad to have you as a marketer', ...]
```

### 4. Return only book titles.

```js
const getBookTitles = (books) => books.map((book) => book.title);
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
  { title: "Pride and Prejudice", author: "Jane Austen" },
];
// Your code here
const titles = getBookTitles(books);
console.log(titles); // Output: [...]
```

### 5. Get names starting with 'A'.

```js
const studentNames = studentName.filter((student) => student.startsWith("A"));
const studentName = [
  "Ram",
  "Anjali",
  "Arpit",
  "Bhanu Kumar",
  "Jaya",
  "Ankit",
  "shayam",
];
// Your code here
console.log(studentNames);
// Output: ["Anjali", "Arpit", "Ankit"]
```

### 6. Filter products priced above 40.

```js
const getProducts = (productData, priceIn) =>
  productData.filter((product) => product.price > priceIn);
const productData = [
  { prodName: "Dairy Milk", price: 10 },
  { prodName: "Dairy Milk Silk", price: 70 },
  { prodName: "Five Star", price: 20 },
  { prodName: "Mars", price: 50 },
];
// Your code here
console.log(getProducts(productData, 40));
// Output: [{ prodName: 'Dairy Milk Silk', price: 70 },{ prodName: 'Mars', price: 50 }]
```

### 7. Find first number divisible by 7.

```js
const numbers = [1, 2, 3, 21, 14, 7];
// Your code here
const isDivisibleBy7 = numbers.find((num) => num % 7 == 0);
console.log(isDivisibleBy7);
// Output: 21
```

### 8. First string longer than 8 characters.

```js
const isNamesGreaterThan8 = (names) => names.find((name) => name.length > 8);
const names = [
  "Mohan",
  "Anjali",
  "Geetanjali",
  "Ankit",
  "Bhanu Kumar",
  "Ramakrishnan",
];
// Your code here
console.log(isNamesGreaterThan8(names));
// Output: "Geetanjali"
```

### 9. Find first student with grade "A".

```js
const findStudentWithGradeA = (students) =>
  students.find((student) => student.grade === "A");
const students = [
  { name: "John", grade: "B" },
  { name: "Mary", grade: "A" },
  { name: "Sam", grade: "C" },
  { name: "Sarah", grade: "A" },
];
// Your code here
const studentWithGradeA = findStudentWithGradeA(students);
console.log(studentWithGradeA);
// Output: { name: "Mary", grade: "A" }
```

### 10. Find first student with grade "A" or scholarship.

```js
const findStudent = (students) =>
  students.find((student) => student.grade === "A" || student.scholarship);
const students = [
  { name: "John", grade: "B", scholarship: false },
  { name: "Mary", grade: "B", scholarship: true },
  { name: "Sam", grade: "A", scholarship: false },
  { name: "Sarah", grade: "A", scholarship: true },
];
// Your code here
const student = findStudent(students);
console.log(student);
// Output: { name: "Mary", grade: "B", scholarship: true }
```

### 11. Find student with grade "B" and scholarship.

```js
const students = [
  { name: "John", grade: "B", scholarship: false },
  { name: "Mary", grade: "A", scholarship: true },
  { name: "Sam", grade: "A", scholarship: false },
  { name: "Sarah", grade: "B", scholarship: true },
];
// Your code here
const student = findStudent(students);
console.log(student);
// Output: { name: "Sarah", grade: "B", scholarship: true }
```

### 12. Bollywood movies before 1990 with rating > 8.0.

```js
const getBestOldBollywoodMovies = (movies) =>
  movies.map((movie) =>
    movie.year < 1990 && rating > 8.0 ? movie.name : null
  );
const bollywoodMovies = [
  { title: "Sholay", director: "Ramesh Sippy", year: 1975, rating: 8.2 },
  {
    title: "Amar Akbar Anthony",
    director: "Manmohan Desai",
    year: 1977,
    rating: 7.6,
  },
  { title: "Namak Halaal", director: "Prakash Mehra", year: 1982, rating: 7.4 },
  { title: "Mr. India", director: "Shekhar Kapur", year: 1987, rating: 7.8 },
  {
    title: "Qayamat Se Qayamat Tak",
    director: "Mansoor Khan",
    year: 1988,
    rating: 7.6,
  },
  { title: "Parinda", director: "Vidhu Vinod Chopra", year: 1989, rating: 8.1 },
  { title: "Dil", director: "Indra Kumar", year: 1990, rating: 7.8 },
];
// Your code here
const bestOldMovies = getBestOldBollywoodMovies(bollywoodMovies);
console.log(bestOldMovies); // Output: ['Sholay', 'Parinda']
```
