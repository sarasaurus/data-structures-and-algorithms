'use strict';

import Queue from 'queue-fifo';

const printLevelOrder = (tree) => {
  if (!tree.root) {
    return null;
  }
    const _breadthFirstSearch = (root) => { // eslint-disable-line
    let printString = '';
    let level = 0;
    const queue = new Queue();
    queue.enqueue(root);
    let current = null;
    while (!queue.isEmpty()) {
      current = queue.dequeue();
      printString += current.value;
     
      for (let i = 0; i < current.children.length; i++) {
        queue.enqueue(current.children[i]);
      }
    }
    while (queue.isEmpty()){
      level += 1;
      console.log(level);
    }
    return printString;
  };

  return _breadthFirstSearch(tree.root);
};

export default printLevelOrder;
