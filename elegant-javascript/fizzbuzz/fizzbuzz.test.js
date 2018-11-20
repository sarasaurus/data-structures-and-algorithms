'use strict';

import fizzBuzz from './fizzbuzz';
// const fizzBuzz = require('./fizzbuzz'); 
const testString = 'FizzBuzz, 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz';
describe('testing fizz buzz', () => {
  test('Should include Fizz', () => {
    expect(fizzBuzz(4)).toMatch(/Fizz/);
  });
  test('Should include Buzz', () => {
    expect(fizzBuzz(5)).toMatch(/Buzz/);
  });
  test('should include FizzBuzz', () => {
    expect(fizzBuzz(15)).toMatch(/FizzBuzz/);
  });
  test('Should match string', () => {
    expect(fizzBuzz(20)).toBe(testString);
  });
});
