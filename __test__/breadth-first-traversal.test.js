'use strict';

import util from 'util';
import Tree from '../lib/binary-tree';
import Node from '../lib/tree-node';
import breadthFirst from '../breadth-first-traversal';

let tree = null;

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);

afterEach(() => {
  tree = null;
});

describe('testing breadth first traversal', () => {
  // let values = [];
  test('value should be 1234', () => {
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    tree = new Tree(one);
    console.log('THE TREE: ', util.inspect(tree, { showHidden: true, depth: null }));
    let what = breadthFirst(tree);
    console.log('WHAT', what);
  });
  
});
