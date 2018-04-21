
'use strict';

const largest = module.exports = {};

largest.largestProduct = (arr) => {
  let greatest = 0;
  let compare = 0;
  let up = 0;
  let down = 0;
  let right = 0;
  let current = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      current = arr[i][j];
      if (j + 1 < arr[i].length) {
        right = arr[i][j + 1] * current;
      }
      if (i - 1 >= 0) {
        up = arr[i - 1][j] * current;
      } 
      if (i + 1 < arr.length) {
        down = arr[i + 1][j] * current;
      } 
      const val = Math.max(up, down, right);
      if (val > compare) {
        compare = val;
      }
    }
    greatest = Math.max(greatest, compare);
  }
 
  return greatest;
};
