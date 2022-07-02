/*
Q1. Given an array of integers sorted in ascending order, convert it to a height balanced BST.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
You must pick the smaller number when picking the "middle." In other words, when there are two numbers to choose from to pick the next child node, choose the smaller value (see example below).
Example:

Given an array: [-10,-3,0,5,9]
returns:

                0
               / \    
             -10   5 
               \    \
               -3    9

1. Choose 0 as a root node.
2. For left child node of 0, you have -10 and -3. According to the rule, you choose the smaller value -10.
3. Similar for choosing the right child node of 0, you are left with 5 and 9. Since 5 is smaller than 9, 5 becomes the right child node.
[execution time limit] 4 seconds (js)

[input] array.integer array

sorted array

[output] tree.integer

Input:
array: [-4, 0, 7, 10, 11, 13]
Expected Output:
{
    "value": 7,
    "left": {
        "value": -4,
        "left": null,
        "right": {
            "value": 0,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 11,
        "left": {
            "value": 10,
            "left": null,
            "right": null
        },
        "right": {
            "value": 13,
            "left": null,
            "right": null
        }
    }
}
*/

// Binary trees are already defined with this interface:
function Tree(x) {
    this.value = x;
    this.left = null;
    this.right = null;
  }
  
class BST {
    constructor (value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  
    addNode (value) {
      if (!this.value) {
        this.value = new BST(value);
      } else if (value < this.value) { // 11 > 10 
        if (this.left === null) {
          this.left = new BST(value);
        } else {
          if (this.left.value > value) {
            let tmp = this.right;
            this.left = new BST(value);
            this.left.addNode(tmp.value);
          } else {
            return this.left.addNode(value);
          }
        }
      } else { // go left 
        if (this.right === null) { // value === 0 || null
          this.right = new BST(value);
        } else {
          if (this.right.value <= value) {
            let tmp = this.right;
            this.right = new BST(value);
            this.right.addNode(tmp.value);
          } else {
            return this.right.addNode(value);
          }
        }
      }
      return this;
    }
  }
  
  // let t = new BST(7);
  // t.addNode(-4)
  // t.addNode(0);
  // t.addNode(10);
  // t.addNode(11);
  // t.addNode(13);
  // console.log(validateBST(t));
  
  function validateBST(root, min = -Infinity, max = Infinity) {
      if (!root) return null; 
      if (root.value <= min || root.value > max) return false; 
      let left = validateBST(root.left, min, root.value), 
          right = validateBST(root.right, root.value, max); 
      return left && right ? true : !left && !right ? true : false; 
  }
  
  //FAILED ONE TEST CASE 
  
  function arraytoBST(array) {
      let mid = Math.floor(array.length/2);
      let rootValue = (array.length % 2 === 0) ? array[mid-1] : array[mid];
      let root = new BST(rootValue) 
      for (let i = 0; i < array.length; i++) {
        if (array[i] === rootValue) {
          continue;
        } else {
          root.addNode(array[i])
        }
      }
    return root;
  }
    
    // let mid = Math.floor(array.length/2);
    // let rootValue = (array.length % 2 === 0) ? array[mid-1] : array[mid]; 
    // let root = new Tree(rootValue);
    // //left subtree
    // let startingLeft = 0; 
    // let startingRight = (array.length % 2 === 0) ? (mid-1)+1 : mid + 1; 
    // let endNode = (array.length % 2 === 0) ? mid-1 : mid; 
    // let node = root; 
    // while (startingLeft < endNode) {
    //     if (array[startingLeft] < node.value) { 
    //         node.left = new Tree(array[startingLeft]); 
    //         node = node.left; 
    //     }else {
    //         node.right = new Tree(array[startingLeft]);
    //         node = node.right;
    //     }
    //     startingLeft++; 
    // }
    
    // let tempNode = root; // 7 
    // //right subtree
    // while(startingRight < array.length) {
    //     if (array[startingRight] < tempNode.value) { 
    //         tempNode.left = new Tree(array[startingRight]); 
    //         prev = tempNode;
    //         tempNode = tempNode.left; 
    //     } else {
    //         tempNode.right = new Tree(array[startingRight]); // 7 \ 10
    //         tempNode = tempNode.right; 
    //     }
    //     startingRight++;     
    // }
    // return root; 
  
  
  
  console.log(validateBST(arraytoBST([-4, 0, 7, 10, 11, 13])));