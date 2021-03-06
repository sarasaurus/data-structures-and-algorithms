'use strict';

const Node = require('./lib/node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }
  // append(value) {
  //   let currentNode = this.head;
  //   const newNode = new Node(value);
  //   while (currentNode.next) {
  //     currentNode = currentNode.next;
  //   } 
  //   currentNode.next = newNode;
  //   return this;
  // }
  append(value) {
    let currentNode;
    if (!this.head) {
      this.head = new Node(value);
      return this;
    } 
    currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    } 
    currentNode.next = new Node(value);
    return this;
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    if (this.head.value === value) {
      this.head.value = newValue;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        const previousNode = currentNode;
        currentNode = currentNode.next;
        if (currentNode.value === value) {
          previousNode.next = newNode;
          newNode.next = currentNode;
          return this;
        } throw Error; 
      }
    }
  }
  
  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    if (this.head.value === newValue) {
      newNode.next = this.head;
      newNode = this.head;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
        if (currentNode.value === value) {
          newNode.next = currentNode.next;
          currentNode.next = newNode;
          return this;
        } throw Error;
      }
    }
  }
}
