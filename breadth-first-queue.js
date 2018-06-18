import Queue from 'queue-fifo';
import Node from './lib/tree-node';
import Tree from './lib/binary-tree';

const breadthFirst = (tree) => {
  const que = new Queue();
  let values = '';
  let current;
 
  const _breadthFirst = (node) => {// eslint-disable-line
    let counter; 
    que.enqueue(node); // ?
    while (!que.isEmpty() && current !== null) {
      if (counter !== 0) {
        values += '\n '; // ?
      }
      counter = 0;
      current = que.dequeue();
      if (current) {
        values += current.value;
        if (current.left && current.right) {
          counter += 1;
          que.enqueue(current.left);
          que.enqueue(current.right);
        } else if (!current.right) {
          counter += 1;
          que.enqueue(current.left);
        } else if (!current.left) {
          counter += 1;
          que.enqueue(current.right);
        }
      }
    }
  };
  _breadthFirst(tree.root);
  return values; // ?
};

const one = new Node(1);
const two = new Node(15);
const three = new Node(12);
const four = new Node(20);
const five = new Node(11);
const six = new Node(2);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);
one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
const tree = new Tree(one);
console.log(tree.root.right.value);
console.log(breadthFirst(tree)); // ?

