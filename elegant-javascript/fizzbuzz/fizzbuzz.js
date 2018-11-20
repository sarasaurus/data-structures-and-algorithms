'use strict';

const fizzBuzz = (n) => {
  let result = [];
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {                                         
      // console.log('FizzBuzz');
      result = [...result, 'FizzBuzz']; 
    } else if (i % 3 === 0) {
      // console.log('Fizz');
      result = [...result, 'Fizz']; 
    } else if (i % 5 === 0) {
      // console.log('Buzz');
      result = [...result, 'Buzz']; 
    } else result = [...result, i]; 
    // else console.log(i);
  }
  // console.log(result);
  return result.join(', ');
};

console.log(fizzBuzz(100));

export default fizzBuzz;
