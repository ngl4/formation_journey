/*

Problem Statement

You are given a binary tree that is represented by a string. Nodes have no value. A 0 represents null and a (00) represents a leaf node. ((00)0) would represent a tree where the root has one left node and no right node. ((00)(00)) represents a tree with one left and one right node.
Given this representation of the tree, return an Int representing the depth of the tree.


((00)(00)) => ( defines root

(        )
  (00) 0

       X
      /
     00

((00)(00))

Examples
(((00)0)0) represents this tree:
       X
     /
   X
  /
00

(((00)0)0)
(         )
  (    )0
   (00)0


(((00)(00))(00))  
                ^
pseudocode - iterative, counting parens
iterate thru string, 
  depth -> increase for the open parathesis
  when we encounter a closing, reduce the depth.
  math.max(depth, current_depth)


This would return 2.
Function Signature
function depth(tree: String) -> Int

*/

function depth(tree)
{
  let maxDepth = -Infinity;
  let current_depth = 0;
  for (const t of tree) {
    // console.log(t); 
    if(t === '(') {
      current_depth++;
      // console.log(current_depth); 
    } else if (t === ')') {
      current_depth--;
    }
    maxDepth = Math.max(current_depth, maxDepth)
  }
  return maxDepth - 1;
}
/*

*/
console.log(depth('((00)0)')) // 1
console.log(depth('()')) // 0
console.log(depth('((00)(00))')) // 1
console.log(depth('(((00)(00))(00))')) //2
console.log(depth('(0)')) // 0