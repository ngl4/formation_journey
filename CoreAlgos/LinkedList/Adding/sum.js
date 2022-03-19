// Q. Given a linked list, sum all elements in the list.

// Examples:
// • Given a linked list: 1 ➞ 4 ➞ 5 // returns 10
// • Given a linked list: 1 // returns 1

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function sum(head) {
    // Write your code here.
}

// Test Cases
const LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log(sum(null)) // 0
console.log(sum(LL1)) // 10
console.log(sum(new ListNode(1))) // 1



//----------------------------------------------------------------------------------

//Approaches: 

//Iterative Approach (uncomment below and see how it works in the console)


//Recursive Approach (uncomment below and see how it works in the console)

function sumRecursive(head) {
    if (!head) return 0; 
    console.log("head: ", head); 
    return head.value + sumRecursive(head.next); 
}

//UNCOMMENT BELOW:
// const LL2 = new ListNode(1, new ListNode(4, new ListNode(5)))
// console.log(sumRecursive(null)) // 0
// console.log(sumRecursive(LL2)) // 10
// console.log(sumRecursive(new ListNode(1))) // 1