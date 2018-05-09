'use strict';

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
const ten = new Node(10);
const eleven = new Node(11);

afterEach(() => {
  tree = null;
});

describe('testing breadth first traversal', () => {
  // let values = [];
  test('value should be 123645789', () => {
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    tree = new Tree(one);
    expect(breadthFirst(tree)).toEqual('123645789');
  });
  test('value should be 11036457811', () => {
    one.left = ten;
    one.right = three;
    three.left = four;
    three.right = five;
    ten.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = eleven;
    tree = new Tree(one);
    expect(breadthFirst(tree)).toEqual('11036457811');
  });
  test('should return error', () => {
    tree = null;
    expect(breadthFirst(tree)).toThrowError();
  });
});
