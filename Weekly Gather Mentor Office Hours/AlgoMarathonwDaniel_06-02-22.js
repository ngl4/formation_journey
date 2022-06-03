
const array = [2, 7, 1, 45, 23, 84, 65];

function findMaxRecursive(array) {

  function helper(array, start) {
    // base case
    if (start === array.length - 1) {
      return array[start];
    }

    // do some work?

    // recursive call
    const theMaxOfTheRest = helper(array, start + 1);

    // do some work?

    // merge step
    return Math.max(array[start], theMaxOfTheRest);
  }

  if (array.length === 0) {
    return NaN; // Do something reasonable
  }

  return helper(array, 0);
}


    //     1
    //   2   3
    // 4  5 6  7

    //     1
    //   3   2
    // 7  6 5 4

    //     1
    //   2   3


function treeFlip(root) {
  // base case
  if (root === null) {
    return null;
  }

  // do some work
  const temp = root.right;
  root.right = root.left;
  root.left = temp;

  // recursive calls
  treeFlip(root.left);
  treeFlip(root.right);

  // merge? Nope

  return root;
}

/*
Q. Given a non-empty binary tree, find the maximum path sum.

A path is any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Given a tree:
           1
          / \    
         2   3
        /     
      -1   
// returns 6 (1 + 2 + 3)
*/

// find max path from root to any leaf node
function maxPathSum(root) {
  // base case
  if (!root) {
    return 0;
  }
  // recursive calls
  const left = maxPathSum(root.left);
  const right = maxPathSum(root.right);

  // merge
  const maxSubTreePath = Math.max(left, right);

  // return something
  return maxSubTreePath + root.value;
}

/**
 * 

Original intervals:
--------
              --------- 
                             ----------
Want to insert:
                        --
  ---
       ---
      ---------- 
          ---------------------
*/

function mergeIntervals(original, newInterval) {
  const result = [];

  for (let i = 0; i < original; i++) {
    const interval = original[i];

    // Do we want to merge interval and newInterval?
      // if so, update newInterval
    // else
      // result.push(interval);
    }

  return result;
}