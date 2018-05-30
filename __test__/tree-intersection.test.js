'use strict';

import BinaryTree from '../lib/binary-tree';
import Node from '../lib/tree-node';
import findIntersection from '../tree-intersection';

describe('testing tree-intersection', () => {
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const four = new Node(4);
  const five = new Node(5);
  const six = new Node(6);

  const a = new Node(10);
  const b = new Node(2);
  const c = new Node(3);
  const d = new Node(1);
  const e = new Node(50);
  const f = new Node(60);

  one.left = two;
  one.right = three;
  three.left = four;
  three.right = five;
  two.left = six;

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.left = f;

  const treeA = new BinaryTree(one);
  const treeB = new BinaryTree(a);

  test('it should return an array of [1, 2, 3]', () => {
    expect(findIntersection(treeA, treeB)).toContain([1, 2, 3]);
  });
});
