'use strict';

import util from 'util';

import LinkedList from '../lib/linked-list';
import LinkedlistMext from '../lib/ll-mext';

import mextNext from '../ll-mext-next';

const testList = new LinkedList();
const values = [1, 2, 3];
values.map(ele => testList.insertAtHead(ele));
const testListB = new LinkedlistMext();
const mextValues = ['a', 'b', 'c', 'd'];
mextValues.map(ele => testListB.insertAtHead(ele));
testList.insertAtHead(testListB);
testList.insertAtHead(5);
testList.insertAtHead(6);

console.log('LIST BEFORE', util.inspect(testList, { showHidden: true, depth: null }));

describe('testing linked list mext next merge', () => {
  test('expect there to be no more .mext values', ()=>{
    mextNext(testList);
    console.log('LIST AFTER', util.inspect(testList, { showHidden: true, depth: null }));
    expect(testList.head.next.next.value).toEqual('d');
    expect(testList.head.next.next.next.value).toEqual('c');
  });
});
