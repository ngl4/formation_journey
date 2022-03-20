/*
Q. Given an unsorted linked list, find the element with the largest value.

Examples:
• Given a linked list: 1 ➞ 4 ➞ 5 ➞ 1 // returns 5
• Given a linked list: 1  // returns 1
*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}
        
function findMax(head) { 
}

// Test Cases
const LL1 = new ListNode(1, new ListNode(4, new ListNode(5, new ListNode(1))))
const LL2 = new ListNode(7, new ListNode(1, new ListNode(5, new ListNode(1))))
const LL3 = new ListNode(-1, new ListNode(-3, new ListNode(-5, new ListNode(0, new ListNode(-11)))))
console.log(findMax(LL1)) // 5
console.log(findMax(LL2)) // 7
console.log(findMax(LL3)) // 0
console.log(findMax(new ListNode(1))) // 1

//----------------------------------------------------------------------------------

//Approaches: 
/*
Higher Order Overview: 
1. declared a variable max and initialized it with the head.value (the first node value of the linked list)
2. Iterate through the linked list 
  - if the head.value is larger than max, update max to equate the head.value
  - Move to the next node 
3. exit loop when head is null, return max 

Time: O(n)
Space: O(1)

*/

//Iterative Approach (uncomment below and see how it works in the console)

function findMaxIterative(head) { 
    //Better version
    let max = head.value; 
    while (head) {
      if (head.value > max) max = head.value; 
      head = head.next; 
    }
    //Another approach 
    // let max = 0; 
    // let curr = node; 
    // while (curr) {    
    //   if (curr.value > max) max = curr.value; //compare the current node value with max 
    //   curr = curr.next; 
    // }
  return max; 
}

// Test Cases
let LL4 = new ListNode(1, new ListNode(4, new ListNode(5, new ListNode(1))))
let LL5 = new ListNode(7, new ListNode(1, new ListNode(5, new ListNode(1))))
let LL6 = new ListNode(-1, new ListNode(-3, new ListNode(-5, new ListNode(0, new ListNode(-11)))))
console.log(findMaxIterative(LL4)) // 5
console.log(findMaxIterative(LL5)) // 7
console.log(findMaxIterative(LL6)) // 0
console.log(findMaxIterative(new ListNode(1))) // 1


//Recursive Approach (uncomment below and see how it works in the console)

function findMaxRecursive(head) { 
  if (!head.next) return head.value; 
  const max = findMaxRecursive(head.next); //this will go all the way to the end of the linked list moving back up to the beginning of the linked list
  //console.log(head.next); //and it is pretty obvious when you check head.next to see how the recursive approach works
  return head.value > max ? head.value : max; 
}

// Test Cases
let LL4 = new ListNode(1, new ListNode(4, new ListNode(5, new ListNode(1))))
let LL5 = new ListNode(7, new ListNode(1, new ListNode(5, new ListNode(1))))
let LL6 = new ListNode(-1, new ListNode(-3, new ListNode(-5, new ListNode(0, new ListNode(-11)))))
console.log(findMaxRecursive(LL4)) // 5
console.log(findMaxRecursive(LL5)) // 7
console.log(findMaxRecursive(LL6)) // 0
console.log(findMaxRecursive(new ListNode(1))) // 1
