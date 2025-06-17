const findPerson = (person, nameIn) => {
  return person.find((item) => item.name === nameIn);
};
console.log(
  findPerson(
    [
      { name: "Amay", age: 25 },
      { name: "Akhil", age: 25 },
    ],
    "Akhil"
  )
);
