'use strict';

import util from 'util';

import linkedList from './lib/linked-list';
import linkedlistMext from './lib/ll-mext';
import Mext from './lib/ll-mext-node';
import Node from './lib/ll-node';

const mextNext = (ll) => {
  let current = ll.head;
  while (current.next) {
    const temp = current.next; // ?
    while (current.mext) {
      current.next = current.mext; // ?
      current = current.next; // ?
    }
    current.next = temp;// ?
    current = current.next; // ?
  }
  return ll;//?
};

const testList = new linkedList();
const values = [1, 2, 3];
values.map(ele => testList.insertAtHead(ele));
console.log(testList.head.value);
testList.head.next.next = new Node(4);
testList.head.next.next.next = new Node(5);
testList.head.next.mext = new Mext('a');
testList.head.next.mext.mext = new Mext('b');
testList.head.next.mext.mext.mext = new Mext('c');

mextNext(testList); 
console.log(util.inspect(testList, { showHidden: true, depth: null }));// ?
export default mextNext;
