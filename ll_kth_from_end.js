'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    let currentNode;
    if (!this.head) {
      this.head = new Node(value);
    } 
    currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    } 
    currentNode.next = new Node(value);
    return this;
  }// append

  kthFromEnd(k) {
    if (this.head !== null) {
      let counter = 0;
      let currentNode = this.head;
      let traverseListForK = 0;
      while (currentNode.next) {
        currentNode = currentNode.next;
        counter += 1;
      }// while
      traverseListForK = counter + 1;
      console.log('counter plus 1: ', traverseListForK);
      if (traverseListForK - k) {
        currentNode = this.head;
        for (let i = 0; i <= traverseListForK; i++) {
          currentNode = currentNode.next;
          console.log('counter after the loop', traverseListForK - k);
          return currentNode;
        }// for
      }// if traverse doesnt exist:
      return 'exception';
    }// if head doesnt exist:
    return 'exception';
  }
};// module
