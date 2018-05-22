 'use strict';
 class KAryTree {
  constructor(root = null) {
    this.root = root;
  }

  breadthFirstSearch(callback) {
    if (!this.root) {
      return null;
    }
    return this._breadthFirstSearch(this.root, callback);
  }

  _breadthFirstSearch(root, callback) { // eslint-disable-line
    const queue = new Queue();
    queue.enqueue(root);
  
    let current = null;
  
    while (!queue.isEmpty()) {
      current = queue.dequeue();
  
      // this will be replaced with another operation. 
      // console.log(`Visiting ${current.value}`);
      callback(current.value);
  
      for (let i = 0; i < current.children.length; i++) {
        queue.enqueue(current.children[i]);
        queue.enque('\n')
      }
    }
  }
)