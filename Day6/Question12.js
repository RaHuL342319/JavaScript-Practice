const filterBySalary = (employees, salaryIn, ageIn) =>
  employees.filter(
    (employee) => employee.age > ageIn && employee.salary > 22000
  );
const employees = [
  { name: "Abhay", age: 25, salary: 20000 },
  { name: "Joice", age: 30, salary: 35000 },
  { name: "Reena", age: 35, salary: 15000 },
  { name: "Jeena", age: 40, salary: 50000 },
];
const filteredEmployees = filterBySalary(employees, 22000, 25);
console.log(filteredEmployees);
