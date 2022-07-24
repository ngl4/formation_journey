/*
Given a linked list, delete (k) nodes after the middle. 
If (n) is the length of the list, the middle node is [n / 2] using zero-based indexing.
Return the head of the modified list.
Function Signature: 
function deleteKNodesAfterMiddle(head)

(BE AWARE CINDY: IT is not related to delete every kth node after the middle, 
    but it is regarding to delete K nodes after the middle )

Questions: 
- input head is null or 1 node, should we just return the head? return head 
- even or odd number elements in a linked list - what is the mid point for even number of elements in a linked list? (for this problem, we will consider smaller mid point for even)
- if k > number of nodes after the middle, what should we return (modified or not modified)?  - need to remove all nodes after the middle when k > mid


Approaches:  K >= 0
h   1 2 3 4    k: 2      k  = 0   mid != nulll
                        i = 2
d 0 1 2 3 4     middle = 2 3 4
                           / /
          f             
      s  
- Find the middle node (fast and slow pointers)
- traverse middle node as long as k > 0
    k--


Time: O(2n) => 0(n) 
Space: O(n) => 0(n) 

*/

class ListNode {
    constructor(value, next = null) {
      this.value = value; 
      this.next = next;
    }
  }
  
  const deleteKthNodeAfterMiddleNode = (head, k) => {
  
    if(!head) {
      return head; 
    }
  
    let fast = new ListNode(0, head); 
    let slow = new ListNode(0, head);
    
    while(fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }
  
    let middle = slow; 
  
    while (middle !== null && k >= 0) {
      middle = middle.next;
      k--;
    }
  
    slow.next = middle; 
  
    return head;
  }
  
  
  
  
  
  /*
  
  1, 2, null      k = 3
        ^
     
  
  
  
  Test Cases:
  list = [1, 2, 3, 4], k = 2 => [1, 2]
  list = [1], k = 0 => `[1]`
  list = [2, 9, 4, 1, 7], k = 3 => [2, 9, 4]
  */
  
  const list1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))); 
  const list2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))); 
  const list3 = new ListNode(1); 
  const list4 = new ListNode(2, new ListNode(9, new ListNode(4, new ListNode(1, new ListNode(7))))); 
  
  console.log(deleteKthNodeAfterMiddleNode(list1, 1)); //[1, 2, 4]
  //  console.log(deleteKthNodeAfterMiddleNode(list2, 5)); //[1, 2]
  // console.log(deleteKthNodeAfterMiddleNode(list3, 0)); //[1]
  // console.log(deleteKthNodeAfterMiddleNode(list4, 3)); //[2, 9, 4]
  
  
  