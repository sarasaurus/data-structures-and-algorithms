'use strict';

import Queue from 'queue-fifo';
import LinkedList from './lib/linked-list';

const findMatches = (tree, value) => {
  const storage = new LinkedList();
  if (!tree.root) {
    console.log('whats happening', storage);
    return storage;
  }
    const _findMatches = (root, searchValue) => { // eslint-disable-line
    const queue = new Queue();
    queue.enqueue(root);
    let current = null;
    while (!queue.isEmpty()) {
      current = queue.dequeue();
      if (current.value === searchValue) {
        storage.enqueue(current);
      }
      for (let i = 0; i < current.children.length; i++) {
        queue.enqueue(current.children[i]);
      }
    }
  };
  return _findMatches(tree.root);
};

export default findMatches;
