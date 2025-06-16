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
