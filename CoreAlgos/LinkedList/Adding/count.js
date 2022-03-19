/*
Q1. Given an unsorted linked list, count the number of elements (iteratively or recursively).

Examples:
• Given a linked list: 1 ➞ 4 ➞ 5 // returns 3
• Given a linked list: 0 // returns 1
*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function count(head) {
    // Write your code here.
}

// Test Cases
const LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log(count(null)) // 0
console.log(count(LL1)) // 3
console.log(count(new ListNode())) // 1



//----------------------------------------------------------------------------------

//Approaches: 

//Iterative Approach (uncomment below and see how it works in the console)

function countIterative(head) {
    let curr = head; 
    let count = 0;
    while (curr) {
      count++;
      curr = curr.next;
    }
    console.log("curr :", curr); // null 
    console.log("head :", head); // the entire linked list
    return count;    
}

//UNCOMMENT BELOW:
// const LL2 = new ListNode(1, new ListNode(4, new ListNode(5)))
// console.log(countIterative(null)) // 0
// console.log(countIterative(LL2)) // 3
// console.log(countIterative(new ListNode())) // 1


//Recursive Approach (uncomment below and see how it works in the console)

function countRecursive(head) {
    if (!head) return 0;
    console.log("head :", head); //going through each node 
    return 1 + countRecursive(head.next); 
}

//UNCOMMENT BELOW:
// const LL3 = new ListNode(1, new ListNode(4, new ListNode(5)))
// console.log(countRecursive(null)) // 0
// console.log(countRecursive(LL3)) // 3
// console.log(countRecursive(new ListNode())) // 1





