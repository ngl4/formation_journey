/* 07-03-22
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
  
  /*
  input: [-4, 0, 7, 10, 11, 13]
  
  
  -4, 0, 7, 10, 11, 13
         ^
         m
  left subtree root.left
  m = 2 
  m - 1 = 1 = right 
  
  0  1 
  -4 0
  
  right subtree root.right
  m = 2
  m + 1 = 3 = left 
  
  3.  4.  5. 
  10, 11, 13
  
  
  set mid point as the root of the binary search tree 
  recursively called the helper function on the left subtree and the right subtree 
  and update the left or right index value according to the mid point 
    if checking on left, right = mid - 1
    if checking on right, left = mid + 1
  
  
  */
  
  function arraytoBST(arr) {
  
    function helper(left, right) {
      //base case
      if (left > right) {
        return null; 
      }
      //recursive case 
      let mid = Math.floor((left + right)/2); //Math.floor helps to round down
      let root = new Tree(arr[mid]); 
      root.left = helper(left, mid - 1); 
      root.right = helper (mid + 1, right); 
      return root; 
    }
    return helper(0, arr.length - 1);
  }
  
  // console.log(arraytoBST([-4, 0, 7, 10, 11, 13]));
  // console.log(arraytoBST([-4, 0, 7, 10, 11]));
  
  

//Attempt #1 (unsure)
//Approaches found on Leetcode: Preorder Traversal 
//Time: O(N)
//Space: O(logN)

//1
var sortedArrayToBST = function(nums) {
    if(nums.length < 1) return null;
    const middle = Math.floor(nums.length/2);
    let leftNode = null;
    let rightNode = null;
    if(nums.length > 1) {
      leftNode = sortedArrayToBST(nums.slice(0, middle));
      rightNode = sortedArrayToBST(nums.slice(middle + 1, nums.length));
    }
    return new TreeNode(nums[middle], leftNode, rightNode);
  }

//2
var sortedArrayToBST = function(nums, left = 0, right = nums.length - 1) {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let root = new TreeNode(nums[mid]);
        
        root.left = sortedArrayToBST(nums, left, mid - 1);
        root.right = sortedArrayToBST(nums, mid + 1, right);
        
        return root;
    }
    return null;
};

//3
var sortedArrayToBST = function(nums) {
    return binarySearch(nums, 0, nums.length - 1);
};

function binarySearch(arr, left, right) {
    if(left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const num = arr[mid];
    const root = new TreeNode(num, binarySearch(arr, left, mid - 1), binarySearch(arr, mid + 1, right));
    return root;
}

//4
var sortedArrayToBST = function(nums) {
    if(nums.length < 1) {
        return null;
    } else if (nums.length === 1) {
             return new TreeNode(nums[0]);
    } else {
        let middle = Math.floor(nums.length/2);
        let leftArray = nums.slice(0, middle);
        let rightArray = nums.slice(middle+1, nums.length);
        return new TreeNode(nums[middle], sortedArrayToBST(leftArray), sortedArrayToBST(rightArray))
    }
};

//5
var sortedArrayToBST = function(nums) {
    function constructBST(leftIdx, rightIdx) {
        if (leftIdx > rightIdx) return null;
        
        const midIdx = Math.floor((leftIdx + rightIdx) / 2);
        const nodeVal = nums[midIdx];
        const newNode = new TreeNode(nodeVal);
        
        newNode.left = constructBST(leftIdx, midIdx - 1);
        newNode.right = constructBST(midIdx + 1, rightIdx);
        
        return newNode;
    }
    return constructBST(0, nums.length - 1);
};

//6
const helper = (arr,start,end) => {
    if (start > end) return null
    let mid = Math.floor((start + end) / 2 );
    
    let root = new TreeNode(arr[mid]);
    root.left = helper(arr,start, mid - 1);
    root.right = helper(arr,mid + 1, end);
    return root;
}

var sortedArrayToBST = function(nums) {
  return helper(nums,0,nums.length - 1)
};


/*
Progress Notes: 
15 mins 
- Did not really know how to start
- Know I need to find a root node (the middle point of the sorted array)
- BST - anything on the left nodes will be smaller than the root node and anyting on the right should be larger than the root node

var sortedArrayToBST = function(nums) {
    let newArr = []; 
    let mid = Math.floor(nums.length/2); 
    let root = nums[mid];
    newArr.push(root); 
    console.log(root);    
    for (let i = 0; i < mid; i++) {
        if (nums[i + 1] > nums[i] ) {
            newArr.push(nums[i+1])
        }else {
            for (let j = nums.length - 1 ; j > mid; j--) {
            ... do something here
            }
        }
    }
};

15 mins
- Reading through the solutions 
- Skimming through different approaches in JavaScript to this problem 
- Copied some of the approaches that I am 80% understanding how they work 


Future Attempts: 
- Understand all the different Traversal explanation in the solutions
- Try different Preorder Traversals approaches 

*/