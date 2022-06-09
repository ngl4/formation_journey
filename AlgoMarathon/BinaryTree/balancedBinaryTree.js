//Problem: https://leetcode.com/problems/balanced-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */




//Attempt # 1 
//(Failed, but able to identify quickly that this can be solved with Top Down recursive approach, but failed implementing it)

 var isBalanced = function(root) {
    if (!root) return true; 
    function height(root) {
        if (!root) return -1; 
        return 1 + Math.max(height(root.left), height(root.right)); 
    }
    if (Math.abs(height(root.left) - height(root.right)) > 1) return false; 
    return isBalanced(root.left) && isBalanced(root.right); 
};