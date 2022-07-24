/*
Given a linked list, delete (k) nodes after the middle.
If (n) is the length of the list, the middle node is [n / 2] using zero-based indexing.
Return the head of the modified list.
Function Signature: 
function deleteKNodesAfterMiddle(head)

1) Determine/find the middle of the linked list 
2) Delete K nodes after the middle 
3) Return the head of the list 

Quesiton: 
- How to determine middle point in a linked list with even number of nodes? (same for both even and odd numbers -- this might not be the necessary question to ask)
- Should I assume when k nodes after middle is larger then the second half of the linked list then we should just return the head of linked list as well? (head)


Approaches: 
- setting a dummy node and set the next node to be the head of the linked list*
- set up fast and slow pointers*
  - start using these pointers to find the middle node*
- once we found the middle node 
  - set up an index to keep track of location at and after the middle node 
  while there is curr.next 

  while i < k - 1
    i++;

  if (i + 1 === k) then we will remove the next node, reset i = 0; 


Deleting nodes after middle point 

Test Cases 

1 2 3 4 5 6 7 k: 2 => 1 2 3 4 5 7
      ^   
          i   

1 2 3 4 k: 1 => 1 2
  ^ 
  i

1 2 3 4 k: 4 => 1 2 3 4 
  ^

Time: O(n) N= number of nodes in a linked list 
Space: O(n) N = the dummy list size is proportionally equal to the input list size 

finding middle point (in order to find the middle point, it is cruicial to find the length of the linked list and then divide by 2 -> apply this in the fast and slow pointers)

create another dummy node (temp) to help with finding the length of the linked list 

odd
m = 3

0 1 2 3 4 5 6 7
f
s

even
m = 2    

0 1 2 3 4
        f
    s




*/

class ListNode {
  constructor(value, next = null) {
    this.value = value; 
    this.next = next;
  }
}

/* Manual Testing: 


1 2 3 4 k: 1 => 1 2

listLen = 4

1 2 3 4 
        t

m = 2

0 1 2 3 4  
        f     
    s

i = 0
k = 1
k-1 = 0

0 1 2      
    s
    i

*/


function deleteKNodesAfterMiddle(head, k) {
  let dummy = new ListNode(0); 
  dummy.next = head; 
  // let curr = dummy; 

  //find the length of the linked list 
  let temp = head; 
  let listLen = 0; 
  while (temp) {
    listLen++;
    temp = temp.next; 
  }

  let mid = Math.floor(listLen/2);

  let fast = dummy; 
  let slow = dummy; 

  //find the middle point (using fast and slow pointers)
  for (let i = 0; i < mid; i++) {
    fast = fast.next; 
  }

  while (fast.next) {
    fast = fast.next; 
    slow = slow.next; 
  }

  //delete the k nodes after the middle point(we are using the index value and slow pointer only)

  let i = 0; 

  while (slow.next) {
    while (i < k - 1) {
      i++; 
    }
    if (i + 1 === k || k > mid) { //<-- CONDITION I HAVE MISSED 
      slow.next = slow.next.next; 
      i = 0; 
    }
  }

  return dummy.next; 
}

/*

Test Cases:
list = [1, 2, 3, 4], k = 2 => [1, 2]
list = [1], k = 0 => `[1]`
list = [2, 9, 4, 1, 7], k = 3 => [2, 9 4]

*/

const list1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))); 
const list2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))); 
const list3 = new ListNode(1); 
const list4 = new ListNode(2, new ListNode(9, new ListNode(4, new ListNode(1, new ListNode(7))))); 

console.log(deleteKNodesAfterMiddle(list1, 1)); //[1, 2]
console.log(deleteKNodesAfterMiddle(list2, 5)); //[1, 2]
console.log(deleteKNodesAfterMiddle(list3, 0)); //[1]
console.log(deleteKNodesAfterMiddle(list4, 3)); //[2, 9, 4]

//CONDITIONS I HAVE MISSED: 
//There are several conditions to be aware of. What I missed was if k > mid, like the k value is much larger than available nodes after middle, we want to make sure all the nodes will be removed after the middle point 

