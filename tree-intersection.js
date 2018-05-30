findIntersection(a, b) {
  const map = new Map();
  _checkFunction (val) {
    if(!map.get(val)){
      map.set(val: true)
    }
  }
  a.traverse(this.root, _checkFunction);
  b.travers(this.root, _checkFunction);
  return map;
}


/// build hashmap based on treeA
// push all values in a, as keys with value true
// map.set(nodeVal: true);
// then traverse treeB and check if each nodeval is in the map
// if it is push to map/array/storage
// return the collection
// Hshmaps are greate for looking, counting, finding dups and keeping track of values THE ONLY time hashmaps not so great are to fine the 'closest value'

// be cautious with number: number-- becasue if you have 0: 0--> it would evaluate to false becasue 0 is false

// ES 6 set is like a map but values must be unique