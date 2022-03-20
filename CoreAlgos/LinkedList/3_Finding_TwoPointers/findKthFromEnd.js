/*
Q. Given a linked list, return the kth element from the end of the list.
   If the k exceeds the length of the list, return -1.

Examples:
• Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 1 // returns 10
• Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 7 // returns -1

*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function kthFromLast(head, k) {

}

// Test Cases
var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log(kthFromLast(LL1, 1)) // 10
console.log(kthFromLast(LL1, 3)) // 3 
console.log(kthFromLast(LL1, 6)) // 13
console.log(kthFromLast(LL1, 7)) // -1


//----------------------------------------------------------------------------------

//Approaches: 

/*
Explanation of why it should be while(fast) instead of while(fast.next): 

if k is 1: 

1 2 3 4
  f   <--- now fast has moved to the next node by 1 
s    

1 2 3 4
    f   <--- fast is moving to the next node in the same speed as slow
  s     <--- slow is moving to the next node 

1 2 3 4
      f   <--- fast is moving to the next node in the same speed as slow
    s     <--- slow is moving to the next node 

1 2 3 4
        f <--- now fast is null, then it will exit the while loop and then, 
      s   <--- return this s.value 

if k is larger than the linked list length, return -1, since the kth element does not exist: 

k = 5, the linked list length = 4

1 2 3 4 null
        f

if (!fast) return -1; 

Time: O(n)

*/

function kthFromLastIterative(head, k) {
    //create a fast and slow pointers 
    let fast = head; 
    let slow = head; 

    //move the fast pointer k times
    for (let i = 0; i < k; i++) {
      //if it becomes null, return -1. 
      if (!fast) return -1;     //During my most recent 3.15 Algo Blitz, I placed this line after the "fast = fast.next", do you know why this is wrong? can you give me an example? 
      fast = fast.next; 
    }
    
    //move fast and slow pointers at equal pace until fast get to the end of the LL
    while (fast) {
      slow = slow.next; 
      fast = fast.next; 
    }
    return slow.value; 


    // Another Approach: 
    // let fast = head, slow = head; 
    // for (let i = 0; i < k; i++) {
    //   if (fast) fast = fast.next;
    //   else return -1
    // }
    // while(fast){ //fast.next - the value after the last value is null so an error will generated, use fast can avoid this issue
    //   slow = slow.next;
    //   fast = fast.next; 
    // }
    // return slow.value; 
}

// Test Cases
const LL2 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log(kthFromLastIterative(LL2, 1)) // 10
console.log(kthFromLastIterative(LL2, 3)) // 3 
console.log(kthFromLastIterative(LL2, 6)) // 13
console.log(kthFromLastIterative(LL2, 7)) // -1