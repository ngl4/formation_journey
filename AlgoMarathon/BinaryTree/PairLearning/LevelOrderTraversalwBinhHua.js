/*
Formation Problem Prompt 

Print the value of each node in a level, followed by a new line character at the end of each level

Function Signature: 
func printByLevel(node: Node)

Input:
   3
 2  4
1    5

Output:
3 
24
15

Input: empty 
Output: null

Input: 
1

Output: 
1

Approaches: 

BFS (Breadth First Search)
Time: O(n) n= the amount of nodes 
Space: O(w) w= the max width of the tree 


Iterative or Recursive? BOTH!! 

Recursive stack is more expensive (due to taking up more memory and may run out of stack memory), but so much cleaner in code 


Pseudocode: 

Recusive:

print root & new line print root
call Recusive method on left child 
call Recusive method on right child 


   3
 2  4
1    5

queue: [4, 1], [1, 2]
length: 2
node: 3



Iterative (really interesting approach idea!!! ~ being able to determine the specific node and at what level): 
create queue, add root, 0 to it, prev level
while loop (queue.length>0)
  shift() current node 
  print current node 
  if check prev level vs current node level to determin when to print the new line 
  if it has a left node, push it to the queue, current node level +1
  if it has a right node, push it ot the queue, current node level +1
  prev level = current node level
[2, 1], [5, 1].  prevlvl = 0 
  3
2.  5
*/


function printByLevel(root){
    let currentLevel= 0; 
    let prevLevel = -1; 
    let q = root? [[root, currentLevel]] : [[]]; 
    // console.log("q " + q);
    
    while(q.length > 0){
      let obj = q.shift();
      // console.log("obj " + obj);
      let currentLevel = obj[1];
      let currentNode = obj[0]; 
      console.log(currentNode.value); 
      
      console.log("current level %s, prevlevel %s", currentLevel, prevLevel);
      if(currentLevel > prevLevel){
        console.log('<br />');
      }
  
      if(currentNode.left){
        q.push([currentNode.left, currentLevel+1]);
      }
      if(currentNode.right){
        q.push([currentNode.right, currentLevel+1]);
      }
  
      prevLevel = currentLevel;
    
    }
  
  }
  
  
  
  // const tree1 = new TreeNode();
  // const tree2 = new TreeNode(3);
  const tree3 = new TreeNode(3, new TreeNode(2), new TreeNode(5));
  // const tree4 = new TreeNode(3, new TreeNode(2), new TreeNode(5));
  // printByLevel(tree1); 
  // printByLevel(tree2); 
  printByLevel(tree3); 
  
  
  
  
  /*
  Similar Problem on Leetcode 
  
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
  */
  
  
  
  
  