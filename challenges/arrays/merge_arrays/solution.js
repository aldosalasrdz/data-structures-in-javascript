/**
 * Merges two sorted arrays into another sorted array
 * @param {number[]} arr1 First array
 * @param {number[]} arr2 Second array
 * @returns {number[]} Merged array
 */

// Time complexity O(n + m) where n is the length of the first array and
// m is the length of the second array
function mergeArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  if (i <= arr1.length - 1) {
    arr1.splice(0, i);
    mergedArray = mergedArray.concat(arr1);
  } else if (j <= arr2.length - 1) {
    arr2.splice(0, j);
    mergedArray = mergedArray.concat(arr2);
  }

  return mergedArray;
}

console.log(mergeArrays([-133, -100, 0, 4], [-2000, 2000]));
