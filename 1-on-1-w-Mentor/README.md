# Coffee Hour or Algo Session with A Mentor/Fellow Alumni
Questions, Experience, Algo Problem, Anything that the Mentors/Alumni would like to share!!

## Mentor Vinit Parikh (05/04/22)

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

## Mentor Brian Zhu (05/06/22)

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

## Mentor Vinit Parikh (05/12/22) 

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


## Alum Mitch Oliver (05/10/22)
I had a great session with Mitch to go through [Squares of Sorted Array]() problem and it is great to see how Mitch walked through the problem and talked about his thought process on the problem!! 

**Takeaways**
- When thinking about optimal solution, ask yourself if it is possible to improve the runtime by allowing to use more spaces/memory, and vice versa. ~ Great point! 

## Alum Arthur Damm (05/12/22)
Going through DFS Recursion during the 1-on-1 algo session 

Arthur will give me additional challenges that helps me to understand the problem better by going through his follow-up exercise. ie, the problem is to use DFS top down approach to solve the problem, Arthur's follow-up will be if I can solve the same problem using DFS bottom up approach. It took me a while but I gain deeper understanding on how to use recursion to traverse through a binary tree. 

**Takeaways**
- Knowing how to apply more than 1 approach to the problem is a great way to learn! 

## Mentor Brian Zhu (05/17/22)
Going through Recursion (Basics) during the 1-on-1 algo session

Notes from Brian Zhu during the Recursive Session: 
```
Recursion:

Identify the the recursive case
    - If you know the result at N, can you call the function with a different input that get us closer to the result?
        - e.g. recurse(n/2) or recurse(n+1)
        - Remember that you can call recurse() multiple times
Identify the base case
    - Check when does the recursive function stop?
```
**Takeaways**
- when working on recursion, start by coming up with recursive case and then base case! 

## Alum Mitch Oliver (05/24/22)
Going through [Trie Insert and Seach problem](https://leetcode.com/problems/implement-trie-prefix-tree/) with Mitch. We mainly walk through the structure and to understand how it works and how to visualize it. 

**Reflection & Takeaways**
- Being able to see the same problem in other person's perspective is really interesting and it helps me to see why I am not able to implement it from scratch. OR the steps that I am missing when trying to understand the problem, especially when I have no idea what the problem is, and how to solve the problem. 
- This is a really great session with Mitch when he is showing me how would approach the problem when he is not sure: 
  1. Visualizing step-by-step and walk through with examples ~ say it out loud
      - the use of the `Object` when visualizing the Trie data structure is definitely a really good way to show how all the nodes are connected. This definitely helps to understand the structure better
  2. Going `more` lower level to help with the implementation of the problem if you are stucked at the implementation area. Mitch also mentioned ~ having a good pseudocode can be extremely helpful for implementation. You can go as detailed as possible in your pseudocode so it saved up some time for implementation. 

## Mentor Jenny Xing (05/25/22) 
I have already had several sessions with Jenny Xing, both in group and in 1-on-1, I have been enjoying the time to get to know Mentor Jenny, her experience, insight, perspectives in career and life. There are several resources and takeaways based on my conversation with Jenny. 

My biggest question in a learning journey is `how do I know if I am ready?` - Jenny has shared her insight in this which I find super helpful:
- Used certain `metrics` or `checklist` to help you to look at so you know what you have done. 
- For example, `I know I am ready because I have done: 1) ... 2) ... 3) ...`

```
JUST A SIDE NOTE TO ADD ON TO JENNY'S POINT ABOVE: 

I went to a WWC CONNECT conference on 05/26/2022, the below is what I noted down from Ninti, Google Software Engineer, talk: 

When did I know I was ready: 

- Made it through calendar 
- Knew a breadth of Data Structure and Algorithms
- Practiced Interviews, applying to tenants of a successful interview 
- Could solve most easy problems, some medium problems, and a few hard problems 
```

**_Takeaways on Learning How to Learn_**
- When learning a lot of materials in a short period of time, it is cruicial to get the bigger picture (big ideas) down first. In another word, try to use some `visualization` technique ie, place a big board in the room or papers on wall that allow you to see your progress. 
- Build up a `daily habit` to `recall concepts at the end of the day` based on what you have learned that day. Try to write them down or record what you can remember or *not* remember - this helps you to know how much you have recalled. 
- `Tackle` any `problems` you are not sure about `as soon as possible`
- `Train` yourself `to identify` a new problem - what it does and what it falls into in terms of patterns?  
- In other to pass through challenges, it is super crucial to start to put some `time constraint` for yourself to make sure you need to `accomplish it no matter what it takes by that time`. 
- `Train` to `verbalize your thought process` by `watching videos on how others do` and by `recording yourself while learning to assess on your own performance` and reflect on what you need to improve.  

**_Takewaways on FrontEnd_**

**What a good fundamental Frontend engineering project should entails?**
- UX/UI 
  - Design looks good, no usability issues
  - UI makes sense 
  - Nice animation (ie, loading in animation)
  - Subtle, Feel smooth 

- Code 
  - If you are working on a certain framework, follow the `best practice` of that framework 
  - In React, components should organize well, easy to navigate, clean code (just enough in-line comments, normally good frontend code does not need comment)

**JS Doc (library)** 
- Specific way of commenting that are formatted specifically before a function or decoration 

**Try to setup your code correctly for the first time to reduce future Code Debt** 
- I think this is definitely a really good point, as for practice on my current side project, I will try my best to keep this idea in mind. 
- I recently went to WWC conference and learned that in our a lot of daily works, software engineers have been spending decent amount of time to handle `Code Debt`

**Project Priority & Scope**
- Ask yourself what is the `MVP` of the project looks like? 
- What is the `scope` of the project? In terms of how much you need to do to reduce the scope to the smallest and so you can archive the MVP asap! 
- Always `think and analyze on tasks` to see if they meet the `scope` you set for you current `MVP`, this can help you to know which tasks/issues should be prioritized first! 
- You can always polish the project based on `stages`, so at the `MVP`, focus on only one `feature` and make sure it works. 

**What are Features in Product?**
- Features are normally come from the `user stories`! 
- I have thought of different features, but sometimes I forget any features we come up with is due to the needs from the `users`. Having an end user in mind when designing the product is what matters! Thanks Jenny for reminding me about this!! 

**Advice on submitting an issue on Github: Bug/Feature Issue** 
- Follow a template ie, 
- Provide as many details as possible to help the software engineer to investigate on the problem: 
  - ie, what browser do you use when encountering the issue? does this happen in other browsers you use? 
  - How do you come across this issue in details? 
  - What are you suspecting that could be the cause of the issue? ~ it is totally fine to share what you think!! 
  - What are the different ideas that you think can help to solve the issue? 
  - It is also helpful to provide a video or screenshot of the issue 

**Advice on submitting an issue on Github: Feature Request**
- Follow a template ie, 
- Provide some information like: 
  - Why do you want to request this new feature? 
  - Why is this feature helpful or impactful? 
  - There is no need to include a porposal on the possible way to implement the feature, the key to this type of issue is to provide the reasoning on `why the feature can add value to the current product?`

**Working with an Accountable Buddy on Side Project**
- Ask your buddy, `from your perspective, what do you think on what I have already done?` and `what I can do better?`
- Learn from them and re-assess your own project with a perspective other than yourself. They are like your `second brain`. 

**Frontend Js Resources**
- The Eloquent JS 
- JS: The Good Parts 
- https://github.com/getify/You-Dont-Know-JS 
- MDN Web Docs

**_Takeaways on Life perspective_**
- Don't overload yourself with information!!
- Remember the key to learning is `repetitive exposure`
- Know what you learn yesterday 
- In life, sometimes we need to shift perspective and it is okay to `keep searching for something in a blurry image, the point is for us to make the cloud/blurry image less cloudy/blurry`
- It is hard to know exactly what we want and so for every experience, we learn and `know what we dont want` and keep moving forward.  

Other Resources:
- https://z-lib.org/
- https://usa1lib.org/book/1199044/a640c7
- https://asana.com/resources/eisenhower-matrix
- https://meltingasphalt.com/professional-growth/
- https://waitbutwhy.com/2018/04/picking-career.html
- https://letterboxd.com/films/ 

## Alum Kevin Khuong (06/02/22) 
It is great to get to know Kevin and his career journey and job hunting process 

**Reflection & Takeaways:**
- Everyone has their own `timeline` so take it a step at a time in your own pace 
- It is crucial to start considering when to start the job hunting process, because it can all depend on how long the interview processes can go. For Kevin, it took him 5 months to get an offer for one of the companies he applied to. So the earlier the better. 

## Mentor Stella (06/03/22) 
Great time to get to know more about each other! We share some similar experience (ie, Bootcamp, career changer) in our journey to software engineering! It is so inspring to hear how you transition from being an Accountant into a Software Engineer now at Formation! 

**Reflection & Takeaways:**
- Stella has worked in the `Open source` platform through "Hack for LA" Code For America Volunteer group for a year long. She gained work experience there and worked with Project manager and on the actual code base 
- Most challenging interview round for Stella would be `live coding`, but just as Stella mentioned, it is all about being comfortable in this type of situation - take the time to `ask for clarifying questions` and maybe sometimes `admit` that you are stucked and verbalized why and where you are stucked. 
- Key part of an interview is `the amount of effort you put in for follow-up` - Stella told in one of the offers she got, she provided 2-3 different solutions on the company's problems: `Some companies will recognize that your effort and this makes you stand out!` 
- Stella's current experience at Formation start-up company is full of learning and growing opportunities and she got the chance to take on ownership on certain sectors of the product as well! 
- Overall, one biggest takeaway for me is when I heard Stella mentioned her story from being `bored` working as Accountant to being `excited` and being `challenged`as Software Engineer at Formation. The decision and transition from one stage to another are full of `fruitful` memories, they seem to be a `crazy` experience, but I think that is what makes the work life more `meaningful`! 

## ____ () 
 

<!-- 
## ...

**Takeaways:**

 -->