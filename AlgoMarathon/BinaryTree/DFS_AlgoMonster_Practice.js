class Tree {
    constructor(val, left=null, right=null) {
      this.value = val; 
      this.left = left;
      this.right = right;
    }
  }

/*
FIND MAX DEPTH 

*/
  
  function maxDepth(root) {
    if (!root) return 0; 
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  }
  
  const tree = new Tree(1, new Tree(2, new Tree(4), new Tree(6)), new Tree(3))
  console.log(maxDepth(tree))


/*
FIND VISIBLE NODES 

*/

function visibleTreeNode(root) {
    let numberOfVisibleNodes = 0; 
    const rootVal = root.value;
    function dfs(root){
        if (!root) return null; 
        if (root.value >= rootVal){
            numberOfVisibleNodes++;
        }
        dfs(root.left);
        dfs(root.right);
        return;
    }
    dfs(root);
    return numberOfVisibleNodes; 
}

function visibleTreeNode(root) {
    function dfs(root, curr_max) {
        if (!root) return 0;
        let total = 0; 
        if (root.value >= curr_max) {
            total++; 
        }
        const new_curr_max = Math.max(curr_max, root.value)
        return total + dfs(root.left, new_curr_max) + dfs(root.right, new_curr_max); 
    }
    return dfs(root, -Infinity); 
  }
  
  const tree1 = new Tree(2, new Tree(4, new Tree(3), new Tree(1)), new Tree(9))
  console.log(visibleTreeNode(tree1))


  /*
  isBalancedTree

  */
  //First attempt (incorrect, why?)
  function isBalanced(tree) {
    
    function dfs(root, curr_depth) {
        //Base: 
         if (!root) return true; 
 
        //Recursion: 
         const left = dfs(tree.left, curr_depth);
         const right = dfs(tree.right, curr_depth);
        
         if (Math.abs(left - right) > 1) {
             return false;
         }
 
        return curr_depth;        
    }
     
    return dfs(tree, 0); 
 }

 //Second attempt (success)

 function findHeight(root) {
    if (!root) return 0; 
    return 1 + Math.max(findHeight(root.left), findHeight(root.right)); 
  }
  
  function isBalanced(tree) {
    if (!tree) return true; 
  
    if (Math.abs(findHeight(tree.left) - findHeight(tree.right)) > 1) {
      return false;
    }
  
    const left = isBalanced(tree.left); 
    const right = isBalanced(tree.right);
  
    return left && right; 
  }
  
  
  const tree2 = new Tree(2, new Tree(4, new Tree(3), new Tree(1)), new Tree(9))
  const tree3 = new Tree(2, new Tree(4, new Tree(3), new Tree(1, new Tree(7))), new Tree(9))
  console.log(isBalanced(tree3))
 