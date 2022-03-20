/*
Q. Given a binary tree, find the element with the largest value.

Example:
• Given a binary tree:
                 1
                / \
               7   3
              / \
             4   5
returns 7
*/

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function findTreeMax(root) {

}

// Test Cases
console.log(findTreeMax(null)) // null
console.log(findTreeMax(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
console.log(findTreeMax(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 29
console.log(findTreeMax(new TreeNode(1))) // 1

//----------------------------------------------------------------------------------

//Approaches:

function findTreeMax(root) {
  //iterative (BFS approach)
  if (!root) return null; 
  let max = root.value; 
  let queue = [root]; 
  while (queue.length > 0) {
    let currentNode = queue.shift(); 
    max = Math.max(max, currentNode.value); 
    if (currentNode.left) queue.push(currentNode.left); 
    if (currentNode.right) queue.push(currentNode.right); 
  }
  return max; 
  
  //recursive 
  // if (!root) return null 
  // return Math.max(root.value, findTreeMax(root.left) || -Infinity, findTreeMax(root.right) || -Infinity); 
}