'use strict';

const findMaxVal = (tree) => {
  let max = null; // can set to null or root.value or -infinity
  const traverse = (node) => {
    if (!node) {
      return undefined;
    }
    max = Math.max(node.value, max);
    traverse(node.left);
    traverse(node.right);
  };
  traverse(tree.root);
  return max;
};

export default findMaxVal;
