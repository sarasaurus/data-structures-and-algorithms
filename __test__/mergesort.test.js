'use strict';

import mergesort from '../mergesort';

describe('#testing mergesort', () => {
  test('it should return 1,2,3,4,5,6,7,8,9,10', () => {
    expect(mergesort([5, 9, 10, 3, 2, 7, 8, 1, 6, 4])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  test('it should return -3,-2,1,2,3,4,5,6,7', () => {
    expect(mergesort([5, -1, -3, 3, 2, 7, -2, 1, 6, 4])).toEqual([-3, -2, -1, 1, 2, 3, 4, 5, 6, 7]);
  });
  test('it should return error for empty array', () => {
    expect(mergesort([])).toEqual('invalid input');
  });
  test('it should return error for string', () => {
    expect(mergesort('invalid')).toEqual('invalid input');
  });
});
