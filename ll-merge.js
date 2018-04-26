'use strict';

const Node = require('./node');
const LinkedList = require('./ll_kth_from_end');
const merge = module.exports = {function (testListA, testListB);};

const testListA = new LinkedList();
const testListB = new LinkedList();
const testListC = new LinkedList();
testListA.append(1);
testListA.append(3);
testListA.append(2);
testListB.append(5);
testListB.append(9);
testListB.append(4);
testListC.append(11);
testListC.append(12);
console.log('testlist A!', testListA);
console.log('testlist B!', testListB);
console.log('testlist C!', testListC);

merge.mergeLists = (listA, listB) => {
  const currentNode = listA.head;
  console.log('currnode to listA IS: ', currentNode.value);
  let cacheA = currentNode.next.next;
  console.log('cahceA IS: ', currentNode.next.value);
  let cacheB = listB.head;
  console.log('cacheB IS: ', cacheB.value);
  console.log('outta loop currNode IS: ', currentNode);

  listA.head.next = cacheB;
  console.log('after reassign to b listA.head.next IS: ', listA.head.next.value);

  while (currentNode.next) {
    // if (currentNode.next.next) {
    //   currentNode.next = cacheB;
    //   cacheB = cacheB.next.next;
    //   //cacheB.next = currentNode.next.next;
    //   console.log('in and after loop', currentNode);
    // }
    //currentNode.next = cacheB;
  }
  return this;
};

