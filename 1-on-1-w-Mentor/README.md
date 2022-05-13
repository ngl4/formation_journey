# Coffee Hour with A Mentor
Questions, Experience, Algo Problem, Anything that the Mentor would like to share!!

## Vinit Parikh (05/04/22)

**Takeaways & Reflection:**
- `Know your weaknesses and practice a lot to make them into your strengths` - I really think this is my biggest takeaway from the conversation. It is so crucial to identify what my weakness is and to work on making it into a strength. 

- When learning the patterns, focus mainly on the easy leetcode problems 

- Learning to find patterns by doing a lot of similar problems to understand how they work

- Take a week off from that particular problem type and revisit again to see what you learned sticked

- The more repetition, the better it is to build up your muscle memory 

- Being able to work through the fundamentals really quickly ie, able to traverse a tree using DFS or BFS easily 

- Practice by getting as many problems as possible, and deeply analyze the possible solutions. 

- Know your primary language really well

- Problem-solving is key 

## Brian Zhu (05/06/22)

**KEY: Indentify the pattern first, before solving a problem** 

Great read on a list of basic patterns in DSA shared by Brian: https://designgurus.org/blog/grokking-leetcode

**Takeaways:**
- `Space out time to learn each problem type` (ie, Array, Stacks, Two pointers, trees, dp, etc.)depends on the length of the preparation time you have. For instance, 5 days (30-1h on each problem type) vs 2 months period (4-5hrs on each problem type).

- `Focus on each problem type (start with easy first then go into medium, and if time available do some hard problems)`. In many big tech companies, the common problems being asked are commonly within easy and medium type of difficulty. `Come up with a solution, do the problem, and apply the engineering methods to a problem`. 

- Apply `engineering methods` while you are practicing just so you can build up the communication skills and muscle memory 

- Get really good at one problem type, how to determine you are really good at it? -> `you can tell by seeing how you can come up with a solution within a few mins and able to implement it successfully`. Even better, if you can optimize your code and disucss the time/space complexity of the problem. 

- `Come up with more than 1 solution to the problem` - what are the different approaches you can do for the particular problem? ie, for a tree problem, besides the binary tree, is it possible to use a BST or Trie? would it be better to use other data structures or algorithms? can a stack or two pointers be used to solve the same problem? How is it impacting the time/space complexity and what are the tradeoffs? 

- `In a tech interview, if you get to the follow up questions, it is a good sign` that at least you have passed the first section of the interview where you need to come up with a solution to a problem. If you can answer the follow up questions and implement an optimized solution successfully, it is for sure a strong pass. If you do not by any chance, it does not mean you fail, since it can depend on the company's decision. 
<br /><br />

_Additional Notes Brian has shared with me:_ 

```
If you don't know a solution at the top of your head:

1. Imagine you are going through the flowchart of different patterns & data structures. List out/recount all potential approaches you can use and see if they can be applied to the problem. For example, if you are given an array question, think about two pointers, stacks, queues, binary search (if sorted), etc.

2. Do a problem manually, and in the process of doing it, think about how you solved it. This will at minimum give you the brute force solution.

3. If there are constraints to the problem (e.g. array is sorted), usually that is important information. You can use approaches specific to that approach, like binary search.

```

```
How to ask for help:

1. If you get stuck, you can ask "am I on the right track with [approach]"?

2. If you really get stuck, ask for a hint on the correct approach

3. Remember that it's better to ask for hints & finish coding than to get stuck. You should aim to get a full optimized solution by midway through the interview.
```

## Vinit (05/12/22) 

Meeting with Mentor Vinit to walk through an Easy problem. It is super great to see the thought process and story that Vinit told when he is solving the problem. 

**Takeaways:**
- Understand the problem and able to `re-tell a story` from it ~ It is super amazing to see how Vinit walked through the problem as if he is telling a story
    - He went through initially the possible approaches to the problem 
    - He started mentioning the possible solution in brute force and the time complexity of O(N^2) and mentioned the inefficiency of it 
    - He then stated another possible approach which may require sorting, but he argued back and mentioned that since it does not make sense to use sorting in this situation due to the chronological order tof the days (left to right)
    - After that, he stated there should be a O(N) approach to this problem. He tried to visualize a possible approach by giving a hypothentical example, ie, if I am selling at `4` on day 6 (in Example 1 input), what is the smallest potential lowest price that he could have bought - and looking back, the lowest price in the past days is `1` from day 2. Then, if we are selling at `6` on day 5, what is the smallest potential lowest price, and that is `1` on day 2. Then keep going, if we are selling at `3` on day 4, what is the smallest potential lowest price, and that is still `1` on day 2, and then go on and on ... 
    - So the greatest I learn from this explanation is that it is really thorough and easy to understand. I can be on the same pace as Vinit was explaining the problem. 

- `Pseudo-coding` should be so clear that you already see a `skeleton (schema)` of how your code would look!! It should also helps you to keep you back on track while you are coding (building) - `the schema should help you to handle all the easy stuff` ie, iterate through the input from left to right (chronologically) -> you know you need a for loop. See more in the below pseudo code from Vinit!! 

- Pretent you are the `compiler` when you are testing your approach/solution 

- Step away from the coding problem, and think about it as a normal daily problem. `How would you solve it without thinking it as a coding problem? how would you solve it as a normal math problem?`  

```js

/*
Leetcode (Easy)

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

keep track of max profit we've seen thus far as we iterate
we want to buy at the lowest possible price
we want to sell at the highest possible price

iterate left to right in chronological order
keep track of highest profit we've seen so far
keep track of minimum number (as our ideal buying price)
every item we look at is treated as a potential selling price
for each number, calculate profit if we were to buy at min and sell at i'th price, if that's greater than currentMaxProfit, update currentMaxProfit

[7,1,5,3,6,4]

maxProfit: 5
min: 1

i: 5
curPrice: 4

*/

const maxProfit = (prices) => {
  if (prices.length < 2) {
    return 0;
  }

  let maxProfit = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const curPrice = prices[i];
    maxProfit = Math.max(maxProfit, curPrice - min);
    min = Math.min(min, curPrice);
  }

  return maxProfit;
};

console.log(maxProfit([]));            // 0
console.log(maxProfit([3]));           // 0
console.log(maxProfit([4, 3, 2, 1]));  // 0
console.log(maxProfit([8,8,8,8]));     // 0
console.log(maxProfit([7,1,5,3,6,4])); // 5
```


<!-- 
## ...

**Takeaways:**

 -->