'use strict';

const bracket = require('../multi-bracket-validation');

describe('#multi-bracket-validation', () => {
  test('given ({{[]}}), should return true', () => {
    const testString = '({{[]}})';
    expect(bracket.checkBrackets(testString)).toBeTruthy();
  });
  test('given (}), should return false', () => {
    const testString = '(})';
    expect(bracket.checkBrackets(testString)).toBeFalsy();
  });
  test('given [{]}, should return false', () => {
    const testString = '[{]}';
    expect(bracket.checkBrackets(testString)).toBeFalsy();
  });
  test('given [cara]{}whaterver(test), should return true', () => {
    const testString = '[cara]{}whaterver(test)';
    expect(bracket.checkBrackets(testString)).toBeTruthy();
  });
});
