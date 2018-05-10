'use strict';

import Tree from '../lib/binary-tree';
import Node from '../lib/tree-node';
import findMaxVal from '../find-maximum-value';

let tree = null;

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(-7);
const eight = new Node(8);
const nine = new Node(9);
const ten = new Node(10);
const eleven = new Node(11);
const neg = new Node(-20);

afterEach(() => {
  tree = null;
});

describe('testing find max value', () => {
  // let values = [];
  test('value should be 9', () => {
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    tree = new Tree(one);
    expect(findMaxVal(tree)).toEqual(9);
  });
  test('value should be 11', () => {
    one.left = ten;
    one.right = three;
    three.left = four;
    three.right = five;
    ten.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = eleven;
    tree = new Tree(one);
    expect(findMaxVal(tree)).toEqual(11);
  });
  test('value should handle negative numbers, value should be 11', () => {
    one.left = ten;
    one.right = three;
    three.left = four;
    three.right = five;
    ten.left = neg;
    neg.right = seven;
    seven.left = eight;
    seven.right = eleven;
    tree = new Tree(one);
    expect(findMaxVal(tree)).toEqual(11);
  });
});
