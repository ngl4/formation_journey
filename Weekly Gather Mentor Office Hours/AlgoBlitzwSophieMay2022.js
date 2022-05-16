/*
Feel free to ask questions about:
* Any of our core algorithms
* Any of our variations
* Runtime / space complexity
* Any techniques that you’ve learned
* Why certain things are important / not
* How to talk answer certain questions in interview settings

I am not great at answering:
* Any language specific questions

Questions
Add your questions with a name before it, like this:
* [sophie] What’s the runtime of inserting a node into a linked list? Sometimes I see that it’s O(n), sometimes it’s O(1)
* [sophie] Can you walk through the solution to reverse a linked list?

    1    2 -> 3
p   c    n
c.next = p
c = n
p = c
n = n.next

*[stephane] In a linked list, what node do we want to target in our while statement for appending and deleting node?

* [Noor] I'm confused about the fresh flapjacks problem. Not sure how to solve it. Could we please do it together? 

A restaurant has a dedicated cook in the mornings making flapjacks. As they're ready, they're removed from the griddle and added to a stack. Servers remove them from the stack to serve to customers. The manager wants the stack to never be taller than 4, to make sure things are fresh, but also never wants the stack to be empty so that at least one order can always be satisfied.

Write a function that takes a series of numbers that are numbers on pancakes being added and removed from the stack (positive for fresh off the griddle, negative for an order being served). return a tuple (or pair), the first value is true or false to reflect if the constraints are always satisfied, and the second value is the max height of the stack.

Function Signature
function flapjacks(array)
Expected Runtime
O(n)
Examples
flapjacks([2, -1]) => [true, 2]
flapjacks([-1, 2]) => [false, 1]
flapjacks([2, -1, 3, -3, 2, -1]) => [true, 4]

>=1, <=4

[2, 3, -3, 2, -1]
        ^
currentCount: 5

isValid = false
maxCount = 5
*/

function flapjacks(input) {
    let currentCount = 0
    let isValid = true
    let maxCount = 0
  
    for (let num of input) {
      currentCount += num
      isValid = isValid && currentCount >= 1 && currentCount <= 4
      maxCount = Math.max(maxCount, currentCount)
    }
  
    return [isValid, maxCount]
  }
  /*
  
    Answers:
    Q: [ronald] is a sentinal node the same thing as a dummy node? and is it okay to use dummy node technique liberaly so I can avoid a lot of the tedious edge cases?
      A: yes it is
    
    +1 [Larisa] Is there a trick/ way to know when to use a Sentinel node in a problem?
    Q: It resolves a number of edge cases in linked list when you are modifying the first node
    - Given a linked list, remove all nodes with value k
    - Given a linked list, insert a node at position k (useful because k might be 0 to 1)
      if (node == null) {
        return new Node(target)
      }
  
    [Cindy] I am working through this particular problem - https://leetcode.com/problems/binary-tree-level-order-traversal/ - I am wondering how to work on this same problem using DFS iterative and recursive approaches?
    - DFS is by definition wrong, according to the specs of this problem
    - We CAN write a recursive approach, but it's unnecessarily complex
    - [Nic] if you keep track of the depth you can technically solve using DFS
  
    [lucy] I'm working on finding the least frequent node in the binary tree. Would be great if we could do the solution together. 
    - least frequently occurring value in a binary tree
    Thank you very much!! Very clear, thank you again. +1
    
      Ex problem: Delete K Nodes After Middle In Linked List - dont need to use Sentinel correct? Yes
  
  
    Questions should be placed above "Answers" - This is the answers section
  */
  
  /*
      5
    4   5
        ^
  
  leastFrequent = 5  
  { 5: 2, 4: 1 }
  runtime: O(n)
  
  
  built-in in python:
  collections.Counter(frequency_dict).most_common()[-1][0]
  
  BFS
  DFS*
      3
    2   1
  0       4
  [2, 4]
  
  V index: 
  0x01 0x02 0x03
  [2     3]
  */
  
  function leastFrequentNode(root) {
    if (!root) {
      return null
    }
  
    let counts = {} // values to counts
    let nodes = [root]
    while (nodes.length) {
      let curr = nodes.pop() // O(n)
      counts[curr.value] = (counts[curr.value] || 0) + 1
  
      if (curr.left) {
        nodes.push(curr.left)
      }
      if (curr.right) {
        nodes.push(curr.right)
      }
    }
  
    let minNodeValue = root.value
    for (let value in counts) {
      if (counts[value] < counts[minNodeValue]) {
        minNodeValue = value
      }
    }
  
    return minNodeValue
  } 
  

  
  