
## Quick Sort
Write a function that accepts an array of integers, and returns an array sorted by a recursive quicksort algorithm.

## Example 
mergesort([4, 7, 2, 1, 0, 3]);
returns [0, 1, 2, 3, 4, 7]

## Solution
![white board image](./assets/quicksort.JPG)


## Checklist
- [x] clean reusable code
- [x] write 3 tests using jest
- [x] ensure tests are passing

## Big O
Space: in place, but number of recursions.... so BigO(lgn);
Time: Avg: BigO(nlogn) -- ideally splitted input in half each time;  worst case: BigO(n2) -- poorly picked pivot



