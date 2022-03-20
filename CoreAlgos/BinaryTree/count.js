/*
# Q. Given a binary tree, count the number of elements in the tree. (RECURSION)

# Example:
# • Given a binary tree:
#                  1
#                 / \
#                7   3
#               / \
#              4   5
# // returns 5
*/

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}
       
function countTree(root) {
}

// Test Cases
console.log(countTree(null)) // 0
console.log(countTree(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
console.log(countTree(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 6
console.log(countTree(new TreeNode())) // 1


//----------------------------------------------------------------------------------

//Approaches:

function countTree(root) {
  //iterative (DFS approach)
  if (!root) return 0; 
  let stack = root ? [root] : []; 
  let counter = 0;
  while (stack.length) {
    counter++;
    let node = stack.pop(); //remove the most recent entered node 
    if (node.left) stack.push(node.left); 
    if (node.right) stack.push(node.right); 
  }
  return counter;
   // recursive 
   // if (!root) return 0; 
   // return 1 + countTree(root.right) + countTree(root.left); 
}

// Test Cases
// console.log(countTree(null)) // 0
// console.log(countTree(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
// console.log(countTree(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 6
// console.log(countTree(new TreeNode())) // 1