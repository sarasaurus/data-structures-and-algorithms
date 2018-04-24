'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }// c
  append(value) {
    let currentNode = this.head;
    const newNode = new Node(value);
    while (currentNode.next) {
      currentNode = currentNode.next;
    } 
    currentNode.next = newNode;
    return this;
  }// append
  kthFromEnd(k) {
    if (this.head !== null) {
      let counter = 0;
      let currentNode = this.head;
      let traverseListForK = 0;
      while (currentNode.next) {
        currentNode = currentNode.next;
        counter ++;
      }// while
      traverseListForK = counter + 1;
      if (traverseListForK - k) {
        currentNode = this.head;
        for (let i = 0; i <= traverseListForK; i++) {
          currentNode = currentNode.next;
          return currentNode;
        }// for
      }// if traverse doesnt exist:
      return 'exception';
    }// if head doesnt exist:
    return 'exception';
  }
};// module
