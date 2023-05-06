function findSum(arr, value) {
  arr.sort((a, b) => a - b)

  let left = 0
  let right = arr.length - 1
  let sum = 0

  while (left < right) {
    sum = arr[left] + arr[right]
    if (sum === value) {
      return [arr[left], arr[right]]
    } else if (sum < value) {
      left++
    } else if (sum > value) {
      right--
    }
  }

  return false
}

console.log(findSum([1, 21, 3, 14, 5, 60, 7, 6], 81))
