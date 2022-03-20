/*

Q. Given a linked list, find the middle element in one pass. If the length of the list is even, return the first of the two middle nodes.
Follow-up: What if we want to return the second of the two middle nodes in lists with even numbers of nodes?

Examples:
• Given a linked list: 1 ➞ 3 ➞ 5 // returns 3
• Given a linked list:  1 ➞ 2 ➞ 3 ➞ 4 // returns 2

*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function findMiddle(head) {

}

// Test Cases
const LL1 = new ListNode(1, new ListNode(3, new ListNode(5)))
const LL2 = new ListNode(1, new ListNode(3, new ListNode(-13, new ListNode(-3, new ListNode(1)))))
const LL3 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
console.log(findMiddle(null)) // null
console.log(findMiddle(LL1)) // 3
console.log(findMiddle(LL2)) // -13
console.log(findMiddle(LL3)) // 2
console.log(findMiddle(new ListNode(1))) // 1

//----------------------------------------------------------------------------------

//Approaches: 

//Time: O(n)

function findMiddle(head) {
    //Better Approach: 
    if (!head) return null; 
    let slow = head, fast = head.next; 

    while (fast.next && fast.next.next) {
        slow = slow.next; 
        fast = fast.next.next; 
    }
    return slow.value;

    //Another Approach: 
    // let fast = head, slow = head, curr = head; 
    // while (curr) {
    //   if (!fast.next || !fast.next.next) return slow.value; //we need !fast.next.next to avoid scenario with "even number" Linked List. !fast.next is used to avoid "odd number" LL. 
    //   fast = fast.next.next; 
    //   slow = slow.next; 
    //   curr = curr.next;
    // }
    // return null;
}
  