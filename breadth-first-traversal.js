'use strict';


const Q = [];

const breadthFirst = (tree) => {
  const values = [];
  Q.push(tree.root);
  console.log('QUEUE', Q);
  while (Q.length > 0) {
    const curr = Q.shift();
    if (curr.value) { 
      values.push(curr.value);
      console.log('curr value', curr.value); 
      Q.push(curr.left);
      Q.push(curr.right);
      console.log('QUEUE', Q);
    }
  }
  console.log('values', values);
  return values;
};


// ... using a while loop how would you use a stack
export default breadthFirst;
