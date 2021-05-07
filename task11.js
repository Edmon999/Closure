//Given an array of integers, find the pair of adjacent elements that has the largest product and return that
// product.
const arrAdjMaxSum = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let res = arr[i] + arr[i + 1];
    if (res > max) {
      max = res;
    }
  }
  return max;
};
