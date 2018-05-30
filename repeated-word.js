'use strict';

const repeatedWord = (string) => {
  const stringMap = new Map();
  const splitString = string.toLowerCase().split(/\s*\W/gm);
  // console.log(splitString);
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] !== '') {
      if (stringMap.get(splitString[i])) {
        console.log('RETURN: ', splitString[i]);
        return splitString[i];
      } stringMap.set(splitString[i], splitString[i]);
    }
    // console.log('RETURN2: ', ele);
    // return ele;
  }
};

  
  // return stringMap.get();


export default repeatedWord;

// time to traverse and time to find elements
// here we are expecting the firt return to be summer-- it is, but why does it keep going?
repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...');
// function is working but not in jest 
