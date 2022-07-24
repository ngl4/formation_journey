
/* WITH BRIAN 
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

()

["(00)", ]

depth(key): number of nodes (value)

key(unique)
{
  2: 4
}

Max elements at each depth level 
0     2^0 = 1
1     2^1 = 2
2     2^2 = 4

for each n iteration, we do a d-time operation

n = length of string
d = depth
i
depth = 1
2 nodes

(0(00)0)
i
((0)


(0(0(0(0))))
 ^         

Edge case: 

input: ((00)0(00)0(00)0(00)0(00)0(00))
((00)(00)(00)(00)(00)0(0)(0)(00)(00)(00))

(0(00))

too many/few nodes? 
  for each node, check it has 2 children
correct parens?
  depth should be 0 at end

Level - By - Level
Max elements at each depth level 
0     2^0 = 1
1     2^1 = 2
2     2^2 = 4

As long as the nodes that we found are within the binary tree level limit, keep going 
until we reach the end of the input, return true, else return false. 

Depth: 1

Max elements at each level (max = 2^(Depth-1)) : 1

Level nodes: 



*/





// function isValidInput(input) {
//   //
// }

// function findDepth(input) {
//   if (!isValidInput) return new Error('invalid input'); 
//   let depth = 0;
//   let maxDepth = 0; 
  
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === "(") {
//       depth++;
//     } else if (input[i] === ")") {
//       depth--;
//     }
//     maxDepth = math.max(maxDepth, depth); 
//   } 
//    return maxDepth === 0 ? null : maxDepth - 1; 
// }

/* WITH JIYOON
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
