function findMinimum(arr) {
  if (arr.length < 0) return;

  let min = arr[0];

  for (let i of arr) {
    if (i < min) {
      min = i;
    }
  }

  return min;
}

console.log(findMinimum([9, 2, 3, 6]));
