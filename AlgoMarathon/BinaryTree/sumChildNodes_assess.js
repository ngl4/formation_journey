/*
Q. Given a binary tree, update each node's value with its sum of child nodes. You must update the nodes by one level at a time starting from the top (root).

Example:
Given

          1
         / \
        2   3
       /
      4
returns

          5                    // 2+3
         / \
        4   3                  // 4
       /
      4

*/

//ARTHUR DAMM'S SOLUTION USING DFS BOTTOM UP POST-ORDER RECURSIVE APPROACH 
//IT IS SUPER CLEAN!! 

class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value; 
      this.left = left; 
      this.right = right; 
    }
  }
  function sumChildren(root) {
    function dfs(node) {
      if (!node) return 0; 
      const originalValue = node.value;
      // According to example, as long as at least 1 child exists, we replace the value with
      // the children sums. The return 0 above works well in the case of 1 null child.
      if (node.left || node.right)
        node.value = dfs(node.left) + dfs(node.right);
      return originalValue;
    }
    dfs(root);
    return root;
  }
  
  const tree1 = new TreeNode(1, 
                new TreeNode(2, new TreeNode(4)), 
                new TreeNode(3));
  
  const tree2 = new TreeNode(1, 
                new TreeNode(-10, new TreeNode(4), new TreeNode(5)), 
                new TreeNode(3, null, new TreeNode(8, 
                                      new TreeNode(7))));
  
  console.log(sumChildren(tree1));
  /*
     5
   4   3
  4   
  */
  console.log(sumChildren(tree2));
  

//ATTEMPT #2: DFS BOTTOM UP POST-ORDER RECURSIVE APPROACH 

/*
MY APPROACH: 
using the "originalValue" to pass the information from the children back up to the parent, and return 2 items in the heightDFS tree:  
1. updated node
2. original value of the node before being updated 

BRIEF REFLECTION:
What took me the longest is to figure out how to pass the original value back up from the child node and then how to use it to set up the conditionals

WHY "Top Down Approach" is better than "Bottom Up Approach"? 
- more intuitive - make more sense using top down approach since it is the first thing comes to mind 
- easy and faster to implement - compared the amount of codes that I need to write up for the bottom up approach and the complexity of returned values, in an interview situation, it is going to take up more time and it is not worth it, when there is a more simpler approach 

*/

function heightDFSTree(root) {
  function heightDFS(node) {
    if (!node) return 0; 

    const leftNode = heightDFS(node.left); 
    const rightNode = heightDFS(node.right); 
    // console.log("left: ", leftNode, "right: ", rightNode); 

    // console.log("originalValue0 ", origLeftVal, rightNode[1]);   //1. CHECK ORIGINAL VALUE (PASS IN TO PARENT FROM CHILDREN)

    let originalValue = node.value; 
    let tempValue = node.value; 
    // console.log("tempValue1 ",tempValue); 
    // console.log("originalValue1 ",originalValue); 

    const origLeftVal = leftNode[1];  //original left node value 
    const origRightVal = rightNode[1]; //original right node value 

    const leftNodeLeaf = leftNode[0]; //this node contains NO left child node 
    const rightNodeLeaf = rightNode[0]; //this node constains NO right child node 

    if (origLeftVal && origRightVal) { //check if original value(s) found, add the original values 
      tempValue = origLeftVal + origRightVal
    }else if (!origLeftVal && origRightVal) {
      tempValue = origRightVal
    }else if (origLeftVal && !origRightVal) {
      tempValue = origLeftVal; 
    }else {    
      //check if no original value(s) found, add up the node values (handle leftChild, rightChild === null)
      if (leftNodeLeaf && rightNodeLeaf) {
        tempValue = leftNodeLeaf.value + rightNodeLeaf.value; 
      }else if (!leftNodeLeaf && rightNodeLeaf) {
        tempValue = rightNodeLeaf.value;
      }else if (leftNodeLeaf && !rightNodeLeaf) {
        tempValue = leftNodeLeaf.value; 
      }
    }
    
    node.value = tempValue;
    // console.log("tempValue2 ",tempValue); 
    // console.log("originalValue2 ",originalValue);  //2. CHECK ORIGINAL VALUE (READY TO PASS FROM CHILDREN TO PARENT - THE NODE ABOVE)
    return [node, originalValue]; 
  }
  let output =  heightDFS(root); 
  return output[0]; 
}

const tree1 = new TreeNode(1, 
              new TreeNode(2, new TreeNode(4)), 
              new TreeNode(3));

const tree2 = new TreeNode(1, 
              new TreeNode(-10, new TreeNode(4), new TreeNode(5)), 
              new TreeNode(3, null, new TreeNode(8, 
                                    new TreeNode(7))));

console.log(heightDFSTree(tree1));
/*
   5
 4   3
4   
*/
console.log(heightDFSTree(tree2));

/*
Input: 
       1
 -10      3
4    5      8
          7

Expected output: 

       -7
  9      8
4    5      7
          7



//ATTEMPT #1: DFS TOP DOWN PRE-ORDER RECURSIVE APPROACH 
/*
Pseudo-code + Trying to solve the problem using DFS top down recursive approach:

  1 if left child, then added to cur.val, if right child, added to curr value, then moved to the left node, if left child, added to curr.val, if right, added to curr.val

 c4   3 

4
*/

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(root) {
    if (!root) return null; 
    if (root.left && root.right) {
        root.value = root.left.value + root.right.value; 
    }else if (root.left && !root.right) {
        root.value = root.left.value; 
    }else if (!root.left && root.right) {
        root.value = root.right.value;
    }
    solution(root.left)
    solution(root.right)
    return root; 
}

/*
Test Case:

Test 4
Input:
root:
{
    "value": 1,
    "left": {
        "value": -10,
        "left": {
            "value": 4,
            "left": null,
            "right": null
        },
        "right": {
            "value": 5,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 3,
        "left": null,
        "right": {
            "value": 8,
            "left": {
                "value": 7,
                "left": null,
                "right": null
            },
            "right": null
        }
    }
}
Output:
{
    "value": -7,
    "left": {
        "value": 9,
        "left": {
            "value": 4,
            "left": null,
            "right": null
        },
        "right": {
            "value": 5,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 8,
        "left": null,
        "right": {
            "value": 7,
            "left": {
                "value": 7,
                "left": null,
                "right": null
            },
            "right": null
        }
    }
}

*/

