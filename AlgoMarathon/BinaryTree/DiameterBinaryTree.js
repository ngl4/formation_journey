/*
Self-practice Attempt #3

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.


*/

var diameterOfBinaryTree = function(root) {
    let diameter = 0; 
    
    function dfs(root) {
        if (!root) return 0; 
        
        const left = dfs(root.left);
        const right = dfs(root.right);
        console.log(left, right)
        
        diameter = Math.max(diameter, left + right); 
        console.log(diameter);
        
        return 1 + Math.max(left, right); //<-- making mistake at here!! 
    }
    dfs(root); 
    return diameter; 
}