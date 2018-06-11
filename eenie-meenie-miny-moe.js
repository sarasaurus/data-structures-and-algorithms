import Queue from 'queue-fifo';

const returnMoe = (array, n) => {
  let counter = array.length; // ?
  const circle = new Queue();
  let i;
  array.map(ele => circle.enqueue(ele)); // ?

  while (counter !== 1) {
    i = n;
    while (i !== 0) {
      circle.enqueue(circle.dequeue()); 
      i -= 1;// ?
    }
    circle.dequeue(); // ?
    counter -= 1; // ?
  }; 
  return circle.dequeue(); // ?
};
const testArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

returnMoe(testArray, 4);
