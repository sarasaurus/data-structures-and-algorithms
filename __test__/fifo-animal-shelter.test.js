'use strict';

const animalShelter = require('../fifo-animal-shelter');

describe('FIFO Animal Shelter', () => {
  describe('# enqueue', () => {
    test('adding dogs and cats to the Shelter', () => {
      const testShelter = new animalShelter();
      testShelter.enqueue('cat');
      testShelter.enqueue('dog');
      testShelter.enqueue('cat');
      testShelter.enqueue('dog');
      expect(testShelter.cats[0]).toEqual('cat');
      expect(testShelter.dogs[0]).toEqual('dog');
      expect(testShelter.dogs).toHaveLength(2);
      expect(testShelter.all).toEqual(['dog', 'cat', 'dog', 'cat']);
    });  
  });

  describe('#dequeue', () => {
    test('taking dogs and cats out of the shelter', () => {
      const testShelter = new animalShelter();
      testShelter.enqueue('cat');
      testShelter.enqueue('dog');
      testShelter.enqueue('cat');
      testShelter.enqueue('dog');
      testShelter.dequeue('cat');
      // testShelter.enqueue('dog');
      // testShelter.enqueue('cat');
      // testShelter.enqueue('dog');
      expect(testShelter.cats).toHaveLength(1);
      testShelter.dequeue('dog');
      expect(testShelter.dogs).toHaveLength(1);
    });
    test('taking unspecified out of shelter', () => {
      const testShelter = new animalShelter();
      testShelter.enqueue('cat');
      testShelter.enqueue('dog');
      testShelter.enqueue('cat');
      testShelter.enqueue('dog');
      expect(testShelter.dequeue()).toEqual('cat');
      expect(testShelter.cats).toHaveLength(1);
      expect(testShelter.all).toHaveLength(3);
      expect(testShelter.dequeue()).toEqual('dog');
      expect(testShelter.all).toHaveLength(2);
    });
  });
});
