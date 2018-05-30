'use strict';

import BinaryTree from './lib/binary-tree';

const findIntersection = (a, b) => {
  const map = new Map();
  const output = [];
  const _traverse = (root, cb) => { //eslint-disable-line
    if (!root) {
      return undefined;
    }
    _traverse(root.left, cb);
    _traverse(root.right, cb);
    cb(root.value);
  };

  const _createMap = (val) => { //eslint-disable-line
    if (!map.get(val)) {
      return map.set(val, true);
    } 
  };

  const _checkValue = (val) => { //eslint-disable-line
    if (map.get(val)) {
      return output.push(val);
    }
  };

  _traverse(a.root, _createMap);
  _traverse(b.root, _checkValue);
  return output;
};
export default findIntersection;


// / build hashmap based on treeA
// push all values in a, as keys with value true
// map.set(nodeVal: true);
// then traverse treeB and check if each nodeval is in the map
// if it is push to map/array/storage
// return the collection
// Hshmaps are greate for looking, counting, finding dups and keeping track of values THE ONLY time hashmaps not so great are to fine the 'closest value'

// be cautious with number: number-- becasue if you have 0: 0--> it would evaluate to false becasue 0 is false

// ES 6 set is like a map but values must be unique

// object in js IS a hashmap basically, just more limited
// hasmap is like a JS object, but where keys can be anything
