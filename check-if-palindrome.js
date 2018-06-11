// given a linked list check if its a palindrom, return boolean
import LinkedList from './lib/linked-list';
import Stack from './lib/stack-array';

const isPalidrome = (list) => {
  let flag = true;
  let iterator = 0;
  const half = Math.floor(list.length / 2); // ?
  const compare = [];
  let current = list.head;
  console.log(list.length);
  while (current.next) {
    iterator += 1; // ?
    if (iterator <= half) {
      compare.push(current.value); // ?
      console.log(compare);
    } else if (iterator > half) {
      console.log(iterator); // ?
      console.log(compare); 
      console.log(current.value);
      flag = current.value === compare.pop(); // ?
    }
  current = current.next;
  }
  return flag; // ?
};
export default isPalidrome;

const values = [1, 2, 3, 5, 3, 2, 1];
const testList = new LinkedList();
values.map(ele => testList.insertAtTail(ele));
console.log(testList);

isPalidrome(testList); // ?
