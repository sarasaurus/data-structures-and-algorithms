
'use strict';

const reverse = module.exports = {};

reverse.reverseArray = (arr) => {
  const newArr = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr.length - i < arr.length) {
      newArr.push(arr[arr.length - i]);
    }
  }
  return newArr;
};

