/*
Given a String representation of a Binary Tree, write a function to determine the depth of the Binary Tree.

(0) represents a node
(00) represents a leaf node
((00)0) represents a tree where the root node has one left node and no right node
((00)0(00)) represents a tree with one left and one right node

Example input: (((00)0)0)
Answer: 2

The tree represented by the input:
       0
      /
    0
   /
 0

Guidance:
Any assumptions?
Other example inputs? (any invalid ones?)
What's a simpler problem to solve?


Edge case: 

input: ((00)0(00)0(00)0(00)0(00)0(00))
((00)(00)(00)(00)(00)0(0)(0)(00)(00)(00))


OPTION #1: 

- iterate through the string 
- if the char is equal to "(" and inc ++
- if the char is equal to ")" and dec--;
- Store the max depth and return max depth - 1; 

OPTIONT #2: 
- generate a binary tree - is it really necessary? 



(((00)0)0)
         ^
depth: 0
maxdepth: 3

return maxdepth - 1; //

input: 
binary: ((00)0(00))
binary: ((00)0)
binary: (((00)0)0)
n-ary: ((00)0(00)0(00)0(00)0(00)0(00))


   (00)0(00)0(00)0(00)0(00)0(00)
 (                              )
n-ary: ((00)(00)(00)(00)(00)0(0)(0)(00)(00)(00))

- if we detect (00), the next value should be a plain 0
-- if we detect 2+ (00), not a binary tree

2^n based on depth 


only apply to balanced binary tree 
depth max elements at each level 
0     2^0 = 1
1     2^1 = 2
2     2^2 = 4

BFS

Map (key (depth)- value(elements))

((00)0(00)0(00)0(00)0(00)0(00))
         ^

curr_level_nodes = 2
depth = 2; 
max depth = 2

what should the helper return? bool? true or false
what to return in the main function if the helper returns false?

*/

function isValidInput(input) {
  
}

function findDepth(input) {
  if (!isValidInput) return new Error('invalid input'); 
  let depth = 0;
  let maxDepth = 0; 
  
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      depth++;
    } else if (input[i] === ")") {
      depth--;
    }
    maxDepth = math.max(maxDepth, depth); 
  } 
   return maxDepth === 0 ? null : maxDepth - 1; 
}
