'use strict';

const Queue = require('../queue-with-stacks');

describe('queue-with-stacks', () => {
  test('#enqueue', () => {
    const testQueue = new Queue();
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    testQueue.enqueue(4);
    expect(testQueue.stackA.storage[0]).toEqual(1);
    expect(testQueue.stackA.storage[1]).toEqual(2);
    expect(testQueue.stackA.storage[2]).toEqual(3);
    expect(testQueue.stackA.storage[3]).toEqual(4);
  });
  test('#dequeue', () => {
    const testQueue = new Queue();
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    testQueue.enqueue(4);
    expect(testQueue.stackA.storage[3]).toEqual(4);
    testQueue.dequeue();
    expect(testQueue.stackA.storage[2]).toEqual(3);
    expect(testQueue.stackA.storage[4]).toBeFalsy();
  });
});
