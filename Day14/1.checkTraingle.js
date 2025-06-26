/*
Check triangle

You are given the lengths of 3 sides of a valid triangle. You need to print any one of the following outputs depending on the triangle's nature.
Print 1, if the triangle is equilateral
Print 0, if it's isosceles
Print -1, if it's scalene
 */

const checkTriangle = (a, b, c) => {
  if (a === b && b === c) {
    console.log("Equilateral Triangle");
  } else if (a === b || b === c || a === c) {
    console.log("Isosceles Triangle");
  } else {
    console.log("Scalene Triangle");
  }
};

checkTriangle(5, 5, 5); // Equilateral Triangle
checkTriangle(5, 5, 3); // Isosceles Triangle
checkTriangle(5, 6, 7); // Scalene Triangle
