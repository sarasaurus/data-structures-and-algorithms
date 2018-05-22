'use strict';

describe('Testing K-Ary-Tree methods', () => {
  describe('testing toString method', () => {

    test('value should be 12364578', () => {
      const one = new KAryNode(1);
      one.appendChild(2);
      one.appendChild(3);
      one.appendChild(4);
      
      one.children[1].appendChild(5);
      one.children[1].appendChild(6);
      one.children[1].appendChild(7);
      
      one.children[1].children[1].appendChild(8);
      
      const kAryTree = new KAryTree(one);
      expect(kAryTree.toString()).toEqual('1\n2\n3\n4\n5\n6\n7\n8\n');
    });
  });
});