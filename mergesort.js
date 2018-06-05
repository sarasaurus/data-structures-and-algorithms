'use strict';

const mergesort = (arr) => {// ?
  if (!arr.length) {
    return 'invalid input';
  } else if (arr.length < 2) {
    return arr;
  }
  const len = arr.length; // ?
  const half = Math.floor(len / 2); // ?
  const left = arr.slice(0, half); // ?
  const right = arr.slice(half, len); 

  const merge = (leftSort, rightSort) => {
    const result = [];
    while (leftSort.length && rightSort.length) {
      if (leftSort[0] <= rightSort[0]) {
        if (typeof leftSort.shift !== 'function') {
          return 'invalid input';
        }
        result.push(leftSort.shift());
      } else {
        if (typeof rightSort.shift !== 'function') {
          return 'invalid input';
        }
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
const poop = mergesort('poop'); // ?
console.log(poop);
export default mergesort;

