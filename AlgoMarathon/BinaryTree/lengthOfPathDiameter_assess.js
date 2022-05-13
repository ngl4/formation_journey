/* PLEASE TRY TO SOLVE THIS PROBLEM!!! 

Let's define a tree's diameter as the number of nodes on the longest path between any two nodes in the tree. The longest path may or may not include the tree's root. Given a binary tree, find its diameter.

In the diagrams in the examples below, the longest path is indicated by blue nodes.

Example

For
t = {
    "value": 0,
    "left": {
        "value": 1,
        "left": null,
        "right": {
            "value": 2,
            "left": {
                "value": 3,
                "left": null,
                "right": null
            },
            "right": {
                "value": 4,
                "left": null,
                "right": null
            }
        }
    },
    "right": {
        "value": 5,
        "left": {
            "value": 6,
            "left": null,
            "right": null
        },
        "right": null
    }
}
the output should be
solution(t) = 6.
1st example

For
t = {
    "value": 1,
    "left": null,
    "right": {
        "value": 2,
        "left": {
            "value": 3,
            "left": null,
            "right": {
                "value": 7,
                "left": null,
                "right": null
            }
        },
        "right": {
            "value": 4,
            "left": {
                "value": 6,
                "left": null,
                "right": null
            },
            "right": {
                "value": 5,
                "left": null,
                "right": null
            }
        }
    }
}
the output should be
solution(t) = 5.
2nd example

Input/Output

[execution time limit] 4 seconds (js)

[input] tree.integer t

A tree of integers.

Guaranteed constraints:
2 ≤ tree size ≤ 105,
-1000 ≤ node value ≤ 1000.

[output] integer

The diameter of the binary tree t, as described above.
*/


//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(t) {

}
