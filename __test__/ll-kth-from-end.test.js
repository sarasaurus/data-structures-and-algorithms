'use strict';

const LinkedList = require('../ll_kth_from_end');

describe('ll_kth_from_end.js', () => {
  test('#k = 0', () => {
    const testList = new LinkedList();
    testList.append(1);
    testList.append(3);
    testList.append(8);
    testList.append(2);
    expect(testList.kthFromEnd(0)).toEqual(testList.head.next.next.next);
  });
  test('#k = 2', () => {
    const testList = new LinkedList();
    testList.append(1);
    testList.append(3);
    testList.append(8);
    testList.append(2);
    expect(testList.kthFromEnd(2)).toEqual(testList.head.next);
  });
  test('#k = 6', () => {
    const testList = new LinkedList();
    testList.append(1);
    testList.append(3);
    testList.append(8);
    testList.append(2);
    expect(testList.kthFromEnd(6)).toEqual('exception');
  });
});
