'use strict';

const LinkedList = require('./linked-list');
// here Linked List is synonymous with 'node'!!!!!!
module.exports = class HashMap {
  constructor(capacity = 20) {
    this._capacity = capacity;
    this._buckets = new Array(capacity);
  }

  _generateHash(key) {  //eslint-disable-line
    // this is not a bullet proof hashing algorithm, just demonstrating the basic concept
    if (typeof key !== 'string') {
      throw new TypeError('HASHMAP ERROR: key should be string');
    }
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this._capacity;

    // for a capacity of 20 we get a number between 0 and 19
    // when using modulo-- x % y returns a number between 0 and (y-1)--- its the 'remainder'-- but the pattern to see is that it returns a number between 0 and y-1
    // this if our length of array = capacity and we modulo off of capacity, we know for sure we have that index value in our array

    // this is not a great hash because it doesn't really protect against collisions
  }
  set(key, htValue) {
    const hash = this._generateHash(key);
    // if no record exists in the hashmap-- create a new record
    if (!this._buckets[hash]) {
      this._buckets[hash] = new LinkedList({ key, htValue }); // key=key: value=key, backgwards---> htVAlu=key: ntValue=value we are desctructuring!
      return this;
    }

    this._buckets[hash].append(new LinkedList({ key, htValue }));
    return this;
  }
  get(key) {
    const hash = this._generateHash(key);
    const error = new Error(`no entry for ${key}`);

    if(! this._buckets[hash]) {
      throw error;
    }
    // here find is a method of the linked list class that judy is importing
    const node = this._buckets[hash].find(foundNode=> foundNode.value.key === key);

    if (node) return node.value.htValue; // this is digging down in to the node to get the value your want... like someone's name
    return error;
  }

  delete(key) {
    const hash = this._generateHash(key);
    const error = new Error(`no entry for ${key}`);

    if(! this._buckets[hash]) {
      throw error; // this allows us to use jest to explicity look for expect toThrow
      // whoever calls function and triggers an error-- they cannot ignore throw
      // return is a little more polite-- can be ignored
    }
    // here find is a method of the linked list class that judy is importing
    const node = this._buckets[hash].find(foundNode=> foundNode.value.key === key);

    if (node) {
      console.log('something here')
      return this._buckets[hash] = this._buckets[hash].remove(node);
    }
    return error;
  }
};

