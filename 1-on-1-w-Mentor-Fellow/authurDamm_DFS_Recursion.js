class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
  }
  
  function arrayifyTree(root) {
    if (!root) { return [] }
    var queue = []
    var array = []
    queue.push(root)
    while (queue.length !== 0) {
        var node = queue.shift()
        array.push(node.value)
        if (node.left) { queue.push(node.left) }
        if (node.right) { queue.push(node.right) }
    }
    return array
  }
  
  /*
  Given a binary tree, return the deepest node (furthest away child).
  Examples
  .       a
  .      /  \
  .    b    c
  .  /.      \  
  .d.         e
              \
               f  
  returns d
  equal depth in both right and left - return one of them 
  
  ORDER of DFS calls (recursive call stack): a
  
  How many approaches to solve this problem? 
  
  DFS (naturally recursive)
  */
  
  
  // dfsDepth(node, depth_of_parent) // depth
    // each node knows its depth is 1 + depth_of_parent
  
  
  function depthOfTree(root) { //top down pre order 
    let maxDepth = -Infinity; 
    let deepestNode = null;
    function depthDFS(root, depth) {
      // if (!root) return; 
      if (depth > maxDepth) {
        maxDepth = depth; 
        deepestNode = root;
      }
      depthDFS(root.left, depth+1)
      depthDFS(root.right, depth+1)
    }
    depthDFS(root, 0);
    return deepestNode;
  }
  
  // const tree1 = new TreeNode('a', new TreeNode('b', new TreeNode('d')), new TreeNode('c', null, new TreeNode('e', null, new TreeNode('f'))));
  // console.log(depthOfTree(tree1));
  
  
  
  // Preorder, inorder, postorder
  
  
  // heightOfTree(root) { //bottom up post order 
  
  //   const nodeHeights = {}; // {node: height}
  
  //   function heightDFS(node) { // node =b
  
  //     if (!node) return 0;
  
      // post-order, children first then root
  //     const left = heightDFS(node.left) 
  //     const right = heightDFS(node.right) 
  //     const myHeight = Math.max(left, right); 
  
  //     nodeHeights[node] = myHeight; // { d: 0, b: 1, c: 0, a:2 }
  //     return 1 + myHeight;
  //   }
  
  //   let x = heightDFS(root); // returns 3
  //   return nodeHeights[root];
  
  // }
  
  
  
  // let lowestCommonAncestor = (root, c1, c2) => {
  //   return solution(root, c1, c2)
  
  // };
  
  // function solution(root, val1, val2) {
  //   if (!root || root === val1 || root === val2) {
  //   return root;
  // }
  
  // const left = solution(root.left, val1, val2);
  // const right = solution(root.right, val1, val2);
  
  // if (left && right) {
  //   return root;
  // }
  
  // return left ? left : right;
  // }