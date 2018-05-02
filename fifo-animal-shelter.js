'use strict';

module.exports = class AnimalShelter {
  constructor() {
    this.cats = [];
    this.dogs = [];
    this.all = [];
  }

  enqueue(animal) {
    if (animal === 'cat') {
      this.cats.unshift();
      this.cats.unshift('cat');
      this.all.unshift('cat');
    } else if (animal === 'dog') {
      this.dogs.unshift('dog');
      this.all.unshift('dog');
    } return new Error('must be either cat or dog');
  }
  dequeue(pref) {  
    if (pref === 'cat') {
      let cat = null;
      cat = this.cats.pop();
      for (let i = this.all.length; i >= 0; i--) {
        if (this.all[i] === 'cat') {
          this.all.splice(this.all[i]);
        }
      }
      return cat;
    } else if (pref === 'dog') {
      let dog = null;
      dog = this.dogs.pop();
      for (let i = this.all.length; i >= 0; i--) {
        if (this.all[i] === 'dog') {
          this.all.splice(this.all[i]);
        }
      }
      return dog;
    }
    const animalToRemove = this.all.pop();
    if (animalToRemove === 'cat') {
      this.cats.pop();
    } else if (animalToRemove === 'dogs') {
      this.dogs.pop();
    }
    return animalToRemove;
  }
};
