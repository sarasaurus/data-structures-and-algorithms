'use strict';

const largest = require('../largest-product.js'); 

describe('testing whiteboard', () => {
  test('Should return 56', () => {
    expect(largest.largestProduct([[1,2],[3,4],[5,6],[7,8]]).toEqual(56);
  });
  test('Should return 64', () => {
    expect(largest.largestProduct([[1,2,8],[3,4,8],[5,6,8],[7,8,8]]).toEqual(64);
  });
  test('Should return 81', () => {
    expect(largest.largestProduct([[1,2],[9,4],[9,6],[7,8]]).toEqual(81);
  });
});