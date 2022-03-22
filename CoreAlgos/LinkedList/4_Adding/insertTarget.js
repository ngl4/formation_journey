/*

Q. Given a sorted linked list, insert an element in the appropriate position.

Examples:
• Given a linked list: 1 ➞ 3 ➞ 4, target: 2 // returns 1 ➞ 2 ➞ 3 ➞ 4
• Given an empty linked list, target: 1  // returns 1

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
  
  function insert(head, target) {
  }
  
  // Test Cases
  var LL1 = new ListNode(1, new ListNode(3, new ListNode(4)))
  var LL2 = new ListNode(-3, new ListNode(-2, new ListNode(-1)))
  console.log(arrayify(insert(LL1, 2))) // [1, 2, 3, 4]
  console.log(arrayify(insert(LL2, -4))) // [-4, -3, -2, -1]
  console.log(arrayify(insert(LL2, 0))) // [-3, -2, -1, 0]
  console.log(arrayify(insert(null, 1))) // [1]

  //----------------------------------------------------------------------------------

//Approaches: 

/* 

Sentinel node: It is a node that does not hold any reference/ data to the Linked List. 
It can be any value and it is used especially for inserting or removing nodes in a Linked List

    let sentinel = new ListNode(0); //create a node with the value of "0"
    sentinel.next = head; //the next value after the sentinel node will be the Linked List passed in in the input
    let curr = sentinel; //set the pointer to point at the sentinel node 

LL1 = 1 3 4

target = 2

0 1 3 4
^
sentinel node 


if (!curr.next || target < curr.next.value) { insert the node and break out of the loop}
keep moving to the next node if the above condition does not meet

0 1 3 4
c

0 1 3 4
  c

target = 2, curr.next.value = 3

2 < 3 --> meet the if condition 

create a temp variable to hold the next node (3 4)

0 1 (3 4)
  c  h-h

Then, insert a node with the target value in curr.next 

0 1 2
  c  

Add the temp variable which stored the next node (3 4) back to the linked list: 

0 1 2       (3 4)
  c 
    c.next   c.next.next

  curr.next.next = temp; 

Then break out of the loop. 

The sentinel should look like this:  0 1 2 3 4

We just need return all the linked list nodes after the sentinel node in the output 

return sentinel.next; 

*/

function insert(head, target) {

    //Better Approach: 
    if (!head) return new ListNode(target); 
    let sentinel = new ListNode(0); 
    sentinel.next = head; 
    let curr = sentinel; 
    while (curr) {
      if (!curr.next || target < curr.next.value) {
        let holdNext = curr.next; 
        curr.next = new ListNode(target); 
        curr.next.next = holdNext; 
        break;
      }
      curr = curr.next; 
    }
    //console.log(sentinel); 
    return sentinel.next; 

    //Another Approach: 
    // let sentinel = new ListNode(0); 
    // sentinel.next = head; 
    // let curr = sentinel; 
    // while (curr.next && target > curr.next.value) {
    //   curr = curr.next; 
    // }
    // let newNode = new ListNode(target); 
    // newNode.next = curr.next; 
    // curr.next = newNode; 
    // return sentinel.next; 
  }


  /*
  Another Approach: 

  Edge case: 
  Input:
    list: [1]
    target: -1
  Output:
    [-1, 1]


  function insertTarget(list, target) {
    if(!list) return new ListNode(target); 
    let sentinel = new ListNode(0); 
    sentinel.next = list; 
    let curr = sentinel; 
    let inserted = false;  //detect if the node has already been inserted 
    
    while(curr.next) {
        if (curr.next.value > target) {
            let holdNext = curr.next; 
            curr.next = new ListNode(target); 
            curr.next.next = holdNext; 
            curr = curr.next.next; 
            inserted = true; 
        }else
        curr = curr.next; 
    }
    if (!inserted) curr.next = new ListNode(target);
    console.log(sentinel); 
    return sentinel.next; 
}
*/