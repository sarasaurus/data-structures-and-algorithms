## FIFO Animal Shelter
Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
__Implement the following methods:__
* enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
* dequeue(pref): returns either a dog or a cat. If pref, a string, is ‘cat’ return the longest-waiting cat. If pref is ‘dog’, return the longest-waiting dog. For anything else, return either a cat or a dog.

## Big O
- enqueue
    BigO of Space:
    BigO of Time:
- dequeue
    BigO of Space:
    BigO if Time:


## Solution
![white board image](./assets/fifo-animal-shelter1.jpg)
![white board image](./assets/fifo-animal-shelter2.jpg)


## Checklist
- [x] enque an animal adds an animal to the front of the animalShelter
- [x] deque an animal returns the longest waiting dog or cat
- [x] if no animal is specified, dequeue returns the longest waiting animal
- [x] write 3 tests using jest
- [x] ensure tests are passing
