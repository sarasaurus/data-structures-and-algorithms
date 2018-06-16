// given a linked list check if its a palindrom, return boolean
import LinkedList from './lib/linked-list';
import Node from './lib/ll-node';
import Stack from './lib/stack-array';

const isPalidrome = (list) => {
  let flag = true;
  const stack = new Stack();
  let current = list.head; // ?
  while (current.next) {
    stack.push(current.value);// ?
    current = current.next;
  }
  stack.push(current.value);
  console.log(stack);
  current = list.head;
  while (current.next) {
    if (current.value !== stack.pop()) { 
      console.log(`${current.value} = ${stack.pop()}`);
      flag = false;
    }
    current = current.next;
  }
  if (current.value !== stack.pop()) { 
    console.log(`${current.value} = ${stack.pop()}`);
    flag = false;
  }
  return flag;// ?
};

const values = [1, 2, 3, 5, 3, 2, 1];
 // ?
const testList = new LinkedList();
testList.head = new Node(1); // ?
testList.head.next = new Node(2); // ?
testList.head.next.next = new Node(3); // ?
testList.head.next.next.next = new Node(5); // ?
testList.head.next.next.next.next = new Node(3); // ?
testList.head.next.next.next.next.next = new Node(2); // ?
testList.head.next.next.next.next.next.next = new Node(1); // ?

isPalidrome(testList); // ?

//big o
// assuming stack is linked list
// space <-- O(n) nodes in linked list
// time <-- O(n) nodes in linked list
