# Algo Workout With ...

## Vinit Parikh 04/20/22 (Array)
 - [1 - js](https://github.com/ngl4/formation_journey/blob/main/AlgoWorkout/Vinit/04-20-22(1).js)
 - [2 - python](https://github.com/ngl4/formation_journey/blob/main/AlgoWorkout/Vinit/04-20-22(2).py)

**Reflection & Takeaways**

- Array problem: make sure to double check the following before you start walking through possible approaches to the engineering problem: 
    - Should the output array be **_sorted_** or **_non-sorted_**? 
        - Should the output array be **_maintained in order_** of the input array or it can be in **_any order_**? 
        ```js
        //input 
        [4, 3, 9, 6, 3]
        
        //remove duplicates in the array, which is 3 in this example

        //output (non-sorted/ MAINTAINED in order)
        [4, 3, 9, 6]

        //output (sorted/ ANY order)
        [3, 4, 6, 9]
        ```
    - Are we allowed to have extra space? 
        - this means we would like to know if the interviewer allows us to use a `Set`, `Map` (hashmap), another empty `Array` (extra space) that are used to store information. If your interviewer wants to challenge you a bit, they may not allow you to have extra space, but it is pretty rare in general. <br /><br />

- Compared Time and Space complexity, prioritize to optimize for Time Complexity first!!

- Js Built-in methods in JavaScript are mostly having an `O(n)` Time Complexity, ie, `.includes()`, `.filter()`, `.reduce()`, `.shift()`, `.unshift()` etc. Except for the following: 
    - `.push()` - O(1) - adding an item to the end of an array 
    - `.sort()` - O(nlogn) 
<br /><br />
- GOOD TO PRACTICE: built all the Js Built-in methods from scratch to see 

- Js Naming Convention 
    - function: make sure to begin with an action verb
    ```js
    //Good 
    function removeDuplicates() {}

    //Avoid:
    function noDuplicates() {}
    ```
    - function params: in real life, they should be more descriptive 
    ```js
    //Good 
    function removeDuplicates(input) {}

    //Avoid: 
    function removeDuplicates(array) {}
    ```
    - set: can be more descriptive
    ```js
    //Good 
    const seenNumbers = new Set();

    //Avoid:
    const set = new Set();
    ```

- Js variables should be declared either in `const` or `let`. `const` is considered to be better than `let` since any variable declared with `const` is not assignable. 

- GET REALLY GOOD AT TYPING FAST - this will be super helpful in interview situation


## Stanley Ye 04/26/22 (Trie)

- [1 - js](https://github.com/ngl4/formation_journey/blob/main/AlgoWorkout/Stanley%20/autocomplete.js)

**Reflection & Takeaways**

- Learn how the `trie` data structure works 

- If you encounter any `autocomplete` problems, `trie` is one of the go-to data structure for those scenarios

- As a group, we have tried to implement the solution using the Binary Tree data structure. However, I realize I froze up and realize I still need to work on practicing understanding how to use binary tree to solve this problem. 

- I stil feel really uncomfortable in this workout session. I feel like I have a hard time coming up with a solution for the problem and unable to do well at `precoding` (that another fellow Brian Do has pointed out to me before)

- I need to learn to ask questions and phrase them well so it is clear for the mentor to know what I am asking. I feel like even I listen back to my own questions, I do not know what I am asking exactly myself. 

- I need to practice to work with my anxiety and not work against myself due to my anxiety. 

- Stanely has assigned us to work on this problem as our Homework and then send him our solution once we have figured out how to solve the problem.

- One more thing to look into while doing the homework is to understand `why trie, this data structure, is better than the use of other data structures?` - I think this is great to do a comparison in their Time & Space Complexity!! 

## Vinit Parikh 05/04/22 (Stack - Medium)

- [1 - js](https://github.com/ngl4/formation_journey/blob/main/AlgoWorkout/Vinit/05-04-22.js)

**Reflection & Takeaways**
- This is a problem that seems easy but it is actually pretty challenging. 
- The brute force approach is using a nested loop (for loop and a while loop) with the Time Complexity of O(n^2)
- The Optimized approach of the problem is using Stack. It is also using a nested loop (for loop and while loop), but the Time Complexity is O(n), since the time complexity in stack (while loop) is so minor when looking into big data, as a result, the total time complexity is O(n)
- Vinit is thorough in his explanation and it is great to see how he works through the optimized version of the solution to this problem. Seeing the visualization that Vinit has set up helps me to understand how he is able to visualize through a problem. Best way to unblock ourselves is to `visualize` the problem/ the approach `step-by-step`. 
- In this session, `my biggest takeaway is to be able to identify our weaknesses during practice and work through a bunch of problems related to that particular area`. We are all learning and practicing as we go and Vinit is showing us how he would be able to handle a problem and `explain his thought process out loud, and this eventually helps him to identify the bug in the codes`. 

What I have learned: 
- In JavaScript, you can do this to autofill an entire array - `let randomArr = new Array(input.length).fill(0)`
- Difference in using `let randomArr = []` vs `let randomArr = new Array(input.length).fill(0)` ?
    - Depends on the problem you encountered, if you need the particular index to swap with other values and the default ones are still in place without the change of their indices unless needed, then I think it would be best to create an array and fill it up with values. Please disregard this statement if you find it confusing. I am just writing down what I think. 

What I think I did well today: 
- Ask if I could read through the problem out loud. 
- Ask questions since I am not entirely sure what the problem is, through the answer of the interviewer, it helps me to fully understand what the problem is about
- Pay close attention 


## Temi 05/09/22 (Sliding Window + Array + DP - Easy)

- [1 - Js](https://github.com/ngl4/formation_journey/blob/main/AlgoWorkout/Temi/05-09-22.js)

- Can be found on Leetcode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
    - After checking on the approaches used during the session, they are also the solutions stated on Leetcode. Really eye-opening since other fellows are able to come up with solutions that are similar to what is suggested in Leetcode. 

**Reflection & Takeaways**
- Break up the problem into a smaller piece is key to coming up with a solution 
- In order for us to look back as we go through an iteration, we need to have a flag to help us to keep track of the particular value that we can look back on. (set up a min variable)
- I did not do so well in this workout session. I am seeing only the surface of the problem and did not think deep enough. I think I struggle with coming up with an approach. I need to be able to train myself to quickly transition from understanding the problem (making sure I truly understand the problem is KEY here). 
- Overall, I still need to practice more. I need to be at least feel really comfortable using the brute force to solve any problem. This is the key. Once I am good at this, I can start to learn how to optimize my code. 


## Temi 05/10/22 (DFS/BFS Binary Tree - Find Depth of the Tree - Easy)

- [1 - Js](https://github.com/ngl4/formation_journey/blob/main/AlgoWorkout/Temi/05-10-22.js)

**Reflection & Takeaways**
- It is really important to understand the `Why` behind every data structure, algorithms, approaches. Always ask why it is working in a certain way. 
- Being able to make decision correctly when we have a scenario where the time and space complexity are basically the same, in that case, we just pick the one that is easier to implement. In this particular problem, BFS is easier to implement than DFS. 

Reflection: 
- I think I need to fully understand the Time and Space Complexity on a Tree problem 
in terms of DFS (Recursive stack call, Iterative stack), BFS (Queue)
- Also I have to be really fluent in implementing and explaining all these approaches really well. 

## Vinit 05/16/22 (Dynamic Programming - Recursion - Rolling Dice)

- [1 - Js](https://github.com/ngl4/formation_journey/blob/main/AlgoWorkout/Vinit/05-16-22.js) 

**Takeaways** 
- This is a challenging problem and I think I did not do so well for this session. Knowing how recursive works with dynamic programming is definitely something I need to learn and understand. 
- Visualizing the recursive problem in a tree format is a great idea that Vinit has introduced! 

## Temi 05/18/22 (Two Pointers - Array - 0 and 1 adjacent swapping)

- [1 - Js](https://github.com/ngl4/formation_journey/blob/main/AlgoWorkout/Temi/05-18-22.js) 

**Takeaways** 
- Questions to ask early on when thinking about the approach to this type of adjacent swapping problem: How to determine which direction to take? starting 0 on the left or on the right? OR starting 1 on the left or on the right? 
- cost `estimation` vs cost of `doing the work` - when looking at a problem, try to think if it can be solved with estimation or ask yourself if there is a need to do the work? can estimation also solve the problem without _actually_ swapping the numbers 
- It is really important to understand a problem and come up with a solution (brute force) to the problem 
- It is not about categorizing the specific problem type, it is how to solve the problem with any algo pattern you can think of 
- Regarding to `space complexity`, it is not about the use of an extra data structure that would make the space as O(N) or etc. It is about the input size. So as the input size increase, does the extra space grow proportionally? -> if it does, then, it is a O(N), else if the extra space does not grow as the input size increases, then the space complexity is O(1), stays constant. 
- A fellow mentioned `bubble sort` (basically adjacent swapping) at the end of the session and that definitely reminds me of bubble sort when seeing this problem. We can definitely keep track of the swapping count based on how many times we swapped the numbers 0, 1. Great idea for a brute force approach and also easy to understand. 
- The optimal approach to this problem is actually using two pointers approach.
- This is a really great problem to train to think about and try to distinguish if it is an `estimated` problem or a `action required` problem. 

## Temi 06/01/2022 (Sparse Array with more space efficient) 

Using a `Map` data structure + storing only the elements other than zero in the Map ->  is a way to solve this problem so it is more space efficient

**Takeaways**
- Being able to catch on the `hint` or `question` asked by the interviewer and `ask for clarification` if needed. 
For instance, at the end of the session, Temi has asked us a follow-up question regarding if there are other ways to solve the problem without using a hashmap. This is a good time to ask: `so should the performance be taken into the consideration? should the new approach have the same performance, better, or it does not really matter?` 

Even though the interviewer did not tell you about it ahead of time, you have to be the one to `proactively ask them questions` and `fill in the holes` of uncertainty. 

- Being able to distinguish different methods and different performance associated with them. ie, a get and set methods are both `O(1)` time and the init method is `O(n)` time.

## Arnold 06/09/2022 (Binary Tree String input and find depth)

This is my first session with Arnold and I have a really good time since it is **a great teamwork**! 

**Reflection**
- Jiyoon - really good at breaking down the problem and visualize the problem + comes up with the depth and max depth idea + pseudocode!!

- Johanna - find a new method to solve the problem + comes up with the idea of using opening parathesis (+1) and closing parathesis (-1) as a way to find depth!! 

- Gigi - asks great questions and talks through her thought process!!

- Dexter - first person pointing out the "(" parathesis early on before everyone sees it and ask great questions!!

- Cindy - mentions edge cases and asks questions (I feel like I am pretty slow haha, but this is the first time I feel like I completely understand the problem and its solution)!!

Jiyoon and Johanna are leading the game for this algo session and I have learned a ton from them. The final time and space complexity are so beautiful, it is a O(n) time and O(1) space.

I like Mentor Arnold let each of us code a little bit when working on the implementation so everyone gets the chance to code a little bit. 

_What I find I struggle with during this session?_
- still could not speak up well way to approach the problem 
- still feel confused after other fellow has completed on their pseudocode 
- still need to work on implementing the problem during the pseudocode stage (do not think about coding it out at all - just pseudocode)

## Vinit 06/15/22 (Backtracking - Min, Max, Unique List, Permutations)

**Takeaways**
- Don't change the reference function 
- Using `slice()` or the spread operator to create a copy of an array 

## Vinit 07/11/22 (AutoComplete - Trie) 
What I did well: 
- Being able to understand the basic idea of what the Trie data structure and able to draw it out in a tree visualization 
- Being able to do pre-coding well 

What I should improve: 
- I was lost while implementing and was not being able to think through the logic well 
- Need to work on practicing understanding the autocomplete functionality as well as how to add adn search for trieNode 
- It is super crucial to understand these basic concepts well!! 



<!-- 

##

- []()

**Reflection & Takeaways**

 -->