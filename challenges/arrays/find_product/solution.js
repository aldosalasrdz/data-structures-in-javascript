function findProduct(arr) {
  let left = 1;
  let product = [];

  for (let element of arr) {
    product.push(left);
    left *= element;
  }

  let right = 1;
  for (let i = arr.length - 1; i > -1; i--) {
    product[i] *= right;
    right *= arr[i];
  }

  return product;
}

console.log(findProduct([1, 2, 3, 4]));
