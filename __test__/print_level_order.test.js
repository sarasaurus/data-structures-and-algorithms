'use strict';
import KAryNode from '../lib/k-ary-node';
import KAryTree from'../lib/k-ary-tree';
import printLevelOrder from '../print_level_order';

describe('Testing print level order ', () => {
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
      expect(printLevelOrder(kAryTree)).toEqual('1\n234\n567\n8\n');
    });
  });
});