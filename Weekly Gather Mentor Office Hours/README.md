#  Weekly Mentor Office Hours 

<!-- ## Algo Blitz w Sophie (May)

**Takeaways**
...

## Algo Marathon w Sophie (May)

**Takeaways**
... -->

## Algo Marathon - Array Subchallenge w Daniel (06/02/22)

**Takeaways**
- Make sure to keep track of the expressions, in the 2D matrix scenario, it means to keep a reference to an array (row) or number (column).
- An expression in Matrix is a reference to an array that contains other arrays
- Experession: `const matrix = [[1,2,3],[4,5,6],[7,8,9]]`
- Indexing Operator: `matrix[]`
- Compound Expression: `matrix[1]` - reference to the second array 
- `expression that evaluates to an array [an expression that evaluates to an integer index]`
- Keep track of where you are in the nested array, keep track of each part of the expression
-`Keep track of which dimension you are trying to loop over` - and then pick either `row major` or `column major` iterations
- Order of operation matters ~ `matrix[][]` goes from left to right 
- Create a `hoisted variable` to help to understand the problem/context better, ie, `const row = array[i]`, it would be easier to understand the pattern by seeing the term `row`, rather than `array[i]` especially when you are new to matrix problems. 
- For matrix problem, it is crucial to know that the runtime is `not O(n^2)`
- Time complexity is: `O(r * c)` r = number of rows, c = number of columns 
    - Linear time complexity based on the total size of the input 
- Space complexity is:`O(n)` the size of the output array 

**Reflection**
I really like this session! I feel like I have a much better understanding on how matrix traversal works! Thank you so much!!! 

## Algo Marathon w Daniel (06/02/22)

**Takeaways**
- Learn how to identify recursive pattern by seeing it more even in our daily life 
- Part of the tree will look like the rest of the tree 
- Recursion in Algo
```
Base case (how to end the recursive call)

Recursive Call 

Merge step 
```
- Recursive Data Structures: 
    - Linked List -> each node is the head of its own linked list 
    - Tree -> part of the subtree looks like the rest of the tree 
    - Stack (is not recursive data structure) - we can stimulate recursion using a stack, but stack itself is not a recursive data structure 

- BFS (Breadth First Search) is not recursive
- Practiced your recursive vision using `checklist and pattern` - it definitely requires practices to slowly identify recursive pattern. 


<!-- ## Algo Blitz w Sophie (06/09/22)

**Takeaways**
...

## Algo Marathon w Daniel (06/10/22)

**Takeaways** 
...-->

## Algo Marathon - Binary Tree Subchallenge w Nic (06/15/22)
Nic's first office hours ~ he did really well and went through a lot of great topics. One thing I like the most on Nic's mentorship is how he is able to go through the thought process in knowing what tools to pick that is more reasonable in a certain situation. And he will go through additional related questions/examples, that help you to see why it is crucial to know the big picture/`general template` (which Nic will be sharing soon...) of the how to apply the basics in BFS, DFS traversals in multiple scenarios. A small twist in the template (general tool) can basically be applied in multiple problems. 

**Takeaways**
- DFS vs BFS (the following are the notes Nic has went through during the session):
    - Biggest takeaways:
        - For a problem that requires you to find a node closer to the root of the tree, BFS is more prefereable - due to early termination ie, shortest branch/depth of a tree
        - Wide tree - BFS
        - Tall tree - DFS 
        - BST - in-order traversals

```js
/*
BFS vs DFS-

What is BFS?
Go as wide as you can before going deeper.
Start from the root, and go level by level.

What is DFS?
Go as deep as you can before trying another path.
Going all the way down to the leaf nodes before starting traversing to other paths

Find a node in a tree with value K

When to use BFS or DFS?
- In general, default to DFS for trees unless something really stands out as being order.

1) Terminating Conditions
If you have traverse all nodes, do it either

If node we want if close to root: BFS?
If node we want is far from the root: DFS

Q: What is the shortest branch/depth of a tree => BFS?

        1
     L      2
            ... 
                ...   

Q: Find if any leaf node has value 2?


2) Space Considerations

Tree is fat and wide => DFS v BFS
- Call stack is short for shallow tree
- Queue will be big for a fat/wide tree


3) Order of Traversal
Return kth smallest element in a BST

               5
          3          7
        2  4       6   9
       1              8 10

BFS: Traverse everything, store in another data structure? array/heap, and then from there find the kth smallest
DFS (in-order traversal): traverse, keep a counter, return when counter is K.

https://leetcode.com/problems/kth-smallest-element-in-a-bst/
https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/
https://leetcode.com/problems/inorder-successor-in-bst/


4) Order of Information

func basic_backtracking(root):
  if not root: return null
  left_info = solution(root.left)
  right_info = solution(root.right)
  new_info = {some processing with left_info and right_info}
  return new_info

you have to do DFS

https://leetcode.com/problems/validate-binary-search-tree/
- Base case: if it's an empty tree, => valid
- if not empty, then it's valid iff the left subtree is a valid and the right subtree is valid 
- if both sides valid, max(left_subtree) < curr_val < min(right_subtree)

https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

*/
```

- How Nic went through explaining recursion and the step by step testing process is what I find helpful! 
    - While Jiyoon was testing for the Level Order Traversal problem, I really like she was doing a manual test on her solution (see below): ~learning how to do `manual test` like this will be super helpful in checking through your codes in the interview situation when you do not have a compiler to test your output. Building up this skill is important! 

```py
'''
     1
    2   3
 4    5

 res = [1, 3, 5]
 curr_level = []
 next_level = []
 q = []

'''
```
- Through this session, it makes me realize how important the `big picture` is when going through a problem. Being able to dig through the algo as deep as possible and then look back down from the top and see how they can be apply in other similar problems using the similar skeleton (template). Thank you Nic for sharing his thought closer to the end of the session and I think this is when I realize I have not been doing my daily practice correctly. I have to step back and look through/compare problems after solving them. Instead of just solving the problem, I should be looking for commonality (this is where pattern comes in ~ and what a lot of mentors are saying - try to remember the pattern and not the codes). I guess I start to understand this phrase more at this point. Thanks to Nic! 

## Algo Marathon w Daniel (06/23/22)
- Went over three problems (Binary Tree to Sorted Doubly LL & Password Generator & a quick walkthrough on Find all anagrams in a string)

**Takeaways** 
- Problem 1 (Binary Tree to Sorted Doubly LL):
    - Possible Apporach: 
        - In-order traversal from left subtree to the root and then to the right subtree 
        - There is an `extra work` needed to this approach, why? 
            - The reason is we are `traversing` through the list (of the left subtree) to the last node and then added the root node to the end of the list, similarly for the list generated from the right subtree, we will then add it after the root node.  
    - Optimal Approach: 
        - Using In-order traversal (Left -> Root -> Right) in the reverse order 
        - Right -> Root -> Left 
        - Why? 
            - For a linked list data structure, it is the easiest to add a node to a LL at the `front`
            - This is why we start from the last node on the most right node of the right subtree and then reverse traverse back to the root then to the left subtree. 
            - The key of this approach is to keep track of the head (front of the LL)
        
- Problem 2 (Password Generator): 
    - Backtracking: Traversal of a decision tree (binary or nth-ary tree), enumeration, DFS
    - Choose or not choose a branch path 
    - Q: Why should we use a stack instead of a dictionary? 
        - The key answer is `does the order matters?` - so for this particular problem, using a stack can helps to keep track of the order of operation and it is easy to remove element at the end of the stack (constant time).
        - Dictionary does not take the `order` into consideration so it is not the best data structure to use to solve this backtracking problem
    - Q: Why should we use a stack instead of a string? 
        - String is immutable so everytime you slice it off, you are basically creating a new string for each recursion and that adds up more complexity to the problem, instead of `constant`, it is a `linear` complexity. 

- Problem 3 (Find all anagrams in a string): 
    - Also using backtracking approach 
    - the only difference in comparison with the Password Generator is it requires unique characters in its output.