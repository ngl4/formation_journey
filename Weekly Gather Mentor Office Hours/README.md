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