'use strict';

const bracket = module.exports = {};


bracket.checkBrackets = (string) => {
  const check = [];
  const backcheck = [];
  let tally = 0;
  for (let i = 0; i <= string.length; i++) {
    if (string[i] === '(') {
      check.push(')');
    } else if (string[i] === '[') {
      check.push(']');
    } else if (string[i] === '{') {
      check.push('}');
    } else if (string[i] === '}' || string[i] === ']' || string[i] === ')') {
      backcheck.push(string[i]);
    }
  }
  console.log(`check is ${check}, backcheck is ${backcheck}`);
  
  if (check.length === backcheck.length) {
    tally = check.length;
    for (let i = 0; i <= check.length; i++) {
      const len = backcheck.length - i;
      if (check[i] === backcheck[len]) {
        tally--;
      } 
    }
    if (tally === 0) {
      return true;
    }
  }
  return false;
};
// this is not working
