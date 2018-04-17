'use strict';

const shift = module.exports = {};


shift.insertShiftArray = (arr, val) => {
  const middle = arr.length / 2;
  const newArr = [];
  const index = Math.ceil(middle);
  for (let i = 0; i < middle; i++) {
    newArr.push(arr[i]);
  }
  newArr.push(val);
  for (let j = index; j < arr.length; j++) {
    newArr.push(arr[j]);
  }
  return newArr;
};
