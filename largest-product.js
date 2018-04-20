
'use strict';

const largest = module.exports = {};

largest.largestProduct = (arr) => {
  const greatest = 0;
  let compare = 0;

  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr[i].length; j++) {
      const current = arr[i][j];
      let up = arr[i + 1][j] * current;
      let down = arr[i - 1][j] * current; 
      
      if (up !== null && up > down) { up = compare; } else if (down !== null) { down = compare; } console.log('poop'); 
    }

    if (compare > greatest) {
      compare = greatest;
    } else { console.log('nothing'); }
  }

  return greatest;
};

