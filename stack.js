
'use strict';

module.exports = class Stack {
  constructor() {
    this.storage = [];
  }
  push(value) {
    return this.storage.push(value);
  }
  pop() {
    return this.storage.pop();
  }
}