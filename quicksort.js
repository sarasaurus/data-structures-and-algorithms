'use strict';

/**
 * Pick an element, called a pivot, from the array.
  * Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the partition operation.
  * Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.
 */
const swap = (array, left, right) => {
  const value = array[left];
  array[left] = array[right];
  array[right] = value;
  return array;
};

const partition = (array, left, right) => {
  const pivot = array[Math.floor((left + right) / 2)]; // ?
  let i = left;
  let j = right;
  while (i <= j) {
    while (array[i] < pivot) { 
      i++; // ?
    }
    while (array[j] > pivot) {
      j--; // ?
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;// ?
};

const quicksort = (array, left, right) => {
  if (!array.length) {
    return 'invalid input';
  }
  let index;
  if (array.length > 1) {
    index = partition(array, left, right); // ?
    if (left < index - 1) {
      quicksort(array, left, index - 1); // ?
    }
    if (index < right) {
      quicksort(array, index, right); // ?
    }
  }
  
  return array;
};


export default quicksort;
const testArray = [5, 9, 10, 3, 2, 7, 8, 1, 6, 4, 49, 34];
quicksort(testArray, 0, testArray.length - 1);
