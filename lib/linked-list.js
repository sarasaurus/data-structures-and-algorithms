'use strict';
// this linked list is the best one
const Node = require('./ll-node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  insertAtTail(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
      this.length += 1;
      return this;
    } 
    this.tail.next = newNode;
    this.tail = newNode;
    this.tail.next = null;
    this.length += 1;
    return this;
  }
  removeFromTail() {
    if (!this.head) {
      return new Error('no list!');
    } 
    let currentNode = this.head;
    let prev;
    while (currentNode.next) {
      prev = currentNode;
      this.tail = currentNode;
      currentNode = currentNode.next;
    }
    prev.next = null;
    this.tail = prev;
    this.length -= 1;
    return currentNode;
  }
  // not sure what's happening here but kind of want to hold on to it
  insertAtHead(value) {
    const newHead = new Node(value);
    if (!this.head) {
      this.head = this.tail = newHead;
      this.length += 1;
      return this;
    }
    newHead.next = this.head;
    this.head = newHead;
    this.length += 1;
    return this;
  }
  removeFromHead() {
    if (!this.head) {
      throw new Error('List is Empty!');
    }
    let newHead = this.head.next;
    console.log(newHead, 'newHead');
    this.head = newHead;
    this.length -= 1;
    return this;
  }
};
