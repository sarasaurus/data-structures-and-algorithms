'use strict';

const mergesort = (arr) => {// ?
  if (arr.length < 2) {
    return arr;
  }
  const len = arr.length; // ?
  const half = Math.floor(len / 2); // ?
  const left = arr.slice(0, half); // ?
  const right = arr.slice(half, len); 

  const merge = (leftSort, rightSort) => {
    const result = [];
    while (leftSort.length && rightSort.length ) {
      if (leftSort[0] <= rightSort[0]) {
        result.push(leftSort.shift());
      } else {
        result.push(rightSort.shift());// ?
      }
    }
    while(leftSort.length) {
      result.push(leftSort.shift());
    }
    while(rightSort.length) {
      result.push(rightSort.shift());
    }
    return result; // ?
  };
  return merge(mergesort(left), mergesort(right));// ?
};
const test = [4, 7, 2, 1, 10, 78, 3, 45, 0, 50];
const poop = mergesort(test);
console.log(poop);
// export default mergesort;

