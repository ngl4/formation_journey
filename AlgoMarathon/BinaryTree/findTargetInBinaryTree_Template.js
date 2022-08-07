class Tree {
    constructor(val, left=null, right=null) {
      this.value = val; 
      this.left = left;
      this.right = right;
    }
  }
  
  function dfs(root, target) {
    if (!root) return null; 
    console.log(root); 
    if (root.value === target) { 
      return root; //determine what to return 
    }
  
    const left = dfs(root.left, target); 
    const right = dfs(root.right, target); 
  
    // console.log("left", left); 
    // console.log("right", right);
  
    return left ? left : right;  //once the node is found in the tree either on the left or right, it will be return here. 
    //if left exist, return left, else return right, if both do not exist, then return null 
  }
  
  const tree = new Tree(1, new Tree(2, new Tree(4), new Tree(6)), new Tree(3))
  console.log(dfs(tree, 4))