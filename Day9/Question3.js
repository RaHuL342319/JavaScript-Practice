const totalValue = (items) =>
  items.reduce((acc, curr) => {
    acc += curr.price;
    return acc;
  }, 0);
const items = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 20 },
  { name: "Item 3", price: 30 },
];

console.log(totalValue(items));
// Output: 60
