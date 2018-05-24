'use strict';

import Queue from 'queue-fifo';
import LinkedList from './lib/linked-list';

const findMatches = (treeInput, valueInput) => {
  const storage = new LinkedList();
  const _returnMatches = (tree, value) => { // eslint-disable-line

    if (!tree.root) {
      return undefined;
    }
      const _findMatches = (root, searchValue) => { // eslint-disable-line
      const queue = new Queue();
      queue.enqueue(root);
      let current = null;
      while (!queue.isEmpty()) {
        current = queue.dequeue();
        // console.log('whats happening', current.value);
        // console.log(searchValue, 'searchValue')
        if (current.value === searchValue) {
          storage.insertAtHead(current);
          console.log('whats happening', storage);
        }
        for (let i = 0; i < current.children.length; i++) {
          queue.enqueue(current.children[i]);
        }
      }
    };
    return _findMatches(tree.root, value);
  };
  _returnMatches(treeInput, valueInput);
  return storage;
};

export default findMatches;
