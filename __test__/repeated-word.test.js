'use strict';

import { repeatedWord, wordCount, repeatedWordList } from '../repeated-word';

describe('testing repeated word', () => {
  test('it should return word, no punctuation', () => {
    const testString = 'The light was so word word whatever whatever whatever, the, THE';
    expect(repeatedWord(testString)).toEqual('word');
  });
  test('it should return word, with punctuation', () => {
    const testString = 'The light, was so word, word whatever whatever whatever, the, THE';
    expect(repeatedWord(testString)).toEqual('word');
  });
  test('it should return word, ignore capitolization', () => {
    const testString = 'The light, was so WORD woRd whatever whatever whatever, the, THE';
    expect(repeatedWord(testString)).toEqual('word');
  });
});
describe('testing word count', () => {
  test('it should return 3, no punctuation', () => {
    const testString = 'word word cool';
    expect(wordCount(testString)).toEqual(3);
  });
  test('it should return 3, with punctuation', () => {
    const testString = 'word...word, cool!';
    expect(wordCount(testString)).toEqual(3);
  });
});
// describe('testing repeated word list', () => {
//   test('it should return word and cool, no punctuation', () => {
//     const testString = 'word word cool abstract cool cool cool pizza';
//     expect(repeatedWordList(testString)).toEqual('word,\ncool,\n');
//   });
//   test('it should return word and cool, with punctuation', () => {
//     const testString = 'word...word, word cool! pizza! cool...';
//     expect(repeatedWordList(testString)).toEqual('word,\ncool,\n');
//   });
//   test('it should return word and cool, and ignore capitolization', () => {
//     const testString = 'Word...word, word cOol! pizza! COOL...';
//     expect(repeatedWordList(testString)).toEqual('word,\ncool,\n');
//   });
// });
