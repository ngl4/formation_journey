/*
Q. Given a binary tree, sum all elements in the tree.

Example:
• Given a binary tree:
                 1
                / \
               7   3
              / \
             4   5
returns 20
*/

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function sumBT(root) {

}

// Test Cases
console.log(sumBT(null)) // 0
console.log(sumBT(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 6 
console.log(sumBT(new TreeNode(1))) // 1

//----------------------------------------------------------------------------------

//Approaches:


function sumBT(root) {
    //iterative (DFS Approach)
    if (!root) return 0; 
    let sum = 0; 
    let stack = root ? [root] : []; 
    while (stack.length > 0) {
      let node = stack.pop(); 
      sum += node.value; 
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right); 
    }
    return sum; 
  
    //Recursive 
    // if (!root) return 0; 
    // let sum = 0; 
    // sum += root.value; 
    // return sum + sumBT(root.left) + sumBT(root.right); 
}


//----------------------------------------------------------------------------------

//OTHER SIMILAR PROBLEMS: 

/*
Algo: Sum all even elements in a binary tree (iterative & Recursive)
*/
  
const sumEvenTree = (root) => {
//Iterative Approach
if (!root) return null; 
let queue = [root]; 
let sum = 0; 
while (queue.length > 0) {
    let node = queue.pop(); 
    if (node.value % 2 === 0) sum += node.value; 
    if (node.left) queue.push(node.left); 
    if (node.right) queue.push(node.right); 
}
return sum; 

//Recursive Approach 
// if (!root) return 0; 
// let sum = 0; 
// if (root.value % 2 === 0) sum += root.value; 
// return sum + sumEvenTree(root.left) + sumEvenTree(root.right); 
}

const tree1 = new TreeNode(2, new TreeNode(3, new TreeNode(6)), new TreeNode(4)); 
const tree2 = new TreeNode(); 
const tree3 = new TreeNode(1); 
const tree4 = new TreeNode(null); 
const tree5 = new TreeNode(2, new TreeNode(6)); 
const tree6 = new TreeNode(1, new TreeNode(3), new TreeNode(5)); 
console.log(sumEvenTree(tree1), 12); 
console.log(sumEvenTree(tree2), 0); 
console.log(sumEvenTree(tree3), 0); 
console.log(sumEvenTree(tree4), 0); 
console.log(sumEvenTree(tree5), 8); 
console.log(sumEvenTree(tree6), 0); 