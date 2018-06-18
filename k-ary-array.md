## given a k -ary tree convert it to an array and then construct the tree from the array

___________1
_______2__3__4
____5_6_7__9___10__11
__21_34
should return 
1 234 567 9 10,11 21,34

##algo
will need to traverse the tree level by level
pushing children to the que, each time child are push they must somehow be connected to parent node

happy path
would be a full tree where parent didn't matter just every node 3 kids boom

not a full tree -- can reference parent

##pseudo

input <- kary tree
output<- array of nodes
input< array
output<-kary tree
expect kary tree 1 to equal karytree 2

array <-- an array of objects?
create a queue <- []
enque root
current <- que deque

while que is not empty

for each of currents children 
parent <-- current
enque child into que
node <- parent: current, child: child;
push node into array




