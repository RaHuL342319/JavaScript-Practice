const getAddress = (users) => ({
  postalCode: users.postalCode,
  city: users.city,
});
const userData = {
  name: "Jane Doy",
  postalCode: "12134",
  city: "Germany",
};
console.log(getAddress(userData));
// {postalCode: '12134', city: 'Germany'}
