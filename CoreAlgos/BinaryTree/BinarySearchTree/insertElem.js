/*
Q. Given a binary search tree and a target element's value, insert the target in the appropriate position.

Examples:
• Given a binary search tree:
              6
            /   \
           3     8
          / \ 
         2   4

• For target: 7 // returns:
              6
            /   \
           3     8
          / \    /
         2   4  7
        /     \
       1       5

*/
class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function arrayifyTree(root) {
    if (!root) { return [] }
    var queue = []
    var array = []
    queue.push(root)
    while (queue.length !== 0) {
        var node = queue.shift()
        array.push(node.value)
        if (node.left) { queue.push(node.left) }
        if (node.right) { queue.push(node.right) }
    }
    return array
}

function insertBST(root, target) {
}

// Test Cases
var tree = new TreeNode(6, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(8))

insertBST(tree, 7)
console.log(arrayifyTree(tree), [6, 3, 8, 2, 4, 7])
insertBST(tree, 5)
console.log(arrayifyTree(tree), [6, 3, 8, 2, 4, 7, 5])
insertBST(tree, 1)
console.log(arrayifyTree(tree), [6, 3, 8, 2, 4, 7, 1, 5])
var tree2 = insertBST(null, 1)
console.log(tree2.value, 1)

//----------------------------------------------------------------------------------

//Approaches:

//Time: O(logN) time

function insertBST(root, target) {
  if(!root) return new TreeNode(target); 
  let curr = root; 
  while(curr) {
    if (target < curr.value) { //if the target is less than the parent node 
      if (curr.left) { //Go to the left side, if there is a left node 
        curr = curr.left; //Go to the next left node 
      }else {
        curr.left = new TreeNode(target); //if no left node, add the new treenode with the target value 
        break; //break out of the loop, there is no point to keep interating through the tree once the target value node is inserted 
      }
    }
    else { //if the target is larger than the parent node
      if (curr.right) { //Go to the right side, if there is a right node 
        curr = curr.right; //Go to the next right node 
      }else {
        curr.right = new TreeNode(target); //if no right node, add the new treenode with the target value 
        break; //break out of the loop, there is no point to keep interating through the tree once the target value node is inserted
      }     
    }
  }
  return root;
}