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
 * @return {string[]}
 * 
 * on 06/13/22 This is my first time working through this tree problem without looking at the solution. 
 * 
 * There are 2 approaches (recursive or iterative) to this problem, I choose to use recursion to solve it. 
 
        1
        
    2       3
    
 4     5
 
 pre-order traversal DFS recursion
 
 */
 var binaryTreePaths = function(root) {
    let res = []; 
    function dfs(str, node) {
        //base case
        if (!node) return null; 
        
        //recursive case
        //root
        if (!node.left && !node.right) { //leaf node
             str += node.val
             res.push(str);
        }else {
           str += node.val + "->" 
        }
        //left
        dfs(str, node.left); 
        //right
        dfs(str, node.right); 
    }
    dfs("", root); 
    return res;  
};