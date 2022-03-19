// Q. Given two linked lists of "equal" length, sum elements' value at the same position.

// Examples:
// Given two linked lists: 
//head1: 1 ➞ 3 ➞ 5 
//head2: -1 ➞ 3 ➞ -10    // returns 0 ➞ 6 ➞ -5

// Given two linked lists: 
//head1: 0
//head2: 0     // returns 0


class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function arrayify(head) {  //convert a Linked List output into an Array output 
    let ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.value)
        ptr = ptr.next
    }
    return array
}

function sumTwoLL(head1, head2) { 
    // Write your code here.
}

// Test Cases
const LL1 = new ListNode(1, new ListNode(3, new ListNode(5)))
const LL2 = new ListNode(-1, new ListNode(3, new ListNode(-10)))
const LL3 = new ListNode(1, new ListNode(3, new ListNode(5)))
const LL4 = new ListNode(-1, new ListNode(3))
console.log(arrayify(sumTwoLL(LL1, LL2))) // [0, 6, -5]
console.log(arrayify(sumTwoLL(LL3, LL4))) // [0, 6]
console.log(arrayify(sumTwoLL(new ListNode(0), new ListNode(0)))) //[0]


//----------------------------------------------------------------------------------

//Approaches: 

//Iterative Approach (uncomment below and see how it works in the console)


function sumTwoLLIterative(head1, head2) { 
  let sumHeads = new ListNode(0); 
  let curr = sumHeads, h1 = head1, h2 = head2; //<-- variables can be declared and assigned in one line 

  while (h1 && h2) { //break the loop when h1 or h2 is null (the loop only continue when both h1 and h2 are both NOT null, if one is null, it will break the loop)
    curr.next = new ListNode(h1.value + h2.value); 
    curr = curr.next; 
    h1 = h1.next; 
    h2 = h2.next; 
  }
  console.log("h1: ", h1); 
  console.log("h2: ", h2); 
  console.log("sumHeads: ", sumHeads);
  console.log("sumHeads.next: ", sumHeads.next); 
  return sumHeads.next; 
}

//UNCOMMENT BELOW:
// const LL6 = new ListNode(1, new ListNode(3, new ListNode(5)))
// const LL7 = new ListNode(-1, new ListNode(3, new ListNode(-10)))
// const LL8 = new ListNode(1, new ListNode(3, new ListNode(5)))
// const LL9 = new ListNode(-1, new ListNode(3))
// console.log(arrayify(sumTwoLLIterative(LL6, LL7))) // [0, 6, -5]
// console.log(arrayify(sumTwoLLIterative(LL8, LL9))) // [0, 6]
// console.log(arrayify(sumTwoLLIterative(new ListNode(0), new ListNode(0)))) //[0]

