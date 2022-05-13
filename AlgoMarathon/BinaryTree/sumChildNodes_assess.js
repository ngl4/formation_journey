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

