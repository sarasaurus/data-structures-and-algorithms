'use strict';

const search = require('../binary-search.js'); 

describe('testing whiteboard', () => {
  test('Should return 6', () => {
    expect(search.BinarySearch([1, 2, 3, 4, 5, 6], 6)).toEqual(6);
  });
  test('Should return -1', () => {
    expect(search.BinarySearch([11, 22, 33, 44, 55], 99)).toEqual(-1);
  });
  test('Should return [10,12,44,13,14]', () => {
    expect(search.BinarySearch(['dum', 12, 13, 14], 'dum')).toEqual('dum');
  });
});
  
