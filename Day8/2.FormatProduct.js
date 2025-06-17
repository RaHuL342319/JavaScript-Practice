const formatProduct = (product) =>
  `${product.name} costs INR ${product.price} and is ${
    product.inStock ? "in" : "not in"
  } stock.`;
const product = {
  name: "Socks",
  price: 249,
  inStock: true,
};
const message = formatProduct(product);
console.log(message);
// Socks costs INR 249 and is in stock.
