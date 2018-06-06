'use strict';

import quicksort from '../quicksort';

describe('#testing quicksort', () => {
  test('it should return 1,2,3,4,5,6,7,8,9,10', () => {
    const testArray = [5, 10, 9, 4, 6, 2, 3, 7, 1, 8];
    expect(quicksort(testArray, 0, testArray.length - 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  test('it should return -3,-2,1,2,3,4,5,6,7', () => {
    const testArray = [5, -1, -3, 3, 2, 7, -2, 1, 6, 4];
    expect(quicksort(testArray, 0, testArray.length - 1)).toEqual([-3, -2, -1, 1, 2, 3, 4, 5, 6, 7]);
  });
  test('it should return error for empty array', () => {
    const testArray = [];
    expect(quicksort(testArray, 0, testArray.length - 1)).toEqual('invalid input');
  });
});
