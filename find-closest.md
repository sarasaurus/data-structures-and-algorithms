## find closest value in a binary search tree
signature: tree and value

## algo
check each node in tree agains the value
store the difference in a cache, maybe a map
return the node where the difference is smallest

## another way
using tree structure 
inorder traversal-- DUH
keep reference to the prev value, curr val and next value
return node where difference is the smallest

## vin way:
create closest so far:
start at root, is it closest? 
closest = root.val;
is val biger or smaller-- if bigger then go right.


## pseudo
// input <- tree and search value
// output <- closest node
difference <- value - node.val


