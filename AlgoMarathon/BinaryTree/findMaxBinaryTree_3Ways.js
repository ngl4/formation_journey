class Tree {
    constructor(val, left=null, right=null) {
      this.value = val; 
      this.left = left;
      this.right = right;
    }
  }
  
  //Find MAX node value in the Tree (3 WAYS TO IMPLEMENT)
  
  //OPTION #1: Max Value is a parameter of the dfs func (Return Value with parameter)
  function dfs(root, max_val) {
    if (!root) return null; 
  
    max_val = Math.max(root.value, max_val); 
  
    const leftMax = dfs(root.left, max_val); 
    const rightMax = dfs(root.right, max_val); 
  
    return Math.max(max_val, leftMax, rightMax);  
  }
  
  //OPTION #2: Max Value is returned within the function (Return Value)
  function dfs(node) {
    if (!node) return -Infinity;
  
    const left_max_val = dfs(node.left)
    const right_max_val = dfs(node.right)
    return Math.max(node.value, left_max_val, right_max_val)
  }
  
  
  //OPTION #3: Max Value is a global variable (Global Variable)
  function findMaxValue(node) {
    let maxVal = -Infinity; 
    function dfs(root) {
      if (!root) return null; 
      maxVal = Math.max(root.value, maxVal);
      dfs(root.left);
      dfs(root.right); 
    }
    dfs(node);
    return maxVal; 
  }
  
  
  const tree = new Tree(1, new Tree(2, new Tree(4), new Tree(6)), new Tree(3))
  console.log(findMaxValue(tree)); 
  console.log(dfs(tree)) //should be 6