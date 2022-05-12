/**
Prompt: 

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Examples:

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []


 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


//APPROACH: BFS (Breadth First Search)
//Other people's attempt - looks more clean
var levelOrder = function(root) {
    let res = [];
    if (!root) return res;
    let q = [root];
    
    while (q.length) {
        let nodesToProcess = q.length;
        let level = [];
        
        while (nodesToProcess) {
            let curr = q.shift();
            
            level.push(curr.val);
            
            if (curr.left) q.push(curr.left);
            
            if (curr.right) q.push(curr.right);
            
            nodesToProcess--;
        }
        
        res.push(level);
    }
    
    return res;
};

//My attempt 
 var levelOrder = function(root) {
    if (!root) return []; 
    let queue = [root]; 
    let list = []; 
    let level = 0; 
    while (queue.length > 0) {
        let sublist = []; 
        let levelLength = queue.length; 
        // console.log("levelLength: ", levelLength); 
        // console.log("queue (in while loop): ", queue)
        for (let i = 0; i < levelLength; ++i) {  //why we cannot use for...of... here??
            // console.log("i: ", i);
            // console.log("queue (top of for loop): ", queue)
            const node = queue.shift(); //Good discussion with interviewer: built-in method 
            // console.log("node: ", node)
            sublist.push(node.val); 
            if (node.left) queue.push(node.left); 
            if (node.right) queue.push(node.right); 
            // console.log("queue (end of for loop): ", queue)
        }
        // console.log("sublist: ", sublist)
        list.push(sublist);  
        // console.log("List: ", list)
        level++;
        // console.log("level: ", level)
    }
    // console.log("Final List: ", list)
    return list;
};

/*
Here are the results of the above console.logging: 

levelLength:  1
queue (in while loop):  [ [3,9,20,null,null,15,7] ]
i:  0
queue (top of for loop):  [ [3,9,20,null,null,15,7] ]
node:  [3,9,20,null,null,15,7]
queue (end of for loop):  [ [9], [20,15,7] ]
sublist:  [ 3 ]
List:  [ [ 3 ] ]
level:  1
levelLength:  2
queue (in while loop):  [ [9], [20,15,7] ]
i:  0
queue (top of for loop):  [ [9], [20,15,7] ]
node:  [9]
queue (end of for loop):  [ [20,15,7] ]
i:  1
queue (top of for loop):  [ [20,15,7] ]
node:  [20,15,7]
queue (end of for loop):  [ [15], [7] ]
sublist:  [ 9, 20 ]
List:  [ [ 3 ], [ 9, 20 ] ]
level:  2
levelLength:  2
queue (in while loop):  [ [15], [7] ]
i:  0
queue (top of for loop):  [ [15], [7] ]
node:  [15]
queue (end of for loop):  [ [7] ]
i:  1
queue (top of for loop):  [ [7] ]
node:  [7]
queue (end of for loop):  []
sublist:  [ 15, 7 ]
List:  [ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]
level:  3
Final List:  [ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]
*/