/**
 * Reverse a binary tree
 */

const reverse = (tree) => {
  console.log(tree.root.left);
  const _inOrder = (currentNode) => {
    if (!currentNode) {
      return undefined;
    }
    _inOrder(currentNode.left);

    // if (currentNode.left && currentNode.right) {
    const leftNode = currentNode.left;
    currentNode.left = currentNode.right;
    currentNode.right = leftNode;
    // }
    _inOrder(currentNode.right);
  };
  _inOrder(tree.root);
  return console.log(tree.root.left);
};


export default reverse;
