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
