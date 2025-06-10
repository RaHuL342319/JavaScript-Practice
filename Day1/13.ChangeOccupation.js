/*

### 13. Change Occupation
Create a function `changeOccupation` that takes an object `person` and a string `newOccupation` 
as parameters, and changes the occupation property of the person object to the newOccupation. 
Log the person object to the console before and after calling the function.
```js
console.log(person) // { name: 'Amit', age: 25, occupation: 'Software Engineer' }
changeOccupation(person, 'Product Manager')
console.log(person) // { name: 'Amit', age: 25, occupation: 'Product Manager' }
```*/
function changeOccupation(person, newOccupation) {
  if (person && typeof person === "object" && "occupation" in person) {
    // console.log("Before change:", person);
    person.occupation = newOccupation; // Change the occupation property
    // console.log("After change:", person);
  } else {
    console.log("Invalid person object or occupation property not found.");
  }
}

// Example usage
const person = {
  name: "Amit",
  age: 25,
  occupation: "Software Engineer",
};
console.log(person); // { name: 'Amit', age: 25, occupation: 'Software Engineer' }
changeOccupation(person, "Product Manager");
console.log(person); // { name: 'Amit', age: 25, occupation: 'Product Manager' }

// Testing with an invalid object
const invalidPerson = { name: "John", age: 30 };
changeOccupation(invalidPerson, "Designer"); // Should log an error message

// Testing with an object without occupation property
const anotherInvalidPerson = { name: "Jane", age: 28, job: "Artist" };
changeOccupation(anotherInvalidPerson, "Writer"); // Should log an error message
