'use strict';

import util from 'util';
import Tree from '../lib/binary-tree';
import Node from '../lib/tree-node';
import fizzBuzzTree from '../fizzbuzztree';

let tree = null;

const one = new Node(1);
const two = new Node(15);
const three = new Node(12);
const four = new Node(20);
const five = new Node(11);
const six = new Node(2);
const seven = new Node(7);
const eight = new Node(8);
const nine = new Node(9);

afterEach(() => {
  tree = null;
});

describe('testing fizzBuzzTree', () => {
  // let values = [];
  test('value should be fizz', () => {
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
    fizzBuzzTree(tree);
    console.log('THE TREE AFTER FIZZBUZZ: ', util.inspect(tree, { showHidden: true, depth: null }));
    expect(three.value).toEqual('fizz');
  });
  test('value should be buzz', () => {
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    tree = new Tree(one);
    fizzBuzzTree(tree);
    expect(four.value).toEqual('buzz');
  });
  test('value should be fizzbuzz', () => {
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    tree = new Tree(one);
    fizzBuzzTree(tree);
    expect(two.value).toEqual('fizzbuzz');
  });
  test('value should be unchanged', () => {
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    tree = new Tree(one);
    fizzBuzzTree(tree);
    expect(seven.value).toEqual(7);
  });
});

