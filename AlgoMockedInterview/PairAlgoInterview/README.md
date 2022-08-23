# Pair Algo Interview 

## William Meng (08/11/22) - interviewer - Brick Wall (Medium Leetcode)

[Here](https://leetcode.com/problems/brick-wall/) is the problem on Leetcode! 

Great session with William Meng 

**Reflection**
What I did not do well: 
- Took too long in visualizing andunderstanding the problem (only got the last 15 mins to make some progress on the problem)
    - Due to this reason, I did not get the chance to implement a solution to the problem 

- Did not ask enough questions to help myself to move along with the interview and to solve the problem! 
    - It is really cruical to remember that I should always ask questions to start and work on the engine in any possible ways. Use the resources that are available from the interview and from the problem example to help you along the way. Your interviewer already know the problem really well, so instead of focusing too much on figuring out by yourself. Ask questions when you are stuck so your interviewer can guide you in the right direction! 

What I did well: 
- Break the example problem into a smaller problem 
- Start to break down the smaller problem into even the most basic steps - ie, finding gaps in a row, and working my way back up again. (I am really glad I did not give up!)

**Takeaways**
- When analyzing different approaches to the problem, if you are already at time complexity `O(N)`, are you still able to do any better than that? and why? 

    - Let's look at this problem, is it possible to improve it to a `O(log N)` time? 
        - The quick answer is No - the gaps can be in random positions and they are not sorted so we are not able to identify any target position or which is the other half that you would be removed or focused on to find a certain gap position. 
        - It does not make sense so we can rule out if we can do better than linear `O(N)` time

- When you are solving the problem what does your brain do to help you recognized the pattern?

- The brute force solution always come in based on how you see it 
    - record every possible vertical lines 

- Use a different form of visualization to help you to view the problem 
    - If you are not entirely sure the best visualization to use, it is also okay to ask the interview what they find it is best to visualize the problem 
```js
/*
My initial Visualization: 

| |  |
|    |
| |  |

The delimiter represents the gap in between bricks 

William Meng Visualization on problem: 

[1][2222]
[3333333]
[1][2222]

The gap is where we are going to cut the vertical line at 
   V
[1] [2222]
[33333333]
[1] [2222]


Keys to understand the problem: 
- Know the gaps on each row 
- Where it is located from the left (or from the right) side of the wall
*/
```
- Optimized approach - to draw vertical line whenever we find a gap + save it in a map (key: the gap in position to the left of the wall; value: counter that a gap is found) + access it later to find the minimum bricks. Minium bricks can be found when we iterate through the map and conduct this calculation: the length of the input minus the gap counter -> this will help us to find the minimum bricks based on the least number we get. 


## Binh Hua (08/23/22) - interviewee - Subarray Sum equal to K (Medium Leetcode)

