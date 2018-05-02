'use strict';
let bracket = module.exports={};


bracket.checkBrackets = (string) => {
  let check = [];
  let returnBool = true;
  let backcheck = [];

  for (let i = 0; i <= string.length; i++) {
    if (string[i] === '(') {
      check.push(')');
    }
    if (string[i] === '[') {
      check.push(']');
    }
    if (string[i] === '{') {
      check.push('}');
    }
    // -------------------------------
    if (string[i] === ')') {
      backcheck.push(')');
    }
    if (string[i] === ']') {
      backcheck.push(']');
    }
    if (string[i] === '}') {
      backcheck.push('}');
    }
  }
  console.log(`check is ${check}, backcheck is ${backcheck}`);

  if (!check.length === backcheck.length) {
    return false;
  }
  for (let i = 0; i <= check.length; i++) {
    if (check[i] === backcheck[check.length - i]) {
      returnBool = true;
    } returnBool = false;
  }
  console.log('BOOLEAN IS: ', returnBool);
  return returnBool;
};
// this is not working
