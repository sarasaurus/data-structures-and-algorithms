'use strict';

const search = module.exports = {};

search.BinarySearch = (arr, key) => {
  let success = null;
  const fail = -1;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === key) {
      success = i;
    }
  }
  if (success !== null) {
    return success;
  } return fail;
};

