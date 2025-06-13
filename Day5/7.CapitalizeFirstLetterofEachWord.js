const capitalizeSentence = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
console.log(capitalizeSentence("hello world from es6")); // "Hello World From Es6"
