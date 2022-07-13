/*

finddirectancestor(tree, a, b)

input = tree, A, B 

reutrn True or False 

TreeNode(1, TreeNode(2))
     3
   2   4
 1 0   5 6
          7

2, 4 -> False
2, 0 -> True
3, 0 -> True

2 5 7

DFS - xxxxxxxxx <- stack
BFS - xx <- queue

Tree equivalent of for loops:

Recursive DFS
Iterative DFS
Iterative BFS


arr = [1, 2, 3]

*/
/*
     3
   2   4
 1 0   5 6
          7

2, 4 -> False
2, 0 -> True <--
3, 0 -> False

*/
function findDirectParent(tree, a, b) {
    let stack = [tree]
    while (stack.length) {
      let node = stack.pop()
      if (node.val == a) { 
        if((node.left && node.left.val == b) || 
           (node.right && node.right.val == b)) {
          return true
        }
      }
      if (node.left) {
        stack.push(node.left)
      }
      if (node.right) {
        stack.push(node.right)
      }
    }
    return false
  }
  /*
       3
     2<   4
   1 0   5 6
            7
  
  2, 4 -> False
  2, 0 -> True
  3, 0 -> True
  2, 2 -> False
  
  */
  
  /*
       3
     2   4
   1 0   5 6
            7
  a = 2, b = 2 -> False
  
  
  2
  True: xxxxxx
  False: x
  No idea: xxx
  */
  function findDirectAncestor(parent, a, b) {
    let stack = [a]
    while (stack.length) {
      let node = stack.pop()
      if (node.value == a) {
        if (helper(node.left, b) || helper(node.right, b)) return true;
      }
      if (node.left) {
        stack.push(node.left)
      }
      if (node.right) {
        stack.push(node.right)
      }
    }
    return false;
  }
  
  /*
  [5, 2, 9]
  */
  function helper(node, target) {
    if (!node) return false;
    let queue = [node]
    while (queue.length) {
      let node = queue.shift()
      if (node.value == target) {
        return true
      }
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    return false
  }
  
  /*
  You are given an integer array cards of length 4. You have four cards, each containing a number in the range [1, 9]. You should arrange the numbers on these cards in a mathematical expression using the operators ['+', '-', '*', '/'] and the parentheses '(' and ')' to get the value 24.
  
  You are restricted with the following rules:
  
  The division operator '/' represents real division, not integer division.
  For example, 4 / (1 - 2 / 3) = 4 / (1 / 3) = 12.
  Every operation done is between two numbers. In particular, we cannot use '-' as a unary operator.
  For example, if cards = [1, 1, 1, 1], the expression "-1 - 1 - 1 - 1" is not allowed.
  You cannot concatenate numbers together
  For example, if cards = [1, 2, 1, 2], the expression "12 + 12" is not valid.
  Return true if you can get such expression that evaluates to 24, and false otherwise.
  
  [4 1 2 3]
  
  4 + [1 2 3] -> 20 
  4 - [1 2 3] -> 4 - (-20) = 24
  4 * [1 2 3] -> 4 * 6 = 24
  4 / [1 2 3] -> 4 / (1/6) = 24
  
  4 + 1 + 2 + 3 <-
            -
            *
            /
        - 2
        * 2
        / 2
    - 1
    * 1
    / 1
  
  twentyFour([1, 2, 3, 4], 24)
  
  x
  
  target:
  current:  
  target - current:xxxx
  target + current:xxx
  target * current:xxxx
  target / current:xxxx
  */
  /*
  [4, 2, 3, 4], target = 24
  rest = [2, 3, 4]
  current = 4
  
  4 + (24 - 4) = 4 + 20 = 24
  4 - (4 - 24) = 4 - (-20) = 24
  */
  function twentyFour(input, target) {
    if (input.length == 0) {
      return false
    }
    let rest = input.slice(1) // [2, 3, 4]
    let current = input[0]
    if (twentyFour(rest, target - current)) { // + operator
      return true
    }
    if (twentyFour(rest, current - target)) { // - operator
      return true
    }
    if (twentyFour(rest, target / current)) { // * operator
      return true
    }
    if (twentyFour(rest, current / target)) { // / operator
      return true
    }
    return false
  }
  