/*
Q. Given a binary tree and a target element's value, determine if the tree contains the target using depth first search (DFS).

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

function DFSTree(root, target) { 

}

// Test Cases
const tree1 = new TreeNode(3, new TreeNode(29, new TreeNode(2)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))
console.log(DFSTree(null, 1)) // false
console.log(DFSTree(tree1, 9)) // true
console.log(DFSTree(tree1, 1)) // false
console.log(DFSTree(tree1, 2)) // true
console.log(DFSTree(new TreeNode(1), 2)) // false


//----------------------------------------------------------------------------------

//Approaches:

/*

Stack - LIFO (Last In First Out)

|   3   |   entered as 1 2 3 | exited as 3 2 1 (1 is first in last out)
|   2   |
|___1___|

*/

//Recursive Approaches:

function DFSTree(root, target) { 
    if (!root) {
      // console.log("NO ROOT --> ROOT === NULL --> THE CHILD IS NULL"); 
      return false;
    }
    if (root.value === target) return true; 
    // console.log(root); 
    return DFSTree(root.left, target) || DFSTree(root.right, target); 
}

//Another Approach:

// function DFSTree(root, target) {
//   if (!root) return null; 
  
//   if (root.value === target) return true; 
  
//   let left = DFSTree(root.left, target), 
//       right = DFSTree(root.right, target); 
  
//   return !left && !right ? false : true;
//}


