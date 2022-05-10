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

- [1 - Js]()

- Can be found on Leetcode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
    - After checking on the approaches used during the session, they are also the solutions stated on Leetcode. Really eye-opening since other fellows are able to come up with solutions that are similar to what is suggested in Leetcode. 

**Reflection & Takeaways**
- Break up the problem into a smaller piece is key to coming up with a solution 
- In order for us to look back as we go through an iteration, we need to have a flag to help us to keep track of the particular value that we can look back on. (set up a min variable)
- I did not do so well in this workout session. I am seeing only the surface of the problem and did not think deep enough. I think I struggle with coming up with an approach. I need to be able to train myself to quickly transition from understanding the problem (making sure I truly understand the problem is KEY here). 
- Overall, I still need to practice more. I need to be at least feel really comfortable using the brute force to solve any problem. This is the key. Once I am good at this, I can start to learn how to optimize my code. 


<!-- 

##

- []()

**Reflection & Takeaways**

 -->