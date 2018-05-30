## Tree Intersection
Write a function called tree_intersection that takes two binary tree parameters.
Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees.
Can assume that both the trees are unique.

## Example
given tree A: 
_______________1\_\_\_\_  
____________ 2 __ 3\_\_\_\_    
__________4__5 ___\_6\_\_\_\_\_\_
  

given tree B:  
_______________7\_\_\_\_  
_____________ 2 __ 3\_\_\_\_    
__________9__10 __\___6\_\_\_\_\_\_

the function should return: [2, 3, 6]  



## BigO
- _Time:_ O of N, where N is the number of nodes in the largest tree
- _Space:_ O of N, where N is the height of the largest tree / the number of intersections whichever is greater
## Solution
![white board image](./assets/tree-intersection.JPG)


## Checklist
- [ ] clean reusable code
- [ ] write 3 tests using jest
- [ ] ensure tests are passing
- [ ] takes a lengthy string as an argument

## Stretch Goals
- [ ] Presume you are working with BSTs. How can you improve the performance of your algorithm?



