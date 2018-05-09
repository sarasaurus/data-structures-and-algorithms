'use strict';


const Q = [];

const breadthFirst = (tree) => {
  if (!tree) {
    throw new Error('no tree!');
  }
  let values = '';
  Q.push(tree.root);
  console.log('QUEUE', Q);
  while (Q.length > 0) {
    const curr = Q.shift();
    if (curr.value) { 
      values += curr.value;
      console.log('curr value', curr.value); 
      if (curr.left) {
        Q.push(curr.left);
      }
      if (curr.right) {
        Q.push(curr.right);
      }
      console.log('QUEUE', Q);
    }
  }
  console.log('values', values);
  return values;
};


// ... using a while loop how would you use a stack
export default breadthFirst;
