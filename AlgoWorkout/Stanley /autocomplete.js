/**
The programming interface for a legacy motor controller accepts commands as binary strings of variable length. The console has a very primitive autocomplete autocorrect feature: given an incomplete command, it will display possible commands that has the incomplete command as a prefix. For example, if '1010' is a possible command and the user enters '10', the interface should return '1010' as a possible autocomplete result. 
Implement a data structure that will allow us to efficiently query possible autocomplete results given an incomplete input.



Possible commands = ['000', '1110', '01', '001', '110', '11']
Input -> Output
'0' → ['000', '01', '001']
'1' → ['1110', '110', '11']
'00' → ['000', '001']

0 -> [..]
1 -> [..]
01
10
11
001

possible: '00', '00
       root
     0       1
   0            1
  0                 1
0   1                0

TreeNode:
- value
- left (TreeNode)
- right (TreeNode)
- isCommand

build_tree_function:
- initialize our root tree node
- traverse each possible command
   - traverse the tree and insert the command node, setting the node command flag to true


-traverse based on input
    check node command flag at each node after the input 
    if it's true add it to an array of possible comands. 

input: 00

output: 
00001, 000
        
**/

// INCOMPLETE ATTEMPT TO THE PROBLEM 

class TreeNode {
    constructor(value = 0, left = null, right = null, isCommand = false) {
      this.value = value; 
      this.left = left; 
      this.right = right;
      this.isCommand = isCommand;
    }   
  }
  //'000'
  function buildTree(commands) {
    let root = new TreeNode(0); 
    for (let i = 0; i < commands.length; i++) {
        let single_command = command[i]; 
    }
    // return new TreeNode(); 
  }
  
//   new TreeNode()