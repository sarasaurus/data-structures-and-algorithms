## Queue with Stacks -- enqueue and dequeue
Implement the following methods for the Queue class:
__enqueue(value)__ which inserts value into the Queue using a first-in, first-out approach.
__dequeue()__ which extracts a value from the Queue using a first-in, first-out approach.

You have access to 2 Stack instances with push and pop methods.

## Example 
__enqueue__
given: _[10]->[15]->[20]_	__Queue.enqueue(5)__ should return: [5]->[10]->[15]->[20]
given: _empty Queue_ __Queue.enqueue(5)__ should return:	[5]

__dequeue()__


given: _[5]->[10]->[15]->[20]_	__Queueue.dequeue()__ should return: 20	and Queue should be: [5]->[10]->[15])
given: _[5]->[10]->[15]_ __Queueue.dequeue()__ should return:	15	and Queue should be: [5]->[10]

## Solution
![white board image](./assets/queue-with-stacks.jpg)


## Checklist
- [] clean reusable code
- [] write 3 tests using jest
- [] ensure tests are passing
- 


