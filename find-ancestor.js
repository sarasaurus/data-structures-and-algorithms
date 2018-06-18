import SearchTree from './lib/binary-search';
import Tree from './lib/binary-tree';
import Node from './lib/tree-node';

const findAncestor = (tree, aVal, bVal) => {
  const _inOrder = (node, a, b) => { // eslint-disable-line
    if (!node || node.value === a || node.value === b) {
      return node; // ?
    }
    const left = _inOrder(node.left, a, b); // ?
    const right = _inOrder(node.right, a, b); // ?
    if (right && left) {
      return node; // ?
    }
    return left ? left : right; // ?
  };

  return _inOrder(tree.root, aVal, bVal); // ?
};

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
const testTree = new Tree(five);
console.log(testTree);

// findClosestNode(tree, 5).value; // ?
findAncestor(testTree, 7, 10); // ? 
