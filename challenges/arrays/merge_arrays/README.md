# Challenge: Merge Two Sorted Arrays

## Problem Statement

Implement a function that merges two sorted arrays into another sorted array. Name it `mergeArrays(arr1, arr2)`.

### Input

Two sorted arrays.

### Output

A merged sorted array consisting of all elements of both input arrays.

## Sample Input

```js
arr1 = [1, 3, 4, 5];
arr2 = [2, 6, 7, 8];
```

## Sample Output

```js
arr = [1, 2, 3, 4, 5, 6, 7, 8];
```

## Solution

```javascript
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
```
