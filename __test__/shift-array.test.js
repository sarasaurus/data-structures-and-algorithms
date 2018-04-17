const shift = require('../shift-array.js'); 

describe('testing whiteboard', () => {
  test('Should return [1,2,5,3,4]', () => {
    expect(shift.insertShiftArray([1, 2, 3, 4], 5)).toEqual([1, 2, 5, 3, 4]);
  });
  test('Should return [1,2,3,6,4,5]', () => {
    expect(shift.insertShiftArray([1, 2, 3, 4, 5], 6)).toEqual([1, 2, 3, 6, 4, 5]);
  });
  test('Should return [10,12,44,13,14]', () => {
    expect(shift.insertShiftArray([10, 12, 13, 14], 44)).toEqual([10, 12, 44, 13, 14]);
  });
});
