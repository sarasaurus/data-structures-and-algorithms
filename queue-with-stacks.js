'use strict';

const Stack = require('./stack.js');

module.exports = class myQueue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }
  enqueue(value) {
    this.stackA.push(value);
    return this.stackA;
  }
  dequeue() {
    console.log(this.stackA, 'stackA');
      
    if (!this.stackA.storage[0]) {
      return new Error('the Queue is empty!');
    }
    for (let i = 0; i <= this.stackA.storage.length; i++) {
      const tempValue = this.stackA.pop();
      this.stackB.push(tempValue);
      return this.stackB;
    }
    this.stackA.storage = [];
    const extractedValue = this.stackB.pop();
    for (let i = 0; i <= this.stackB.storage.length; i++) {
      this.stackA.push(this.stackB.pop());
    }
    console.log(this.stackB, 'stackB');
    return extractedValue;
  }
};
