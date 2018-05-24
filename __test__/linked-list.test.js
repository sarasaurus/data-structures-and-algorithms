'use strict';

import LinkedList from '../lib/linked-list';
const util = require('util');

describe('LINKED-LIST testing linked-list.js', () => {
  test('Insert At Head', () => {
    const testList = new LinkedList();
    testList.insertAtHead(1);
    testList.insertAtHead(2);
    testList.insertAtHead(3);
    console.log('Insert at Head: ', util.inspect(testList));
    expect(testList.head.value).toEqual(3);
    expect(testList.tail.value).toEqual(1);
    expect(testList.length).toEqual(3);
  });
  test('Insert At Tail', () => {
    const testList = new LinkedList();
    testList.insertAtTail(1);
    testList.insertAtTail(2);
    testList.insertAtTail(3);
    console.log('Insert at Tail: ', util.inspect(testList));
    expect(testList.head.value).toEqual(1);
    expect(testList.tail.value).toEqual(3);
    expect(testList.length).toEqual(3);
  });
  test('Remove from Head', () => {
    const testList = new LinkedList();
    testList.insertAtTail(1);
    testList.insertAtTail(2);
    testList.insertAtTail(3);
    console.log('before Remove from Head: ', util.inspect(testList));
    testList.removeFromHead();
    console.log('after Remove from Head: ', util.inspect(testList));
    expect(testList.head.value).toEqual(2);
    expect(testList.tail.value).toEqual(3);
    expect(testList.length).toEqual(2);
  });
  test('Remove from Tail', () => {
    const testList = new LinkedList();
    testList.insertAtTail(1);
    testList.insertAtTail(2);
    testList.insertAtTail(3);
    testList.removeFromTail();
    console.log('Remove from Tail: ', util.inspect(testList));
    expect(testList.head.value).toEqual(1);
    expect(testList.tail.value).toEqual(2);
    expect(testList.length).toEqual(2);
  });
});

