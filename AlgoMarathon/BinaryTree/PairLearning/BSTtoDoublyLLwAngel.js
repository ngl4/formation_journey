/**
 * Given a Binary Tree (BT), convert it to a Doubly Linked List(DLL) In-Place. The left and right pointers in nodes are to be used as previous and next pointers respectively in converted DLL. The order of nodes in DLL must be same as in-order of the given Binary Tree. The first node of in-order traversal (leftmost node in BT) must be the head node of the DLL.
 * 
 * Example
 *       3
 *   1.      5
 *      2. 4
 * 
 * 
 * null <- 1 <-> 2 <-> 3 <-> 4 <-> 5 -> null
 * 
 *  

Approach: DFS Recursive In-order

In order: left -> self -> right

head = 1
tail = 3

#Left
dfs(node.left)

#Self
if tail exists: 
  tail.right = node // 1 -> 2 -> 3
  node.left = tail. // 1 <-> 2 <-> 3

update tail = node 

#Right
dfs(node.right)

 */

  
class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  function bst2dll(root) {
    let head = null, tail = null; 
    //helper dfs function
    function dfs(node) {
      //base case 
      if (!node) return; 
      dfs(node.left); 
      //self
      if (tail) {
        tail.right = node; 
        node.left = tail;
      } else {
        head = node;
      }
      tail = node; 
      dfs(node.right); 
    }
    //call the dfs helper function
    dfs(root); 
    return head; 
  }
  
  console.log(bst2dll(new TreeNode(3,
    new TreeNode(1, 
      null, 
      new TreeNode(2)
      ),
    new TreeNode(5, 
      new TreeNode(4), 
      null)
  )))
  // null <- 1 <-> 2 <-> 3 <-> 4 <-> 5 -> null
  
  console.log(bst2dll(
    new TreeNode(3,
      new TreeNode(1, 
        new TreeNode(2,
          new TreeNode(5,
            new TreeNode(4)
          )
          )
        )
      )
    )
  )