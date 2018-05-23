'use strict';

export default class KAaryNode {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.level = 0;
    // this.children = {}; this is for homework
  }
  appendChild(value) {
    const nodeToAppend = new KAaryNode(value);
    this.children.push(nodeToAppend);
    this.level += 1;
  }
}
