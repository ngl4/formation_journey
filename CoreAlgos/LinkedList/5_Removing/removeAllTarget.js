/*
Q. Given a linked list and a target integer, remove all nodes with the value target.

Examples:
• Given a linked list: 4 ➞ 2 ➞ 3 ➞ 2 ➞ 2, target: 2 // returns 4 ➞ 3
• Given a linked list: 4, target: 4  // returns an empty list
*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function arrayify(head) {
    let ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.value)
        ptr = ptr.next
    }
    return array
}

function remove(node, target) { 

}

// Test Cases
let LL1 = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(2)))))))
let LL2 = remove(null, 1);
console.log(arrayify(LL2)) // []
LL1 = remove(LL1, 1);
console.log(arrayify(LL1)) // [4, 2, 3, 2, 2] 
LL1 = remove(LL1, 2);
console.log(arrayify(LL1)) // [4, 3]
LL1 = remove(LL1, 3);
console.log(arrayify(LL1)) // [4]
LL1 = remove(LL1, 4);
console.log(arrayify(LL1)) // []

//----------------------------------------------------------------------------------

//Approaches:

//Iterative Approach (uncomment below and see how it works in the console)

function removeInterative(node, target) { 
    let sentinel = new ListNode(0); 
    sentinel.next = node; 
    let curr = sentinel; 
  
    while(curr.next) {
      if (curr.next.value === target) { //if the next node value is equal to the target
        curr.next = curr.next.next; //remove the next node value, and move the next.next node value up 
      }else { //QUESTION: it is crucial to have 'else' here, why it can be an issue if this else is removed?? 
        curr = curr.next; 
      }
    }
    //console.log(sentinel); 
    return sentinel.next; 
}

// Test Cases
let LL3 = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(2)))))))
let LL4 = removeInterative(null, 1);
console.log(arrayify(LL4)) // []
LL3 = removeInterative(LL3, 1);
console.log(arrayify(LL3)) // [4, 2, 3, 2, 2] 
LL3 = removeInterative(LL3, 2);
console.log(arrayify(LL3)) // [4, 3]
LL3 = removeInterative(LL3, 3);
console.log(arrayify(LL3)) // [4]
LL3 = removeInterative(LL3, 4);
console.log(arrayify(LL3)) // []