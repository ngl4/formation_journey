/*
Q. Given a sorted linked list of unique integers, check if the list contains an element with a target value.

Examples:
• Given a linked list: 2 ➞ 3 ➞ 5, target: 2 // returns True
• Given a linked list: 2 ➞ 3 ➞ 5, target: 4  // returns False

*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function search(head, target) { 

}

// Test Cases
const LL1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(10)))))))
console.log(search(null, 1)) // false
console.log(search(LL1, 2)) // true
console.log(search(LL1, 4)) // false
console.log(search(LL1, -1)) // false
console.log(search(LL1, 10)) // true
console.log(search(LL1, 11)) // false

//----------------------------------------------------------------------------------

//Approaches: 

/*
Higher Order Overview: 
1. Create a curr pointer -> let curr = head; 
2. iterate through the entire curr linked list 
    3. if any of the curr.value is found to equal to the target value, return true 
    4. keep moving to the next node 
5. return false when no matching curr.value found 

Time: O(n)
Space: O(1)

*/


function searchIterative(head, target) { 

    //Better Approach - no pointer is needed and if(!head) condition is redundant and can be removed 
    while (head) { //break the loop when head is null
        if (head.value === target) return true; 
        head = head.next; //move to the next node 
      }
      return false;  

    //Another Approach - use a curr pointer
    // if (!head) return false;  
    // let curr = head; 
    // while (curr) { 
    //   if (curr.value === target) return true; 
    //   curr = curr.next; 
    // }
    // return false;  
}

// Test Cases
const LL2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(10)))))))
console.log(searchIterative(null, 1)) // false
console.log(searchIterative(LL2, 2)) // true
console.log(searchIterative(LL2, 4)) // false
console.log(searchIterative(LL2, -1)) // false
console.log(searchIterative(LL2, 10)) // true
console.log(searchIterative(LL2, 11)) // false