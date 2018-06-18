'use strict';

import LinkedList from './lib/linked-list';

const reverseList = (list) => {
  let current = list.head; // ?
  console.log(list.head.value);
  while (current.next) { // ?
    const currentValue = current.value; // ?
    const nextValue = current.next.value; // ?
    current.next.value = currentValue; // ?
    current = current.next; // ?
    current.value = nextValue; // ?
  }
  console.log(current.value);
  console.log(list.head.next.value); // ?
  return list; // ?
};
export default reverseList;

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const testList = new LinkedList();
values.map(ele => testList.insertAtTail(ele));

testList.head.value; // ?
reverseList(testList); // ?

