/*
Find Element in a Binary Tree using BFS

Q. Given a binary tree and a target element's value, determine if the tree contains the target using breadth first search (BFS).

Examples:
• Given a binary tree:
                 3
                / \
              29   4
              /     \
             2       2
                    /
                   9
• For target: 1 // returns False
• For target: 2 // returns True
*/

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function BFSTree(root, target) { 

}

// Test Cases
const tree1 = new TreeNode(3, new TreeNode(29, new TreeNode(5)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))
console.log(BFSTree(null, 1)) // false
console.log(BFSTree(tree1, 9)) // true
console.log(BFSTree(tree1, 1)) // false
console.log(BFSTree(tree1, 2)) // true
console.log(BFSTree(new TreeNode(1), 2)) // false

//----------------------------------------------------------------------------------

//Approaches:

/*
Using Queue (FIFO) - First in First out


    Queue
   ________
<-    <-     <-
   ________ 

*/

//Time: O(n) 

function BFSTree(root, target) { 
    // console.log(root, target); 
    let queue = root ? [root] : [];
    while (queue.length > 0) {
      // console.log("BEFORE QUEUE: ", queue);
      let curr = queue.shift(); //remove whatever comes first in the queue
      // console.log(curr); 
      // console.log("AFTER QUEUE: ", queue); 
      if (curr.value === target) return true; 
      if (curr.left) queue.push(curr.left); 
      if (curr.right) queue.push(curr.right); 
    }  
    return false
}