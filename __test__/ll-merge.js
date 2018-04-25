'use strict';

const LinkedList = require('../ll-merge');

describe('ll-merge.js', () => {
    beforeAll(
        const testListA = new LinkedList();
        const testListB = new LinkedList();
        const testListC = new LinkedList();
        testListA.append(1);
        testListA.append(3);
        testListA.append(2);
       
        testListB.append(5);
        testListB.append(9);
        testListB.append(4);
       
        testListB.append(11);
        testListB.append(12);
    );

    test('list A and list are Equal in Length', () => {
      console.log('testlist A!', testListA);
      expect(mergeLists(testListA, testListB).head.value.toEqual(1);
      expect(mergeLists(testListA, testListB).head.next.value.toEqual(5);
    });
    test('List A is shorter', () => {
      expect(mergeLists(testListC, testListB).head.value.toEqual(11);
      expect(mergeLists(testListC, testListB).head.next.next.value.toEqual(12);
      expect(mergeLists(testListC, testListB).head.next.next.next.value.toEqual(9);
      expect(mergeLists(testListC, testListB).head.next.next.next.value.toEqual(4);
    });
    test('List B is shorter', () => {
        expect(mergeLists(testListC, testListB).head.value.toEqual(1);
        expect(mergeLists(testListC, testListB).head.next.value.toEqual(11);
        expect(mergeLists(testListC, testListB).head.next.next.next.value.toEqual(12);
        expect(mergeLists(testListC, testListB).head.next.next.next.next.value.toEqual(2);
    });
  });