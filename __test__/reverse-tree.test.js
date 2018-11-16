import BinaryTree from '../lib/binary-tree';
import Node from '../lib/tree-node';
import reverse from '../reverse-tree';

describe('testing binary tree reversal', () => {
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
  one.left = two;
  one.right = three;
  three.left = four;
  three.right = five;
  two.left = six;
  six.right = seven;
  seven.left = eight;
  seven.right = nine;
  tree = new BinaryTree(one);
  test('root.left should be 3', () => {
    reverse(tree);
    expect(tree.root.left.value).toEqual(3);
  });
});
