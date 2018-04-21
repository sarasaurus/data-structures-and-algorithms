'use strict';

const reverse = require('../reverse-an-array.js'); 

describe('testing reverse an array', () => {
  test('Should return 3,2,1', () => {
    expect(reverse.reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
  });
  test('Should return 7,6,5,4,3,2,1', () => {
    expect(reverse.reverseArray([1, 2, 3, 4, 5, 6, 7])).toEqual([7, 6, 5, 4, 3, 2, 1]);
  });
});
