/*
Given a binary tree, return the deepest node (furthest away child).

Examples
.       a
.      /  \
.    b    c
.  /
.d.          
returns d

equal depth in both right and left - return one of them 


Depth (global variable)


Approach#1 (Better than Approach#2): DFS + Natural Stack (Depth = height of the stack) (top to down)
Time: O(n) n = num of nodes in the tree
Space: O(h) h = height of the tree (worst case) | best case: O(logh) for balanced tree

DFS Approach
create a Stack, greatestLength, deepestNode
currentNode = root
push the root into the stack
loop while stack != null 
  if there is a left node, push to the stack, currentNode = LeftNode
  stack.length > greatestLength , 
    greatestLength = stack.length
    update deepestNode to currentNode value
else if there is a right, push to the stack, currentNode = RightNode



Approach#2 (as the number of nodes increase, will quickly run out of memory): DFS + Recursive Stack (Depth = passed from function to function) callstacks
Time: O(n)
Space: O(h)



Alternative Solution: 

Approach #3: BFS (width - Left to right)
Queue (FIFO)
The deepest node is the last node 
Time: O(n) n = num of nodes in the tree
Space: O(w)

/*
  BFS Approach

  1. initialize a queue
  2. loop while queue.length > 0
  3. push left & right nodes into queue if they exist
  4. return the last node queue[queue.length - 1]

*/


// Function Signature
class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
      this.value = value;
      this.left = leftChild;
      this.right = rightChild;
    }
  }
  
  
  // function deepestNode(root)
  
  
  
  function BFS(root){
    const q = root ? [root] : []
  
    let deepest = null
    while(q.length > 0){
      let node = q.shift()
  
      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
    return deepest
  }
  
  let tree1 = new TreeNode('a', new TreeNode('b', new TreeNode('c', new TreeNode('d'))))
  console.log(BFS(tree1))