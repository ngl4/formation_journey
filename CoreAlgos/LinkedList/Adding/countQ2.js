/*
Q2. Count the odd elements in a linked list (iterative & recursive)

Given a linked list of positive integers, count the elements with odd values from the list. 

Note 0 is an even number.

Examples
Input1: 1 → 1 → 1 → 1 
Output1: 4
Input2: 1 → 2 → 3 → 4 
Output2: 2
*/

class ListNode {
    constructor (value, next = null) {
        this.value = value; 
        this.next = next; 
    }
}

const countOddElemLL = (head) => {
    // Write your code here.
}

// Test Cases
const LL1 = new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1))));
const LL2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
console.log(countOddElemLL(LL1)) // 4
console.log(countOddElemLL(LL2)) // 2




//----------------------------------------------------------------------------------

//Approaches: 

  //iterative 
  const countOddElemIterative = (head) => {
    let count = 0; 
    while (head) {
      if (head.value % 2 !== 0) {
        count++; 
      }
      head = head.next; 
    }
    console.log("head :", head); 
    return count; 
  }
  
//   const LL3 = new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))));
//   console.log(countOddElemIterative(LL3)); //3

  //recursive 
  const countOddElemRecursive = (head) => {
    if (!head) return 0;
    let count = 0; 
    if (head.value % 2 !== 0) {
      count++; 
    }
    console.log("head :", head); 
    return count + countOddElemRecursive(head.next); 
  }
  
//   const LL4 = new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))));
//   console.log(countOddElemRecursive(LL4)); //3
  

