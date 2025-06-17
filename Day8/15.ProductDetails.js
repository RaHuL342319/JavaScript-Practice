const printProductDetails = (product) =>
  `${product.name} which is of ${product.specification.size}`;
const product = {
  name: "Apple MacBook Air 2020",
  specification: {
    capacity: "256GB",
    size: "13.3 Inch",
  },
  price: 82900,
};
console.log(printProductDetails(product));
// Apple MacBook Air 2020 which is of 13.3 Inch
