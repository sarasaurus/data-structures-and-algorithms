'use strict';

const Node = require('./node');

module.exports = class LinkedList {
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
        counter++;
      }// while
      traverseListForK = counter + 2;
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
