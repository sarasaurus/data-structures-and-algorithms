/**
 * given a bst with users and hours values at each node
 * and an input value, find the node with the closest users value and return that nodes 
 * hours value 
 * algo 
 */
class TreeNode {
  constructor(userstories, hours, left = null, right = null) {
    this.userstories = userstories;
    this.hours = hours;
    this.left = left;
    this.right = right;
  }
}
class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }
  insert(nodeToInsert) {
    if (!this.root) {
      this.root = nodeToInsert;
    } else {
      this._insert(this.root, nodeToInsert);
    }
  }

  _insert(rootNode, nodeToInsert) {
    if (nodeToInsert.userstories < rootNode.userstories) {
      if (!rootNode.left) {
        rootNode.left = nodeToInsert;
      } else {
        this._insert(rootNode.left, nodeToInsert);
      }
    } else if (!rootNode.right) {
      rootNode.right = nodeToInsert;
    } else {
      this._insert(rootNode.right, nodeToInsert);
    }
  }
}

const findClosestHours = (tree, target) => {
  let lowestDifference = Math.abs(target - tree.root.userstories);
  let current = tree.root;
  let currentDifference = null;
  let nodeToReturn = null;

  while (current) {
    // check root
    if (current.userstories === target) {
      return current.hours;
    } 
    // logic
    currentDifference = Math.abs(target - current.userstories);
    if (currentDifference <= lowestDifference) {
      lowestDifference = currentDifference;
      nodeToReturn = current;
    }
    // traversal
    if (target > current.userstories) {
      current = current.right; // ?
    }
    current = current.left;
  }
  return nodeToReturn.hours; // ?
};

const testTree = new BinarySearchTree();

const testa = new TreeNode(45, 67);
const testb = new TreeNode(23, 45);
const testc = new TreeNode(65, 67);
const testd = new TreeNode(300, 200);
const teste = new TreeNode(450, 500);
const testf = new TreeNode(145, 160);
const testg = new TreeNode(500, 700);
const testh = new TreeNode(70, 90);
const testi = new TreeNode(230, 500);
const testj = new TreeNode(80, 95);

testTree.insert(testd);
testTree.insert(testa);
testTree.insert(testb);
testTree.insert(testc);
testTree.insert(teste);
testTree.insert(testf);
testTree.insert(testg);
testTree.insert(testh);
testTree.insert(testi);
testTree.insert(testj);

console.log(testTree);

findClosestHours(testTree, 700); // ?

/**
 * Big O
 * Space: O(1) -- no recursion, no significant caching
 * Time: O(lgN) -- where n is the number of nodes
 */
