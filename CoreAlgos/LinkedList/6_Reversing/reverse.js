/*
Q. Reverse a given linked list.

Examples:
• Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10 // returns 10 ➞ 7 ➞ 3 ➞ 5 ➞ 1 ➞ 13
• Given a linked list: 1 // returns 1
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

function reverse(head) {
  }
  

// Test Cases
const LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log(arrayify(reverse(new ListNode(1)))) // [1]
console.log(arrayify(reverse(new ListNode(1, new ListNode(2))))) // [2, 1]
console.log(arrayify(reverse(LL1))) // [10, 7, 3, 5, 1, 13]

//----------------------------------------------------------------------------------

//Approaches: (Take a look at the visualization to help to understand the concept)

//Time: O(n)

function reverseIterative(head) {
  let curr = head; 
  let prev; 
  while(curr) {
    const holdNext = curr.next; 
    curr.next = prev; 
    prev = curr; 
    curr = holdNext; 
  }
  return prev; 
}

// Test Cases
const LL2 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log(arrayify(reverseIterative(new ListNode(1)))) // [1]
console.log(arrayify(reverseIterative(new ListNode(1, new ListNode(2))))) // [2, 1]
console.log(arrayify(reverseIterative(LL2))) // [10, 7, 3, 5, 1, 13]


/* 
Visualization

null 1 2 3 4
p    c

null  1 (2 3 4)
p     c  h---h

      (1   null) 
p      c  c.next


2      (1  null)
c       p   

(3 4)
 h-h 

2      1       null
c      c.next   

2      1       null
p        

3       (2   1   null)
c        p        

(4)
 h 

3       2   1   null
c       c.next    

3       2   1   null
p        

4      3  2   1   null
c      p        

h = null

null        4  3  2   1   null
c           p  

h = null

return p

*/


/*
Another Apporach (that handle edge cases): 

Input:
list: []
Expected Output:
[]

function reverse(list) {
    let curr = list; 
    let prev = null; 
    while (curr) {
        let holdNext = curr.next; 
        curr.next = prev; 
        prev = curr; 
        curr = holdNext; 
    }
    return prev === null ? [] : prev; 
}


*/