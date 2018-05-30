'use strict';

const repeatedWord = (string) => {
  const stringMap = new Map();
  const splitString = string.toLowerCase().split(/\s*\W/gm);
  // console.log(splitString);
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] !== '') {
      if (stringMap.get(splitString[i])) {
        return splitString[i];
      } stringMap.set(splitString[i], splitString[i]);
    }
  }
};
const wordCount = (string) => {
  let counter = 0;
  const splitString = string.split(/\s*\W/gm);
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] !== '') {
      counter += 1;
    }
  }
  return counter;
};
const repeatedWordList = (string) => {
  const stringMap = new Map();
  const splitString = string.toLowerCase().split(/\s*\W/gm);
  // console.log(splitString);
  let wordList = '';
  splitString.map((word) => {
    if (word !== '') {
      if (stringMap.get(word)) {
        wordList += `${word},\n`;
      } stringMap.set(word, word);
    }
  });
  return wordList;
};
export { repeatedWord, wordCount, repeatedWordList };

