const goodNodes = function(root) {
 
    function helper(node, maxVal) {
      if (!node) return; 
      let left = helper(node.left, Math.max(node.val, maxVal), goodNodes); 
      let right = helper(node.right, Math.max(node.val, maxVal), goodNodes); 
      if (node.val >= maxVal) {
        return 1 + left + right; 
      }
      return left + right;
    }
    return helper(root, root.val);  
  };
  
  
  const goodNodesRecursion = function(root, maxVal = -Infinity) {
   
    if (!root) return 0; 
  
    let value = root.val >= maxVal ? 1 : 0;
    
    let left = goodNodesRecursion(root.left, Math.max(root.val, maxVal))
    let right = goodNodesRecursion(root.right, Math.max(root.val, maxVal))
    
    
    return left + right + value;
  
  };
  
  
//   const goodNodes = function(root) {
//     // let goodNodes = 0; 
  
//     function helper(node, maxVal, goodNodes = 0) {
//       if (!node) return; 
//       if (node.val >= maxVal) {
//         goodNodes++; 
//       }
//       helper(node.left, Math.max(node.val, maxVal)); 
//       helper(node.right, Math.max(node.val, maxVal)); 
//       //return goodNodes
//     }
  
//     helper(root, root.val); 
//     // return goodNodes; 
//   };
  
//   var goodNodes = function(root) {
//     function helper(node, maxVal) {
//      if (!node) return 0; 
  
//      let value = node.val >= maxVal ? 1 : 0;
     
//      let left = helper(node.left, Math.max(node.val, maxVal))
//      let right = helper(node.right, Math.max(node.val, maxVal))
     
     
//      return left + right + value;
//    }
  
//    return helper(root, root.val); 
     
//   };
  
  
  var leftSideView = function(root) {
    let result = []
    if(!root) return result;
    let queue = [root];
    while (queue.length) {
      let size = queue.length;
      let length = queue.length;
      while (size) {
        const node = queue.shift();
        if (size == length) result.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
        size--;
      }
    }
    return result
  }
  
  // [1,2,3,null,5,null,4]
  // output = [1, 2, 5]
  
  var rightSideView = function(root) {
    let result = []
    if(!root) return result;
    let queue = [root];
    while (queue.length) {
      let size = queue.length;
      while (size) {
        const node = queue.shift();
        if (size == 1) {
          result.push(node.val)
        }
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
        size--;
      }
    }
    return result
  }


  var rightSideViewModified = function(root) {
    let result = []
    if(!root) return result;
    let queue = [root];
    while (queue.length) {
      let nextLevel = [];
      let size = queue.length;
     for(let i = 0; i < size; i++) {
       const node = queue[i]
        if (i == size-1) result.push(node.val);
        if (node.left) nextLevel.push(node.left);
        if (node.right) nextLevel.push(node.right);
      }
      queue = nextLevel;
    }
    return result
  }

  
  var rightSideView = function(root) {
    let result = []
    if(!root) return result;
    let queue = [root];
    while (queue.length) {
      let size = queue.length;
      while (size) {
        const node = queue.shift();
        if (size == 1) {
          result.push(node.val)
        }
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
        size--;
      }
    }
    return result
  }