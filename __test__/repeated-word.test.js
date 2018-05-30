'use strict';
import repeatedWord from '../repeated-word';

describe('testing repeated word', () => {
  test('it should return word, no punctuation', () => {
    const testString = 'The light was so word word whatever whatever whatever, the, THE';
    expect(repeatedWord(testString)).toEqual('word');
  });
  test('it should return word, with punctuation', () => {
    const testString = 'The light, was so word, word whatever whatever whatever, the, THE';
    expect(repeatedWord(testString)).toEqual('word');
  });
});
