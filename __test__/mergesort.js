'use strict';

const mergesort = (arr) => {
  const len = arr.length; 
  const half = Math.floor(len / 2); 
  const left = arr.slice(0, half); 
  const right = arr.slice(half, len); 

  while (left.length && right.length) {
    const sorted = [];
    if (left[0] > right[0]) {
      sorted.push(right[0]);
      sorted.push(left[0]);
    } else {
      sorted.push(left[0]);
      sorted.push(right[0]);
    }
    console.log(sorted);
  }
};

export default mergesort;
const test = [4, 7, 2, 1, 10, 78, 3, 45, 0, 50, 2];

mergesort(test);

