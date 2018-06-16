import Tree from './lib/binary-tree';
import Node from './lib/tree-node';

const treesAreEqual = (treeA, treeB) => {

  let areEqual = true;
  const _postOrder = (nodeA, nodeB) => { // eslint-disable-line
    if (!nodeA || !nodeB) {
      return undefined;
    }
    _postOrder(nodeA.left, nodeB.left);
    _postOrder(nodeA.right, nodeB.right);
    if (nodeA.value !== nodeB.value) {
      areEqual = false;
    }
  };
  _postOrder(treeA.root, treeB.root);
  return areEqual;
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

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);
const g = new Node(29);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
f.right = g;

five.left = three;
five.right = nine;
three.left = two;
three.right = four;
nine.left = six;
nine.right = ten;
six.right = seven;

const testTreeA = new Tree(a); // ?
const testTreeB = new Tree(five); // ?

treesAreEqual(testTreeA, testTreeB); // ?

// BIG O:

// Space: O(h) => height of the tree-- if uneven, height of shortest tree
// Time: O(n) => number of nodes in the tree -- if uneven nodes in smallest tree

// tests 