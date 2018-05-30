'use strict';

const repeatedWord = (string) => {
  const stringMap = new Map();
  const splitString = string.toLowerCase().split(/\s*\W/gm);
  // console.log(splitString);
  return splitString.map((ele) => {
    if (ele !== '') {
      if (stringMap.get(ele)) {
        console.log('RETURN: ', ele);
        return ele;
      } stringMap.set(ele, ele);
    }
    // console.log('RETURN2: ', ele);
    // return ele;
  });
  
  // return stringMap.get();
};

export default repeatedWord;

// time to traverse and time to find elements
// here we are expecting the firt return to be summer-- it is, but why does it keep going?
repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...');
// function is working but not in jest 