"""
AGENDA

1. DFS vs BFS
2. Max Path sum
3. Level Order Traversal

"""

"""
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
"""


"""
Max Path Sum 

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

    1
   2 3
 Ans: 6


       -10
    10     20
        (15) (7)

15 + 20 + 7 = 42
10 + 100 + 20 + 15 = 


- global max variable => this var will hold the max path we've seen SO FAR

- base case: null tree => 0
- curr_value + max_sum(left_subtree) + max_sum(right_subtree), update max
- return curr_value + max(left, right)

global_max = -INF
def find_max(root):
    if not root: return 0

    left_max = find_max(root.left)
    right_max = find_max(root.right)

    max_passing_through_curr_node = root.val + left_max + right_max
    global_max = max(global_max, max_passing_through_curr_node)

    return max(0, root.val + max(left_max, right_max))


       -10
    10     20
        (15) (7)

global_max = 42
find_max(-10)
    left_max = 10
    right_max = 35
    max_passing_through_curr_node = -10 + 10 + 35 = 35
    return -10 + max(10, 35) =25
                
"""


"""
Level order traversal

Q. Given a binary tree, print level order traversal so that nodes of all levels are printed in several lines

Examples:
• Given a binary tree:
                 1
                / \ 
               2   3
// returns [[1], [2, 3]]

• Given a binary tree:
                 1
                / \
               2   3
              / \
             4   5
// returns [[1], [2, 3], [4, 5]]


from collections import deque

def bfs_by_queue(root):
    queue = deque([root]) # at least one element in the queue to kick start bfs
    while len(queue) > 0: # as long as there is an element in the queue 
        node = queue.popleft() # dequeue
        for child in node.children: # enqueue children
            if OK(child): # early return if problem condition met
                return FOUND(child)
            queue.append(child)
    return NOT_FOUND

"""


from collections import deque

class TreeNode:
    def __init__(self, value = 0, left = None, right = None):
        self.value = value
        self.left = left
        self.right = right
        

def right_side_view(root):
    queue = deque([root])
    res = []
    reversed = False
    while len(queue) > 0:
        level_size = len(queue)
        level = []
        for _ in range(level_size):
            node = queue.popleft()
            level.append(node.value)
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
        
        if reversed:
            res.append(level[::-1])
        else:
            res.append(level)
            
        reversed = not reversed
    return res


'''
     1
    2   3
 4    5

 res = [1, 3, 5]
 curr_level = []
 next_level = []
 q = []

'''

print(right_side_view(TreeNode(1, TreeNode(2), TreeNode(3)))) # [1, 3]
print(right_side_view(TreeNode(2, TreeNode(29, TreeNode(26)), TreeNode(4, None, TreeNode(2, TreeNode(9)))))) # [[2, 4, 2, 9]]