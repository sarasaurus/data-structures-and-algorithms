'use strict';

import KAryNode from '../lib/k-ary-node';
import KAryTree from '../lib/k-ary-tree';
import findMatches from '../find-matches';

describe('Testing find matches ', () => {
  describe('testing function with numbers and duplicate matches', () => {
    test('return should have 3 items', () => {
      const one = new KAryNode(1);
      one.appendChild(2);
      one.appendChild(3);
      one.appendChild(3);
      
      one.children[1].appendChild(5);
      one.children[1].appendChild(6);
      one.children[1].appendChild(3);
      
      one.children[1].children[1].appendChild(8);
      
      const kAryTree = new KAryTree(one);
      console.log('whats up', findMatches(kAryTree, 3));
      expect(findMatches(kAryTree, 3).length).toEqual(3);
    });
  });
  describe('testing with strings', () => {
    test('return should have 1 items', () => {
      const one = new KAryNode(1);
      one.appendChild('A');
      one.appendChild('a');
      one.appendChild('A');
      
      one.children[1].appendChild('b');
      one.children[1].appendChild('b');
      one.children[1].appendChild('B');
      
      one.children[1].children[1].appendChild('C');
      
      const kAryTree = new KAryTree(one);
      expect(findMatches(kAryTree, 'a').length).toEqual(1);
    });
  });
  describe('testing mixed value tree with no match', () => {
    test('return should have 1 items', () => {
      const one = new KAryNode(1);
      one.appendChild('A');
      one.appendChild(3);
      one.appendChild('A');
      one.children[1].appendChild('b');
      one.children[1].appendChild(5);
      one.children[1].appendChild('B');
      one.children[1].children[1].appendChild('C');
      const kAryTree = new KAryTree(one);
      expect(findMatches(kAryTree, 'NOMATCH').length).toEqual(null);
    });
  });
});