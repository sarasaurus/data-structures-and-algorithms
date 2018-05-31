'use strict';

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
