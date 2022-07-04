/* 07-03-22
Q. Given a binary tree, find the lowest common ancestor of two given nodes in the tree and return its value.

A node can be its own ancestor.
Examples:

Given a binary tree:
                     10
                    /  \
                  5     12
                 / \    /    
                3   6  11
For node1: 3, node2: 6 // returns 5
For node1: 11, node2: 6 // returns 10
[execution time limit] 4 seconds (js)

[input] tree.integer root

[input] integer val1

[input] integer val2

[output] integer

lowest common ancestor

post order tree traversal

*/


//
// Binary trees are already defined with this interface:
class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  function solution(root, val1, val2) {
  
    function dfs(node) {
      // console.log("node: ", node); 
      //base case
      if (!node) {
        return null; 
      }
      if (node.value === val1 || node.value === val2) {
        return node; 
      }
      //recursive case
      let left = dfs(node.left); //5
      let right = dfs(node.right);
      // console.log("LEFT: ", left);
      // console.log("RIGHT: ", right);
  
      //merge case
      if (!left && !right) {//no val1 or val2 match found 
        return null; 
      }
      if (left && right) { //lowest common ancestor is found 
        // console.log('common ancestor here: ', node); 
        return node; 
      }
      return left || right; //if one of them is found, return the one with the match 
      //if left is null, return right, else return left
    }
    return dfs(root).value; 
  }
  
  const tree1 = new TreeNode(10, 
                    new TreeNode(5, 
                        new TreeNode(3),
                        new TreeNode(6)), 
                    new TreeNode(12, 
                        new TreeNode(11), 
                        null))
  console.log(solution(tree1, 3, 6)); //5
