/*
Path Sum 

Pre-order approach (root left right)
Adding up all the nodes at each path and return the true or false if a path is found 

OR 

post-order approach (left right root)

*/
var hasPathSum = function(root, targetSum) {
    //Iterative Approach:


    
    //Recursive Approach: 
    //Time: O(N) n = number of nodes (visit each node exactly once)
    //Space: O(h) h= the height of the tree (the recursive call would occur h times, the storage to keep the call stack would be O(h) for worst case scenario - tree is unbalanced)
    //O(logh) - when the tree is completely balanced, the recursive call would occur log h times 
//      if (!root) {
//         return false;
//      }
    
//     targetSum -= root.val; 
//     if (!root.left && !root.right) {
//         return targetSum === 0; 
//     }
//     return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum); 
};