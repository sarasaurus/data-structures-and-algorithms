'use strict';

import Queue from 'queue-fifo';
import KAryNode from './lib/k-ary-node';
import KAryTree from './lib/k-ary-tree';

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
      for (let i = 0; i < current.children.length; i++) {
        queue.enqueue(current.children[i]);
        level += 1; // ?
      }
      if (level !== 0) {
        level += 1;
        printString += `\n${  current.value}`; // ?
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

const one = new KAryNode(1);
one.appendChild(2);
one.appendChild(3);
one.appendChild(4);

one.children[1].appendChild(5);
one.children[1].appendChild(6);
one.children[1].appendChild(7);

one.children[1].children[1].appendChild(8);

const kAryTree = new KAryTree(one);

printLevelOrder(kAryTree);