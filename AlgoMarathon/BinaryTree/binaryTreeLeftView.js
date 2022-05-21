/*
Given a binary tree t, return its left view. To understand what the left view of the tree means, imagine yourself standing on the left side of the tree: The left view will be all the vertices that you can see. For example, imagine the following tree:

--->       1          
--->     /   \
--->    2     3       
--->     \     \
--->      5     4
--->            /
--->          6        
In this case, you can see vertices 1, 2, 5, and 6.

Given binary tree t, return the values of the vertices in the left view, ordered from top to bottom.

Input:
root:
{
    "value": 1,
    "left": null,
    "right": null
}
Expected Output:
[1]

Input:
root:
{
    "value": 1,
    "left": {
        "value": 2,
        "left": null,
        "right": null
    },
    "right": null
}
Expected Output:
[1, 2]


Input:
root:
{
    "value": 1,
    "left": null,
    "right": {
        "value": 2,
        "left": null,
        "right": null
    }
}
Expected Output:
[1, 2]


*/


//ATTEMPT#1: FAILED 
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(root) {
    let output = []; 
    let maxDepth = -Infinity; 
    let depth = 1; 
    function DFS(node) {
        if (!node) return null; 
        if (node && depth === 1) output.push(node.value); 
        if (node && depth > output.length) {
            output.push(node.value); 
            depth++; 
        }
        solution(node.left)
        solution(node.right)       
    }
    DFS(root);
    console.log(output); 
    return output; 
}
