'use strict';

import Queue from 'queue-fifo';

const printLevelOrder = (tree) => {
  if (!tree.root) {
    return null;
  }
  console.log(tree.level, 'tree level');
  const queue = new Queue();
  let count = 0;
  let level = 0;
  let printString = '';
  const _breadthFirstSearch = (root) => { // eslint-disable-line
    queue.enqueue(root);
    count += 1;
    let current = null;
    while (!queue.isEmpty()) {
      current = queue.dequeue();
      printString += current.value;
      level += 1;
      console.log(level, 'level');
      for (let i = 0; i < current.children.length; i++) {
        queue.enqueue(current.children[i]);
      }
      if (count == 0) {
        count = q.length();
        level += 1;
        printString += `\n${  current.value}`;
      }
    }
    // while (queue.isEmpty()){
    //   level += 1;
    //   console.log(level);
    // }
    return printString;
  };

  return _breadthFirstSearch(tree.root);
};

export default printLevelOrder;
