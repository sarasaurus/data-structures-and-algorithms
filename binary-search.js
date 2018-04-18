'use strict';

const search = module.exports = {};

search.BinarySearch = (arr, key) => {
  let success = null;
  let fail;
  for (let i = 0; i <= arr.length; i++) {
    arr[i] === key ? success = arr[i] : fail = -1;
  }
  if (success !== null) {
    return success;
  } return fail;
};

