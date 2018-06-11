'use strict';

import Node from './lib/tree-node';
import Tree from './lib/binary-tree';


// const findClosest = (tree, value) => {
//   let closestSoFar;
//   let differenceSoFar;
//   _findClosest (node, value) {
//     if (node.value === value) {
//       return node;
//     } else if (node.value > value) {
//       closestSoFar = node.value;
//       difference = value - node.value;
//       _findClosest(node.left, value);
//     } else if (node.value < value) {
//       closestSoFar = node.value;
//       difference = value - node.value;
//       _findClosest(node.right, value);
//     } 
//   }
// }

//----------------
// vinicios code:
//---------------

const findClosestNode = (inputTree, target) => {
  // TODO: validation
  // if (inputTree.root !== null) {
  //   return 'no tree dumb-dumb';
  // } else if (inputTree.root.value === target) {
  //   return inputTree.root;
  // }
  let closestNodeSoFar = inputTree.root;
  let currentNode = inputTree.root;

  while (currentNode !== null) {
    if (currentNode.value === target) {
      return currentNode;
    }

    // first -- update closest value
    const currentNodeDifference = Math.abs(target - currentNode.value);
    const closestElementDifference = Math.abs(target - closestNodeSoFar.value);
    if (currentNodeDifference <= closestElementDifference) {
      closestNodeSoFar = currentNode;
    }
    // second -- move down the tree
    if (currentNode.value > target) {
      currentNode = currentNode.left;
    }
    currentNode = currentNode.right;
  }
  return closestNodeSoFar;
};
// big O 
// space: O(1) -- we only creating single value caches-- they dont change if input gets bigger
// time: O(h) -- height of tree -- in full tree o(lgN) where n is height?


const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);
const ten = new Node(10);
five.left = three;
five.right = nine;
three.left = two;
three.right = four;
nine.left = six;
nine.right = ten;
six.right = seven;
const tree = new Tree(five);
console.log(tree);

findClosestNode(tree, 5).value; // ?

