
/*
(Medium Recursive problem)
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

2^5 = 32

2 * 2 * 2 * 2 * 2 = 32 O(n)

2 * 2 = 4 * 4 = 16

2^12 = 32
 0  1  2  4   8
[1, 2, 4, 16, 256]
    ^

2 * 2 = 4 * 4 = 16 * 16 = 256 * 16
        2       4          8       

1. keep doubling down until the next double down is too big
2. keep ramping down to multiply by the highest multiple that isn't too big
3. eventually, you'll end up matching the multiple we're targeting

2 ^ n
2 ^ 102
1
2
4 
8
16
32
64

2^64*2^32 = 2^96*2^4 = 2^100 
1.................................102


              ^
*/



/*
[1, 3, 3, 5]
    1  2
iterate over array in any order
add to running sum

   3 <
 6    5 < 
0 2  1   <

3 5 1
currow <-
nextrow >

1 -> 2
         i

function doesSomething(input) {
  if (!input) {
    return
  }
  while (input && input.next) { // input.next && input
    input = input.next.next
  }
}         
*/
/*
notes:
Senitinel node useful when first node or more of the list might be modified.
reverse engineer and ensure code works for all cases otherwise come up with a counter example
counter : first node is === target 
counter: all nodes are target nodes

example:
-remove node with target value

question to ask for interview:

for target removal
Do you remove all of that instance or not?
do you remove the first one or all of them?
1 -> 3 -> 3 -> 5
target: 3
*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
  }
  
  /*
  1 -> 3 -> 5
  
  target: 3
  1 
  
  target: 1
  3 -> 5
   
  target: 6
  1 -> 3 -> 5
  1 -> 3 -> 3 -> 5
  c
  target: 3
  1 -> 5
   
  
  0  -> 5
  s   
        c      
  target: 1
  1 -> 5
  
  0 -> null
  
  remove the first node in a linked listd
  yes - x  xxxxx
  no - xxxxxxXx
  
  prepend a node to a linked list
  yes xxxxxxxxxx
  no XXxx
  */
  
  /*
  prepend a node to your linked list, and return the new head of the list
  1 -> 3
  n
  
  target = 
  4 -> 1 -> 3
  k = 1
  1 -> 3
  
  k = 2
  4 -> 3
  
  remove the kth element from the linked list
  k = position/inde
  remove(node, k)
  yes xxxxxxx
  no xxxx
  maybe xx
  
  0 -> 1 -> 2 -> 3 -> 4 -> 5
  s
            c
  k = 3
  counter = 3
  c
  */
  
  function removeKthFromLL_sentinel(node, k) {
    let dummy = new Node(0)
    dummy.next = node
    curr = dummy
    while (k > 1) {
      curr = curr.next
      k -= 1
    }
    curr.next = curr.next.next
    return dummy.next
  }
  function removeKthFromLL(node, k) {
    curr = node
    if (k == 1) {
      return node.next
    }
    while (k > 2) {
      curr = curr.next
      k -= 1
    }
    curr.next = curr.next.next
    return node
  }
  function prependNode(node, target) {
    let newNode = new Node(target)
    newNode.next = node
    return newNode
  }
  
  function removeFirst(node) {
    if (!node) {
      return null
    }
    return node.next
  }
  
  function remove_sentinel(node, target) {
    let dummy = new Node(0)
    dummy.next = node
    let curr = dummy
    while (curr && curr.next) {
      if (curr.next.value == target) {
        curr.next = curr.next.next
      } else {
        curr = curr.next
      }
    }
    return dummy.next
  }
  
  function remove(node, target) {
    let head = node
    while (head && head.value == target) {
      head = head.next
    }
    let curr = head
    while (curr && curr.next) {
      if (curr.next.value == target) {
        curr.next = curr.next.next
      } else {
        curr = curr.next
      }
    }
    return head
  }
  
  