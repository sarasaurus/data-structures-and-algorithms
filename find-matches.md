## Find Matches
Write a function that takes a k-ary tree with non-unique values and a target value.
Return a collection of all the nodes from within the tree that match the provided value.
Avoid utilizing any of the built-in methods available to your language.

## Examples
1. given a value: 3  
given a tree:  
_______________1\_\_\_\_  
____________ 3 __ 3\_\_\_\_    
__________4__5 __\_6\_\_\_\_\_\_  
the function should return:   
a linked list with length 2, and node.values containing the nodes from the given tree  

2. given a value: B  
given a tree:  
________________B\_\_\_\_  
_____________ 2 __ 3\_\_\_\_    
__________4__B __\___B\_\_\_\_\_\_  
the function should return:   
a linked list with length 3, and node.values containing the nodes from the given tree  
3.  given a value: 7  
given a tree:  
________________B\_\_\_\_  
_____________ 2 __ 3\_\_\_\_    
__________4__B __\___B\_\_\_\_\_\_  
the function should return:   
a linked list with length = null

## Time and Space Complexity Analysis
Assuming a queue implemented in the most efficient manner (using a linked list)
And the collection to return implimented as linked-list which inserts nodes in O(1) time and space

- _Time:_ __BigO (N)__, where N is the number of nodes in the tree
- _Space:_ __BigO (N)__, where N represents the cost of traversal and so is the width or height of the tree, whichever is more significant, 

## Solution
![white board image](./assets/find-matches.JPG)


## Checklist
- [x] clean reusable code
- [x] write 3 tests using jest
- [x] ensure tests are passing
- [x] takes a tree as an argument


