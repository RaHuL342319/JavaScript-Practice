const formatArray = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "The array is empty.";
  }

  const firstItem = arr[0];
  const lastItem = arr[arr.length - 1];
  const itemCount = arr.length;

  return `The array has ${itemCount} items, and the first item is "${firstItem}", and the last item is "${lastItem}".`;
};
const items = ["apple", "banana", "orange"];
const message = formatArray(items);
console.log(message);
// The array has 3 items, and the first item is "apple", and the last item is "orange".
