/*
Validate a Binary Search Tree 

Binary Search Tree - all the left (+ child) nodes should be smaller than the root node,
and all the right (+ child) nodes should be larger than the root node 

              6
            /   \
           3     8
          / \ 
         2   4


*/

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function validateBST(tree) {

}

// Test Cases
var tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3))
var tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
var tree3 = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))
console.log(validateBST(null)) // true
console.log(validateBST(tree1)) // true
console.log(validateBST(tree2)) // false
console.log(validateBST(tree3)) // true
console.log(validateBST(new TreeNode())) // true

//----------------------------------------------------------------------------------

//Approaches:

//Recursive Approach: 

function validateBST(tree, min = -Infinity, max = Infinity) {
    if (!tree) return true; 
    // console.log(tree); 
    // console.log("Minimum: ", min);
    // console.log("Maximum: ", max);
    if (tree.value <= min || tree.value > max) return false;
    return validateBST(tree.left, min, tree.value) && validateBST(tree.right, tree.value, max); 
}

//Another approach (but pretty confusing in the last line in the function)
// function solution(root, min = -Infinity, max = Infinity) {
//     if (!root) return null; 
//     if (root.value <= min || root.value > max) return false; 
//     let left = solution(root.left, min, root.value), 
//         right = solution(root.right, root.value, max); 
//     return typeof left === 'undefined' && typeof right === 'undefined' ? true : left === false || right === false ? false : true; 
// }


/*
Another Approach - based on a fellow asked in Mattermost 
Creating a header function. 
*/
function validate_bst(node) {
    return helper(node, -Infinity, Infinity); 
  }
  
  function helper(node, min, max) {
    if (!node) return 1; 
    if (node.value <= min || node.value > max) return 2; 
  
    const left = helper(node.left, min, node.value);
    const right = helper(node.right, node.value, max); 
  
    if (left === 2) {
      return left; 
    }else {
      return right;
    }
    // Same expression as the above if statement, but in the ternary expression (below): 
    // return left === 2 ? left : right === 2 ? right : left; 
  }
  
  const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
  console.log(validate_bst(tree2));