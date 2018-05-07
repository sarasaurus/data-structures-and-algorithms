'use strict';

const fizzBuzzTree = (tree) => {
  if (!tree) {
    return new Error('no tree!');
  }
  const rootNode = tree.root;

  const traverseTree = (node) => {
    if (!node) {
      return undefined;
    }
    traverseTree(node.left);
    if (node.value % 5 === 0 && node.value % 3 === 0) {
      node.value = 'fizzbuzz';
    } else if (node.value % 5 === 0) {
      node.value = 'buzz';
    } else if (node.value % 3 === 0) {
      node.value = 'fizz';
    } node.value = node.value;
    traverseTree(node.right);
  }; 
  traverseTree(rootNode);
};

export default fizzBuzzTree;

// if interviewer says no matter order-- then use pre-order
