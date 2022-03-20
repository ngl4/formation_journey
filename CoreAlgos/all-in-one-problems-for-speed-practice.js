/*
LINKED LIST 
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
  

  /*
  Q. Given a sorted linked list, insert an element in the appropriate position.
  
  Examples:
  • Given a linked list: 1 ➞ 3 ➞ 4, target: 2 // returns 1 ➞ 2 ➞ 3 ➞ 4
  • Given an empty linked list, target: 1  // returns 1
  
  */
  
  
  function insert(head, target) {
  
  }
  
  // Test Cases
  // var LL1 = new ListNode(1, new ListNode(3, new ListNode(4)))
  // var LL2 = new ListNode(-3, new ListNode(-2, new ListNode(-1)))
  // console.log(arrayify(insert(LL1, 2))) // [1, 2, 3, 4]
  // console.log(arrayify(insert(LL2, -4))) // [-4, -3, -2, -1]
  // console.log(arrayify(insert(LL2, 0))) // [-3, -2, -1, 0]
  // console.log(arrayify(insert(null, 1))) // [1]
  
  
  
  /*
  Algo: Is linked list sorted (recursive)
  
  Given a linked list, return true if the values are sorted, false otherwise. You must solve this recursively.
  
  */
  
  const isLLSortedRecursive = (head) => {
  
    }
    
    
    // var LL1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5)))); 
    // var LL2 = new ListNode(2, new ListNode(1, new ListNode(3))); 
    // var LL3 = new ListNode(1); 
    // var LL4 = new ListNode(5, new ListNode(9, new ListNode(10))); 
    // var LL5 = new ListNode(null); 
    // console.log(isLLSortedRecursive(LL1)) //true
    // console.log(isLLSortedRecursive(LL2)) //false
    // console.log(isLLSortedRecursive(LL3)) //true
    // console.log(isLLSortedRecursive(LL4)) //true
    // console.log(isLLSortedRecursive(LL5)) //null
  
  
  /*
  Algo: Remove every other element in linked list (recursive)
  
  Remove every other node in a linked list, starting from the second node. You must return the head of the updated list. You must solve this recursively.
  
  - recursive is to do a callback of the original function 
  
  
  1 null ->  return the same LL
  c
  
  1 2 null -> 1 null
  c
  
  if (curr.next) move to the next node 
  1 2 3 null -> 1 3 null
  c
  
  
  Input5: 1 → 1 → 2 → 3 → 5 → 8 → 13
  Output5: 1 → 2 → 5 → 13
  
  
  */
  
  const removeEveryOtherElemRecursiveLL = (head) => {
  
  }
  
  // const LL1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))); 
  // const LL2 = new ListNode(1); 
  // const LL3 = new ListNode(null); 
  // const LL4 = new ListNode(1, new ListNode(2, new ListNode(3))); 
  // const LL5 = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5, new ListNode(8, new ListNode(13))))))); 
  // console.log(arrayify(removeEveryOtherElemRecursiveLL(LL1))); 
  // console.log(arrayify(removeEveryOtherElemRecursiveLL(LL2))); 
  // console.log(arrayify(removeEveryOtherElemRecursiveLL(null))); 
  // console.log(arrayify(removeEveryOtherElemRecursiveLL(LL4))); 
  // console.log(arrayify(removeEveryOtherElemRecursiveLL(LL5))); 
  
  
  /*
  
  Algo: Sandwich a linked list with value
  
  Given a linked list, add a target value to the head and tail of it. 
  
  Examples
  
  Input1: 1 → 3 → 5, k = 2
  Output1: 2 → 1 → 3 → 5 → 2
  
  target: 2
  
  sentinel1
  x 1 3 5
  c^
  
  add head to the linked list - 2 1 3 5
  
  sentinel2
  
  2 1 3 5 null
  c     ^ (next)
  
  add tail to the linked list - 2 1 3 5 2
  
  return sentinel2.next
  
  
  */
  
  const sandwichLL = (head, target) => {
  
  }
  
  // const LL1 = new ListNode(1, new ListNode(3, new ListNode(5))); 
  // const LL2 = new ListNode(1); 
  // const LL3 = new ListNode(1, new ListNode(3)); 
  // console.log(arrayify(sandwichLL(LL1, 2))); //[2, 1, 3, 5, 2]
  // console.log(arrayify(sandwichLL(LL2, 2))); //[2, 1, 2]
  // console.log(arrayify(sandwichLL(LL3, 2))); //[2, 1, 3, 2]
  
  /*
  
  Algo: Is middle element of linked list even?
  
  (1) Find the middle elem 
  (2) If even LL, use the first of the two middle elements
  (3) return bool based on middle elem is even or not
  
  1
  f
  s
  
  1 2 null
  f
  s
  
  1 2 3
      f
    s
  
  1 2 3 4 null
      f
    s
  
  1 2 3 4 5
          f
      s
  
  1 2 3 4 5 6 null
          f
      s
  
  */
  
  const isMiddleElemEvenLL = (head) => {
  
  }
  
  // const LL1 = new ListNode(3, new ListNode(4, new ListNode(5))); 
  // const LL2 = new ListNode(3); 
  // const LL3 = new ListNode(3, new ListNode(3, new ListNode(5))); 
  // const LL4 = new ListNode(3, new ListNode(4)); 
  // const LL5 = new ListNode(null); 
  // const LL6 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))); 
  // console.log(isMiddleElemEvenLL(LL1)); //true
  // console.log(isMiddleElemEvenLL(LL2)); //false
  // console.log(isMiddleElemEvenLL(LL3)); //false
  // console.log(isMiddleElemEvenLL(LL4)); //false
  // console.log(isMiddleElemEvenLL(LL5)); //null
  // console.log(isMiddleElemEvenLL(LL6)); //true
  
  
  
  
  
  /*
  Algo: Is linked list sorted (iterative)
  
  1 2 3 4
  c
  */ 
  
  const isLLSorted = (head) => {
  
  }
  
  
  // var LL1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5)))); 
  // var LL2 = new ListNode(2, new ListNode(1, new ListNode(3))); 
  // var LL3 = new ListNode(1); 
  // var LL4 = new ListNode(5, new ListNode(9, new ListNode(10))); 
  // var LL5 = new ListNode(null); 
  // console.log(isLLSorted(LL1)) //true
  // console.log(isLLSorted(LL2)) //false
  // console.log(isLLSorted(LL3)) //true
  // console.log(isLLSorted(LL4)) //true
  // console.log(isLLSorted(LL5)) //null
  
  
  /*
  Algo: Remove every other element in a linked list (iterative)
  
  Prompt
  Remove every other node in a linked list, starting from the second node. You must return the head of the updated list. You must solve this iteratively.
  
  
  1 3 null
    c
  
  */
  
  // class ListNode {
  //   constructor(value = 0, next = null) {
  //       this.value = value
  //       this.next = next
  //   }
  // }
  
  // function arrayify(head) {
  //     let ptr = head
  //     var array = []
  //     while (ptr != null) {
  //         array.push(ptr.value)
  //         ptr = ptr.next
  //     }
  //     return array
  // }
  
  const removeEveryOtherElemLL = (head) => {
    // let curr = head; 
    // while (curr.next) {
    //     curr.next = curr.next.next; 
    //     if(curr.next) curr = curr.next; 
    // }
    // return head; 
  }
  
  
  // Test Cases
  // var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
  // var LL2 = new ListNode(1);
  // var LL3 = new ListNode(1, new ListNode(2, new ListNode(1))); 
  // var LL4 = new ListNode(1, new ListNode(2, new ListNode(1, new ListNode(4)))); 
  // console.log(arrayify(removeEveryOtherElemLL(LL1))); // 13 5 7
  // console.log(arrayify(removeEveryOtherElemLL(LL2))) // 
  // console.log(arrayify(removeEveryOtherElemLL(LL3))) // 
  // console.log(arrayify(removeEveryOtherElemLL(LL4))) // 
  
  
  /*
  Redo Core Algo: Find Kth Element from the end a Linked List in One Pass
  
  Q. Given a linked list, return the kth element from the end of the list.
     If the k exceeds the length of the list, return -1.
  
  Examples:
  • Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 1 // returns 10
  • Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 2 // returns 7
  • Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10, k: 7 // returns -1
  
  13 1 5 3 7 10
                f
             s
  
  */
  
  // class ListNode {
  //   constructor(value = 0, next = null) {
  //       this.value = value
  //       this.next = next
  //   }
  // }
  
  function kthFromLast(head, k) {
  
  }
  
  // // Test Cases
  // var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
  // console.log(kthFromLast(LL1, 1)) // 10
  // console.log(kthFromLast(LL1, 3)) // 3 
  // console.log(kthFromLast(LL1, 6)) // 13
  // console.log(kthFromLast(LL1, 7)) // -1
  
  
  /*
  
  Redo Core Algo: Append an Element to a Linked List (iterative)
  Redo Core Algo: Append an Element to a Linked List (recursive)
  
  Q. Given a linked list, append an element with a target value to the list iteratively.
  
  Examples:
  • Given a linked list: 1 ➞ 4 ➞ 5, target: 7 // returns 1 ➞ 4 ➞ 5 ➞ 7
  • Given a linked list: 0, target 7 // returns 0 ➞ 7
  
  */
  
  // class ListNode {
  //     constructor(value = 0, next = null) {
  //         this.value = value
  //         this.next = next
  //     }
  // }
  
  // function arrayify(head) {
  //     let ptr = head
  //     var array = []
  //     while (ptr != null) {
  //         array.push(ptr.value)
  //         ptr = ptr.next
  //     }
  //     return array
  // }
  
  function append(head, target) {
  
  }
  
  
  
  // Test Cases
  // var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
  // console.log(arrayify(append(null, 1))) // [1]
  // console.log(arrayify(append(LL1, 7))) // [1, 4, 5, 7]
  // console.log(arrayify(append(new ListNode(), 7))) // [0, 7]
  
  /*
  Redo Core Algo: Sum Elements in a Linked List (iterative)
  Redo Core Algo: Sum Elements in a Linked List (recursive)
  
  Q. Given a linked list, sum all elements in the list.
  
  Examples:
  • Given a linked list: 1 ➞ 4 ➞ 5 // returns 10
  • Given a linked list: 1 // returns 1
  
  */
  
  // class ListNode {
  //     constructor(value = 0, next = null) {
  //         this.value = value
  //         this.next = next
  //     }
  // }
  
  function sum(node) {
    //recursive 
    // if (!node) return 0; 
    // let total = 0; 
    // total += node.value; 
    // return total + sum(node.next); 
  
    //iterative 
      // let total = 0; 
      // let curr = node; 
      // while (curr) {
      //   total += curr.value; 
      //   curr = curr.next; 
      // }
      // return total; 
  }
  
  // Test Cases
  // var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
  // console.log(sum(null)) // 0
  // console.log(sum(LL1)) // 10
  // console.log(sum(new ListNode(1))) // 1
  
  /*
  Redo Core Algo: Reverse a Linked List
  
  Examples:
  • Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10 // returns 10 ➞ 7 ➞ 3 ➞ 5 ➞ 1 ➞ 13
  • Given a linked list: 1 // returns 1
  
  */
  // class ListNode {
  //   constructor(value = 0, next = null) {
  //       this.value = value
  //       this.next = next
  //   }
  // }
  
  // function arrayify(head) {
  //   let ptr = head
  //   var array = []
  //   while (ptr != null) {
  //       array.push(ptr.value)
  //       ptr = ptr.next
  //   }
  //   return array
  // }
  
  function reverse(head) {
  
  }
  
  // Test Cases
  // var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
  // console.log(arrayify(reverse(new ListNode(1)))) // [1]
  // console.log(arrayify(reverse(new ListNode(1, new ListNode(2))))) // [2, 1]
  // console.log(arrayify(reverse(LL1))) // [10, 7, 3, 5, 1, 13]
  
  
  /*
  Redo Core Algo: Count Elements in a Linked List (iterative)
  Redo Core Algo: Count Elements in a Linked List (recursive)
  
  Q. Given an unsorted linked list, count the number of elements (iteratively or recursively).
  
  Examples:
  • Given a linked list: 1 ➞ 4 ➞ 5 // returns 3
  • Given a linked list: 0 // returns 1
  
  */
  
  // class ListNode {
  //   constructor(value = 0, next = null) {
  //       this.value = value
  //       this.next = next
  //   }
  // }
  
  function count(head) {
  
  }
  
  // // Test Cases
  // var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
  // console.log(count(null)) // 0
  // console.log(count(LL1)) // 3
  // console.log(count(new ListNode())) // 1
  
  /*
  
  Redo Core Algo: Find Max Element in a Linked List (iterative)
  Redo Core Algo: Find Max Element in a Linked List (recursive)
  
  Q. Given an unsorted linked list, find the element with the largest value.
  
  Examples:
  • Given a linked list: 1 ➞ 4 ➞ 5 ➞ 1 // returns 5
  • Given a linked list: 1  // returns 1
  
  */
  
  // class ListNode {
  //   constructor(value = 0, next = null) {
  //       this.value = value
  //       this.next = next
  //   }
  // }
        
  function findMax(node) { 
    // if (!node.next) {
      // console.log(node.value); 
      // return node.value; 
    // }
    // else {
      // const max = findMax(node.next); //going all the way to the last node in the linked list and moving backward to the beginning of a linked list 
      // console.log(max); //5
      // console.log(node.next); 
      // console.log(node.value); 
      // return node.value > max ? node.value : max; 
    // }
  
    //recursive (still need to practice!!! )
    // if (!node.next) {
    //   return node.value; 
    // }else {
    //   const maxVal = findMax(node.next); 
    //   return (node.value > maxVal ? node.value : maxVal); 
    // }
  
    //iterative
    // let curr = node; 
    // let max = -Infinity; 
    // while (curr) {
    //   if (curr.value > max) max = curr.value; 
    //   else curr = curr.next; 
    // }
    // return max; 
  }
  // Test Cases
  // var LL1 = new ListNode(1, new ListNode(4, new ListNode(5, new ListNode(1))))
  // var LL2 = new ListNode(7, new ListNode(1, new ListNode(5, new ListNode(1))))
  // var LL3 = new ListNode(-1, new ListNode(-3, new ListNode(-5, new ListNode(0, new ListNode(-11)))))
  // console.log(findMax(LL1)) // 5
  // console.log(findMax(LL2)) // 7
  // console.log(findMax(LL3)) // 0
  // console.log(findMax(new ListNode(1))) // 1
  
  /*
  
  Redo Core Algo: Find Element in a Sorted Linked List
  
  
  Q. Given a sorted linked list of unique integers, check if the list contains an element with a target value.
  
  Examples:
  • Given a linked list: 2 ➞ 3 ➞ 5, target: 2 // returns True
  • Given a linked list: 2 ➞ 3 ➞ 5, target: 4  // returns False
  
  */
  // class ListNode {
  //   constructor(value = 0, next = null) {
  //       this.value = value
  //       this.next = next
  //   }
  // }
  
  // function search(head, target) { 
  //   if (!head) return false; 
  //   let curr = head;
  //   while (curr) {
  //     if (curr.value === target) {
  //       return true; 
  //     }
  //     curr = curr.next; 
  //   }
  //   return false; 
  // }
  
  // Test Cases
  // let LL1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(10)))))))
  // console.log(search(null, 1)) // false
  // console.log(search(LL1, 2)) // true
  // console.log(search(LL1, 4)) // false
  // console.log(search(LL1, -1)) // false
  // console.log(search(LL1, 10)) // true
  // console.log(search(LL1, 11)) // false
  
  /*
  Redo Core Algo: Remove All Nodes with value in a Linked List
  
  Q. Given a linked list and a target integer, remove all nodes with the value target.
  
  Examples:
  • Given a linked list: 4 ➞ 2 ➞ 3 ➞ 2 ➞ 2, target: 2 // returns 4 ➞ 3
  • Given a linked list: 4, target: 4  // returns an empty list
  */
  
  // class ListNode {
  //   constructor(value = 0, next = null) {
  //       this.value = value
  //       this.next = next
  //   }
  // }
  
  // function arrayify(head) {
  //   let ptr = head
  //   var array = []
  //   while (ptr != null) {
  //       array.push(ptr.value)
  //       ptr = ptr.next
  //   }
  //   return array
  // }
  
  function remove(node, target) { 
  
  }
  
  // Test Cases
  // var LL1 = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(2)))))))
  // var LL2 = remove(null, 1);
  // console.log(arrayify(LL2)) // []
  // LL1 = remove(LL1, 1);
  // console.log(arrayify(LL1)) // [4, 2, 3, 2, 2] 
  // LL1 = remove(LL1, 2);
  // console.log(arrayify(LL1)) // [4, 3]
  // LL1 = remove(LL1, 3);
  // console.log(arrayify(LL1)) // [4]
  // LL1 = remove(LL1, 4);
  // console.log(arrayify(LL1)) // []
  
  // NOTE: If you're removing the head node, you need to reassign LL1 or it will still point to the old head! 
  
  
  /*
  Redo Core Algo: Linked List Sum Two Lists
  
  ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
  ✏️ Description
  ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
  Q. Given two linked lists of equal length, sum elements' value at the same position.
  
  Examples:
  • Given two linked lists: 1 ➞ 3 ➞ 5 and -1 ➞ 3 ➞ -10 // returns 0 ➞ 6 ➞ -5
  • Given two linked lists: 0 and 0 // returns 0
  
  */
  
  // class ListNode {
  //   constructor(value = 0, next = null) {
  //       this.value = value
  //       this.next = next
  //   }
  // }
  
  // function arrayify(head) {
  //   let ptr = head
  //   var array = []
  //   while (ptr != null) {
  //       array.push(ptr.value)
  //       ptr = ptr.next
  //   }
  //   return array
  // }
  
  function sumTwoLL(head1, head2) {
  
  }
  
  // Test Cases
  // var LL1 = new ListNode(1, new ListNode(3, new ListNode(5)))
  // var LL2 = new ListNode(-1, new ListNode(3, new ListNode(-10)))
  // console.log(arrayify(sumTwoLL(LL1, LL2))) // [0, 6, -5]
  // console.log(arrayify(sumTwoLL(new ListNode(0), new ListNode(0)))) // [0]
  
  
  
  
  /*
  Redo Core Algo: Find Middle Elem in one pass
  ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
  ✏️ Description
  ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
  Q. Given a linked list, find the middle element in one pass. If the length of the list is even, return the first of the two middle nodes.
  Follow-up: What if we want to return the second of the two middle nodes in lists with even numbers of nodes?
  
  Examples:
  • Given a linked list: 1 ➞ 3 ➞ 5 // returns 3
  • Given a linked list:  1 ➞ 2 ➞ 3 ➞ 4 // returns 2
  
  
  1 2 3 4
      f
    s
  
  */
  
  // class ListNode {
  //   constructor(value = 0, next = null) {
  //       this.value = value
  //       this.next = next
  //   }
  // }
  
  function findMiddle(head) {
  
  }
  
  // Test Cases
  // var LL1 = new ListNode(1, new ListNode(3, new ListNode(5)))
  // var LL2 = new ListNode(1, new ListNode(3, new ListNode(-13, new ListNode(-3, new ListNode(1)))))
  // var LL3 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
  // console.log(findMiddle(null)) // null
  // console.log(findMiddle(LL1)) // 3
  // console.log(findMiddle(LL2)) // -13
  // console.log(findMiddle(LL3)) // 2
  // console.log(findMiddle(new ListNode(1))) // 1
  
  
  
  /*
  ARRAY (SORTING)
  
  */
  
  /*
  Learn Core Algo: Merge Sort
  
  Q. Given an unsorted array, perform merge sort in ascending order.
  
  Examples:
  • Given an array: [1] // returns [1]
  • Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]
  
  */
  
  // function mergeSort(array) {
  //   if (array.length < 2) return array; 
  //   let mid = Math.floor(array.length/2); 
  //   let left = array.slice(0, mid); 
  //   let right = array.slice(mid); 
  //   return merge(mergeSort(left), mergeSort(right)); 
  // }
  
  // function merge(left, right){
  //   let res = []; 
  //   while (left.length && right.length) {
  //     if (left[0] < right[0]) res.push(left.shift()); 
  //     else res.push(right.shift()); 
  //   }
  //   const leftclone = left.slice(); 
  //   const rightclone = right.slice(); 
  //   return res.concat(leftclone, rightclone); 
  // }
  
  // Test Cases
  // console.log(mergeSort([])) // []
  // console.log(mergeSort([1])) // [1]
  // console.log(mergeSort([3, 1, 2, 4])) // [1, 2, 3, 4]
  // console.log(mergeSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]
  
  
  /*
  Learn Core Algo: Selection sort
  
  Q. Given an unsorted array, perform selection sort in ascending order.
  
  Examples:
  • Given an array: [1] // returns [1]
  • Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]
  
  */
  
  function selectionSort(array) {
      // for (let i = 0; i < array.length; i++) {
      //   let min = i; 
      //   for (let j = i + 1; j < array.length; j++) {
      //     if (array[j] < array[min]) min = j; 
      //   }
      //   if (min !== i) {
      //     [array[i], array[min]] = [array[min], array[i]]; 
      //   }
      // }
      // return array;
  }
  
  // Test Cases
  // console.log(selectionSort([])) // []
  // console.log(selectionSort([1])) // [1]
  // console.log(selectionSort([3, 1, 2, 4])) // [1, 2, 3, 4]
  // console.log(selectionSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]
  
  
  /*
  Learn Core Algo: Insertion Sort
  
  Q. Given an unsorted array, perform insertion sort in ascending order.
  
  Examples:
  • Given an array: [1] // returns [1]
  • Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]
  
  */
  
  function insertionSort(array) {
      // for (let i = 1; i < array.length; i++) {
      //   let key = array[i]; 
      //   let j = i - 1; 
      //   while (j >= 0 && key < array[j]) {
      //     array[j + 1] = array[j]; 
      //     j--;
      //   }
      //   array[j + 1] = key; 
      // }
      // return array; 
  }
  
  // Test Cases
  // console.log(insertionSort([])) // []
  // console.log(insertionSort([1])) // [1]
  // console.log(insertionSort([3, 1, 2, 4])) // [1, 2, 3, 4]
  // console.log(insertionSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]
  
  
  /*
  Learn Core Algo: Bubble Sort
  
  Q. Given an unsorted array, perform bubble sort in ascending order.
  
  Examples:
  • Given an array: [1] // returns [1]
  • Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]
  
  */
  
  function bubbleSort(array) {
  
  }
  
  // Test Cases
  // console.log(bubbleSort([])) // []
  // console.log(bubbleSort([1])) // [1]
  // console.log(bubbleSort([3, 1, 2, 4])) // [1, 2, 3, 4]
  // console.log(bubbleSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]
  
  /*
  ARRAY 
  
  */
  
  /*
  Learn Core Algo: Binary Search
  
  Q. Given a sorted array of unique positive integers and a target integer, check if the array contains a target using binary search and return its index. If the array does not contain the target, return -1.
  
  Note:
  • Indexes (indices) follow the zero-based numbering rule (i.e. the index of the first element of an array is 0, not 1). 
  
  Examples:
  • Given an array: [1, 2, 3, 6, 8, 13, 113, 153, 200], target: 1 // returns 0
  • Given an array: [1, 2, 3, 6, 8, 13, 113, 153, 200], target: 200 // returns 8
  • Given an array: [1, 2, 3, 6, 8, 13, 113, 153, 200], target: 154 // returns -1
  */
  
  function binarySearch(array, target) {
  
  }
  
  // Test Cases
  // var array = [1, 2, 3, 6, 8, 13, 113, 153, 200]
  // console.log(binarySearch(array, 1)) // 0
  // console.log(binarySearch(array, 200)) // 8
  // console.log(binarySearch(array, 8)) // 4
  // console.log(binarySearch(array, 154)) // -1
  
  
  /*
  Algo: Smallest element repeated k times
  
  Given an array and a target k, find the smallest element repeated k times in the array.
  
  Clarifying Questions:
  Input1: [1, 2, 3, 3], k = 0
  Output1: 0
  Input2: [1, 2, 3, 3, -1], k = 1
  Output2:  -1
  
  */ 
  
  const smallestElemRepeatedKtimesArray = (arr, k) => {
  
  }
  
  // console.log(smallestElemRepeatedKtimesArray([1,2,2,3], 2)); //2
  // console.log(smallestElemRepeatedKtimesArray([1], 1)); //1
  // console.log(smallestElemRepeatedKtimesArray([1,2], 3)); //0
  // console.log(smallestElemRepeatedKtimesArray([1,1,-1,3,4,-1,3], 2)); //-1
  // console.log(smallestElemRepeatedKtimesArray([], 4)); //0
  
  /*
  
  Learn Core Algo: Find First Element Repeated K Times
  ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
  ✏️ Description
  ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
  Q. Given an array of positive integers, find the first element that occurs k number of times. If no element occurs k times, return -1, and you may assume k is greater than 0. 
  
  Examples:
  • Given an array: [1, 2, 2, 3, 3], k: 2 // returns 2
  • Given an array: [], k: 1 // returns -1
  
  */
  
  function firstKTimes(array, k) {
  
  
  }
  
  // Test Cases
  // console.log(firstKTimes([1, 2, 2, 3, 3], 2)) // 2
  // console.log(firstKTimes([1, 2, 2, 3, 3], 3)) // -1
  // console.log(firstKTimes([], 1)) // -1
  
  
  /*
  
  Learn Core Algo: Number of Unique Elements in an Array
  ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
  ✏️ Description
  ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
  Q. Given an unsorted array, return the number of unique elements that appear only once in the array.
  
  Examples:
  • Given an array: [3, 1, 1, 2, 3, 1, 1, 1, 4] // returns 2 (unique elements: 2 and 4)
  • Given an array: [1] // returns 1 (unique element: 1)
  
  */
  
  function numUniques(array) {
  
  }
  
  // Test Cases
  // console.log(numUniques([])) // 0
  // console.log(numUniques([3, 1, 1, 2, 3, 1, 1, 1, 4])) // 2
  // console.log(numUniques([1])) // 1
  
  /*
  BINARY TREE
  
  */
  
  class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
  }
  
  
  function arrayifyTree(root) {
    if (!root) { return [] }
    var queue = []
    var array = []
    queue.push(root)
    while (queue.length !== 0) {
        var node = queue.shift()
        array.push(node.value)
        if (node.left) { queue.push(node.left) }
        if (node.right) { queue.push(node.right) }
    }
    return array
  }
  
  /*
  Learn Core Algo: Count Elements in a Binary Tree (iterative)
  Learn Core Algo: Count Elements in a Binary Tree (recursive)
  
  */
  
  function countTreeIterative(root) {
  }
  
  function countTreeRecursive(root) {
  }
  
  // Test Cases
  // console.log(countTreeIterative(null)) // 0
  // console.log(countTreeIterative(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
  // console.log(countTreeIterative(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 6
  // console.log(countTreeIterative(new TreeNode())) // 1
  
  
  // console.log(countTreeRecursive(null)) // 0
  // console.log(countTreeRecursive(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
  // console.log(countTreeRecursive(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 6
  // console.log(countTreeRecursive(new TreeNode())) // 1
  
  
  /*
  
  Find Max Element in a Binary Tree 
  
  Q. Given a binary tree, find the element with the largest value.
  
  Example:
  • Given a binary tree:
                   1
                  / \
                 7   3
                / \
               4   5
  // returns 7
  
  */
  
  function findTreeMax(root) {
   
  }
  
  // Test Cases
  // console.log(findTreeMax(null)) // null
  // console.log(findTreeMax(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
  // console.log(findTreeMax(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 29
  // console.log(findTreeMax(new TreeNode(1))) // 1
  
  
  
  /*
  Find Height of a Binary Tree 
  
  Q. Given a binary tree, find the height of the tree.
  
  Example:
  • Given a binary tree:
                   1
                  / \
                 7   3
                / \
               4   5
  // returns 2
  
  */
  
  function findTreeHeight(root) {
      // Write your code here.
      return -1
  }
  
  // Test Cases
  // console.log(findTreeHeight(null), -1)
  // console.log(findTreeHeight(new TreeNode(1, new TreeNode(2), new TreeNode(3))), 1)
  // console.log(findTreeHeight(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))), 3)
  
  
  
  /*
  Find Element in a Binary Tree Using DFS 
  
  Q. Given a binary tree and a target element's value, determine if the tree contains the target using depth first search (DFS).
  
  Examples:
  • Given a binary tree:
                   3
                  / \
                29   4
                /     \
               2       2
                      /
                     9
  • For target: 1 // returns False
  • For target: 2 // returns True
  
  */
  
  function DFSTree(root, target) { 
    // Write your code here.
    return false
  }
  
  function BFSTree(root, target) { 
  
  }
  
  // Test Cases
  var tree1 = new TreeNode(3, new TreeNode(29, new TreeNode(2)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))
  // console.log(DFSTree(null, 1)) // false
  // console.log(DFSTree(tree1, 9)) // true
  // console.log(DFSTree(tree1, 1)) // false
  // console.log(DFSTree(tree1, 2)) // true
  // console.log(DFSTree(new TreeNode(1), 2)) // false
  
  // console.log(BFSTree(null, 1)) // false
  // console.log(BFSTree(tree1, 9)) // true
  // console.log(BFSTree(tree1, 1)) // false
  // console.log(BFSTree(tree1, 2)) // true
  // console.log(BFSTree(new TreeNode(1), 2)) // false
  
  
  
  /*
  BINARY SEARCH TREE
  
  */
  
  /*
  Learn Core Algo: Validate a Binary Search Tree
  
  Q. Given a binary tree, determine if it is a valid binary search tree (BST).
  
  Examples:
  • Given a binary tree:
          2
         / \
        1   3
  // returns True
  
  • Given a binary tree:
          1
         / \
        2   3
  // returns False
  
  
  */
  
  
  function validateBST(tree) {
  
  }
  
  // Test Cases
  // var tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3))
  // var tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
  // var tree3 = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))
  // console.log(validateBST(null)) // true
  // console.log(validateBST(tree1)) // true
  // console.log(validateBST(tree2)) // false
  // console.log(validateBST(tree3)) // true
  // console.log(validateBST(new TreeNode())) // true
  
  
  /*
  
  Learn Core Algo: Insert Element into a Binary Search tree
  
  Q. Given a binary search tree and a target element's value, insert the target in the appropriate position.
  
  Examples:
  • Given a binary search tree:
                6
              /   \
             3     8
            / \ 
           2   4
  
  • For target: 7 // returns:
                6
              /   \
             3     8
            / \    /
           2   4  7
          /     \
         1       5
  
  • For target: 1 // returns:
                6
              /   \
             3     8
            / \
           2   4
          /
         1
  
  */
  
  
  function insertBST(root, target) {
  
  }
  
  // Test Cases
  // var tree = new TreeNode(6, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(8))
  
  // insertBST(tree, 7)
  // console.log(arrayifyTree(tree), [6, 3, 8, 2, 4, 7])
  // insertBST(tree, 5)
  // console.log(arrayifyTree(tree), [6, 3, 8, 2, 4, 7, 5])
  // insertBST(tree, 1)
  // console.log(arrayifyTree(tree), [6, 3, 8, 2, 4, 7, 1, 5])
  // var tree2 = insertBST(null, 1)
  // console.log(tree2.value, 1)
  
  // Final tree:
  //              6
  //            /   \
  //           3     8
  //          / \    /
  //         2   4  7
  //        /     \
  //       1       5
  
  /*
  
  Learn Core Algo: Find Element in a BST using DFS
  
  Q. Given a binary search tree and a target integer, check if the tree contains a target.
  
  Examples:
  • Given a binary search tree:
                    8
                  /   \
                 3     10
                / \      \
               1   6      14
                         /
                       13
  • For target: 4 // returns False
  • For target: 14 // returns True
  
  
  */
  
  
  
  function searchBST(root, target) {
  
  }
  
  // Test Cases
  // let tree = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))
  // console.log(searchBST(null, 1)) // false
  // console.log(searchBST(tree, 1)) // true
  // console.log(searchBST(tree, 14)) // true
  // console.log(searchBST(tree, 2)) // false
  // console.log(searchBST(tree, 13)) // true
  // console.log(searchBST(new TreeNode(), 0)) // true
  
  // Given tree:
  //                   8
  //                 /   \
  //                3     10
  //               / \      \
  //              1   6      14
  //                        /
  //                      13
  
  
  /*
  DYNAMIC PROGRAMMING - FIBONACCI SEQUENCE 
  
  Q. Write a function which returns the Kth element of the Fibonacci sequence. The Fibonacci sequence is defined as a sequence in which each number is the sum of the preceding two numbers in the sequence. For the purpose of this question, the first two terms of the sequence are both 1, i.e. fib(0) = fib(1) = 1.
  
  Examples:
  Input: k = 2
  Output: 2
  Explanation:
  fib(2) = fib(0) + fib(1) = 1 + 1 = 2
  
  */
  
  function fib(k) { // number -> number
  
  }
  
  // Test Cases
  // console.log(fib(0)) // 1
  // console.log(fib(5)) // 8
  // console.log(fib(11)) // 144