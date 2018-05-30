'use strict';
import BinaryTree from './lib/binary-tree';

const findIntersection = (a, b) => {
  const map = new Map();
  const output = [];
  _traverse(root, cb) {
    while(root){
      _traverse(root.left);
      _traverse(root.right);
      cb(root.value);
    }
  }
  _createMap (val) {
    if(!map.get(val)){
      map.set(val: true)
    }
  }
  _checkValue (val) {
    if(!map.get(val)){
      output.push(val);
    }
  }
  a._traverse(this.root, _createMap);
  b._travers(this.root, _checkValue);
  return output;
}
export default findIntersection;


/// build hashmap based on treeA
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