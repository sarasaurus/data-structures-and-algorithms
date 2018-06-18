'use strict';

const karyDeconstruct = (tree) => {
  const queue = [];
  let nodeArray = [];
  let current = null;
  queue.push(tree.root);
  while (queue.length > 0) {
    current = queue.shift();
    for (i in current.children) { // eslint-disable-line
      queue.push(current.children[i]);
      nodeArray = [...{ parent: current, children: current.children }];
    }
  }
  return nodeArray;
};

karyConstruct = (array) => {
  const length = array.length;
  const root = array[length].parent;
  const tree = new KaryTree(root);
  for (let i = array.length; i > 0; i--) {
    const node = array[i].parent;
    KaryTree.append(node);
    if (array[i].children) {
      for (child in array[i].children) { // eslint-disable-line
        KaryTree.append(child);
      }
    }
  }
  return tree;
};
