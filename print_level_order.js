'use strict';

import Queue from 'queue-fifo';

const printLevelOrder = (tree) => {
  if (!tree.root) {
    return null;
  }
    const _breadthFirstSearch = (root) => { // eslint-disable-line
    let printString = '';
    const queue = new Queue();
    queue.enqueue(root);
    let current = null;
    while (!queue.isEmpty()) {
      current = queue.dequeue();
      // this will be replaced with another operation. 
      // console.log(`Visiting ${current.value}`);
      // callback(current.value);
      printString += current.value.toString();
      for (let i = 0; i < current.children.length; i++) {
        queue.enqueue(current.children[i]);
        if (i === current.children.length) {
          queue.enque('\n');
        }
      }
      // queue.enqueue('\n');
    }
    return printString;
  };

  return _breadthFirstSearch(tree.root);
};

export default printLevelOrder;
