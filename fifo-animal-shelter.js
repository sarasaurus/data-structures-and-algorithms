'use strict';

class AnimalShelter () {
    constructor () {
        this.cats=[];
        this.dogs=[];
        this.all=[];
    }

    enQueue(animal){
        if(animal === 'cat') {
            this.cats.unshift()
            this.cats.unshift('cat');
            this.all.unshift('cat');
        } else if (animal === 'dog') {
            this.dogs.unshift('dog');
            this.all.unshift('dog');
        } return new Error ('must be either cat or dog');
    }
    deQueue(pref){
        if (pref === 'cat'){
            this.cats.pop();
            for(i = this.all.length; i>= 0; i --){
                if (this.all[i] === 'cat') {
                    this.all.splice(this.all[i]);
                }
            }
            return this;
        } else if (pref === 'dog') {
            this.dogs.pop();
            for(i = this.all.length; i>= 0; i --){
                if (this.all[i] === 'dog') {
                    this.all.splice(this.all[i]);
                }
            }
            return this;
        }
        let animalToRemove = this.all.pop();
        if (animalToRemove === 'cat') {
            this.cats.pop();
        } else if (animalToRemove === 'dogs') {
            this.dogs.pop();
        }
        throw new Error ('animal must be a dog or cat');

        // return this;
    }
}