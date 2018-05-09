'use strict';


const Q = [];

const breadthFirst = (tree) => {
  if (!tree) {
    throw new Error();
  }
  let values = '';
  Q.push(tree.root);
  while (Q.length > 0) {
    const curr = Q.shift();
    if (curr.value) { 
      values += curr.value;
      if (curr.left) {
        Q.push(curr.left);
      }
      if (curr.right) {
        Q.push(curr.right);
      }
    }
  }
  return values;
};

export default breadthFirst;
