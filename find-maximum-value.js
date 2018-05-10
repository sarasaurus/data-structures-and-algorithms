'use strict';

const findMaxVal = (tree) => {
  let max = null;
  const traverse = (node) => { // eslint-disable-line
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
