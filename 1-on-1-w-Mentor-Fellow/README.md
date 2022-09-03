# Coffee Hour or Algo Session with A Mentor/Fellow Alumni/Current Fellow

Questions, Experience, Algo Problem, Anything that the Mentors/Alumni/Fellow would like to share!!

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

console.log(maxProfit([])); // 0
console.log(maxProfit([3])); // 0
console.log(maxProfit([4, 3, 2, 1])); // 0
console.log(maxProfit([8, 8, 8, 8])); // 0
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
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
- Build up a `daily habit` to `recall concepts at the end of the day` based on what you have learned that day. Try to write them down or record what you can remember or _not_ remember - this helps you to know how much you have recalled.
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

## Mentor Kemet Dugue (06/05/22)

Wow!! I am really surprised how much I have learned from the 1 hour and 15 mins coffee hour session with Kemet!! Thank you so much for being so prepared and for sharing so many insights and your experience! Appreciated it!!

**Reflection & Takeaways:**

- Kemet's journey to tech is defintely really inspiring! From humanities major, self-taugtht + Bootcamp fullstack development, start-up to Big tech work experience.

- `Luck & Preparation` were just as important to get his first tech role.

- When picking a company, it can be opinionated and everyone has a different answer to this. It is crucial to do some researches through `networking`, read reviews on `Glassdoor or Blind`, and also based on the conversation with the hiring manager, `be aware of how they answer your questions on their team culture`

- Knowing what are the fundamental values that you are looking for in a company ie,

  - `work-life balance`
  - `learning opportunities`
    - stipends for higher education and conferences
    - being able to work with talented senior software engineer
    - documentation
    - Besides working, it is crucial to make a learning plan that is best for your career journey
  - `collaborative work environment`
    - ie, I am able to feel safe to ask questions and not feel like I am on an island
  - `ownership` in projects - how to grow into the next level of the engineering ladder

- There are many different factors when we finally decide to move on to a new company. I think I like the answer from Kemet regarding the `feeling of closeness with the engineering product`. When we are working on a product that we do not use, it is hard to feel motivated to work on the engineering side of the product. Besides working with amazing group of engineers, I feel like it will be amazing, just like what Kemet has mentioned, if I could work on a product that I feel more `closeness` with as well!

- Levels of engineering role can be different for different companies.

  - Square: L3 (entry), L4 (mid), L5 (senior).
  - Microsoft: 59-60 (entry), 61-62 (mid), >62 (senior + others)
  - Here is a [great document](https://assets.ctfassets.net/1wryd5vd9xez/6bDnTwb4H7bfiFvg55ldRR/b1cb8514f0afd0a4050991d35ccbac03/Square_Software_Engineering_Career_Ladder.pdf) that Kemet has shared with me regarding the different levels of engineering roles and responsibilities.
  - Entry
    - can you code?
  - Mid
    - for those who have 2+ years of work experience
    - less handholding
    - a little more ownership compares to entry
    - solution may be more elegant

- `Assessing our skill level` of engineering through both our understanding of our skillsets/worth and from the market view through interviewing for self-assessing purposes.

- Big Tech vs Startup

  - Big Tech:

    - `Standardized`
      - engineering process
      - developer workflow (internal tooling to help with productivity)
      - same format, productive
      - more politics
        - promotion: based on who you know
    - stand-up with your team
      - updates of your progress
      - updates on your features
      - your sprint
    - PM Meeting
    - On-call (when there are incidents)
    - A lot of meetings (around 40% of the meetings do not have any values)

  - Startup:
    - `free-form`
    - format is different (not standardized as big tech)

_(the above are general points, but they can all depend on the company you are working for)_

- Big Tech:

  - possible dealing with time zone issues (working with co-workers from all around the world and with different time zones)
  - Benefit: the company will take the employee's health into consideration and will conduct surveys to get some insights on how employees are feeling. They will take immediate response ie, provide 5 additional mental health days for employees. This is an example from Microsoft.

- Know what type of questions to ask and `don't try to ask explicity`
  ie, for work life balance, you can ask `how often are your daily stand up?`, `what are the pain points?`, etc. This heps you to get a signal on the company

- Key is `network`

- Continuous education and learning using `Notion` to take notes, and to read `Hacker News` or listen to `podcasts` to make sure to keep the knowledge up-to-date. And being a mentor at Formation has also been helping Kemet for always be prepared with Algo and Data Structure knowledges in order to help fellows at Formation. `Pramp` is also another great software to practice for coding interview.

- Last but not least, some takeaways when job hunting:
  - Be intentional
  - Be truthful to yourself
  - Know what you want
  - Stick with them
  - Always assess/test the market

## Mentor Jenny Xing (06/08/22)

Great to have a weekly catch up on my frontend side project with Jenny Xing! As always, great session!! :)

**Takeaways**

- Having more commits is always more preferred than having just 1 commit for multiple changes
- Whenever you are adding new things to your current application, it is considered as `new feature`
  - Making the site responsive design wise is considered as a feature
- Creating a `checklist` is a good way to list out tasks to resolve the issue. This is considered as a definition of done or in another word, `acceptance criteria`. This helps you to know when it is completed.

- Goals before the next meeting with Jenny Xing:
  - solve at least 4 issues (submitted 4 pull requests)
  - work through tic tac toe exercise and note down questions to ask on React concepts

## Fellow Noor (06/09/22)

Had a coffee hour with Fellow Noor to get to know her a little more.

**Reflection & Takeaways:**

- We are both Bootcamp grad. Noor has been teaching software engineernig since 2020. She would like to gain more confidence through Formation training.
- It is really cool to now about her interests in productivity and fintech products.
- I really like how Noor's approach to a new problem, she would browse through resources online first, then she will make an outline of what she knows by asking the 5-6 questions - `Who/What/Where/When/Why/How`, after that she would analyze different resources, and then pick one and dive deep into it. After going through all these processe, she will implement the solution. ~ really great advice on asking questions and analyzing resources before coducting any implementation.

## Alum Vincent Samaco (06/10/22) - learning & interview tips and tricks

Had a coffee hour with Alum Vincent ~ really great session!! A lot of great technical interview tips and tricks!!

**Reflection & Takeaways:**

- I really enjoy the conversation with Vincent and really thanks him for all the expereince and resources that he has shared with me!
- `teaching someone else the same problem` is what helps us to learn
  - listenning to their approaches
- A good pair learning host is when we are able to perform like an interviewer sometimes and ask questions to ensure we are also following along well. Through asking the `why` question, it can make sure the other fellow is able to know what they are implementing instead of just memorizing the code.
- `Collaboration` is key for pair learning - if you are just watching other people's code, you will not be able to learn much from the session and the session can become less useful when there is no interaction and collaboration overall.
- `High level approach` is key - knowing how to derive one sentence approach will show you how much you have understood the data structure, concept, and algos.
- For each leetcode or algo expert problems, try to spend at least 5-10 mins to come up with a high level visualization or definition. You should be able to fully understand the problem during that time frame.
  - validation
  - can you code this?
  - can you visually figure it out?
  - How do you get to it?
- For each problem, `make sure you note down some takeaways` on the problem or the approaches.
- `In the interview situation, whenever you go over the high level approach to the problem, ALWAYS make sure to ask if the interviewer agrees with your apporach` - once you get the agreement, then work on the implementation. If they get back to you and say `is there a better approach?` for instance, then that means there is an optimal solution to the problem, you might have to figure it out before you start implementing. Or when you are stuck, you can check with them to see if you could implement the brute force first, before figuring out the optimal solution.
- Try to `optimize time` when solving problems especially Algo Marathon assessment - ie, If you get to a problem and you have no idea how to do it. Maybe spend `5 mins` on it. If you still have not figured it out. Then move on to another question. You can always get back to it when you have more time.
- `Learn how to identify from the problem prompt, what strategies you can use to solve the problem?` - this is a good practice exercise.
- `CodeSignal Speed Drill` is a great way that is really good to practice and to gain more confient in working through multiple problems in a time constraint.
- For `CodeSignal Assessment`, work on the `not passed` problems on your own after the assessment.
- During an actual technical interview, it is super crucial on your `communication` skill:
  - pay attention to non-verbal cues from the interviewer
  - ask questions to see if you need to handle certain edge cases which can help you to filter out and sharpen up the core of the problem
  - check in with the interview by asking `do you follow what I am saying?` to see if they are following along with you
    - They cannot read your mind, so it is crucial to `externalize` your thought
  - if you are not entirely sure what the interviewer is saying, always make sure to clarify by:
    - rephrasing what they are saying again ie, `from my understanding, is this what you are saying?`
    - making your own example/visualization to show how you understand the problem and asking the interviewer again to see if you are understanding the problem correctly.
- When learning algo and data structure, it is crucial to come up with the `high-level` understanding and approach to the problem. When you are new to Algo and Data Structure, it is cruical to focus on getting a `quality` solution. Practice on analyzing different approaches and tradeoffs, practice the big picture, practice on using the `engineering method`, think and communicate your thought process well. Building the depth of understanding on the problem solving skills first before you work on the speed. Speed will come when you have enough practice.

## Mentor Jeremy (06/16/22)

https://jeremyaguilon.me/blog

**Takeaways:**

- Best way to handle interview froze is (1) use basic test cases to help you to understand what the problem is and slowly expand the thought process from there (2) use elimination method in picking the correct algo pattern or tool to use to solve the problem

## Fellow Johanna (06/20/22)

http://johannafulghum.com/home.html

**Takeaways:**

- Biggest Takeaway - `LISTENING`
  - Whenever in interview or session, Johanna pays attention in what other people are saying and from there she is able to think through the possible algo/logic to solve the problem
- Learning style: 10 mins try out the problem -> if no successs, use 20 mins to go through each line of the solution and know what each line is doing -> delete everything -> walk away from the problem -> try it out again from memory
- Johanna has formed a meetup community at Denver after has moved there. When there wasnt any community, she would form one and draw people with similar interests together and to learn together.

## Fellow Alum Jose (06/24/22)

**Takeaways:**

- Biggest takeaway: `Be Yourself and Confident` - if you walk into an interview with your confidence, you have already won 50% of the batter
- `Little win` matters!
- Thank you for sharing all the job hunting experience from Amazon and Empower! ~ Inspiring!!

## Fellow Binh Hua (06/24/22)

**Takeaways:**

- We found a lot of similarities in our cultural background!
- We both share the learning strategy that we need to talk to others in order to help us to learn! Being able to communicate on what we have learned or through conversation can help us to retain what we have learned
- Really enjoy the conversation to get to know each other!!

## Mentor Sailesh Kumar (07/01/22)

**Takeaways:**

- Insightful Analogy: `Teaching is like performance and Live interview/coding is like the stage!`
- Sailesh shared his Facebook experience in the Oculus/Social Impact team and it was great to hear how he was able to own a feature while working there.
- He formed his own startup - LightHall with the goal to help more students to be able to afford live streaming education.
- Overall, it was a great conversation and I got to know more about Sailesh's insight and experience!

## Fellow Alum Jordan Leslie (07/19/22)

First coffee hour I cried with happy tears because I felt so inspired, motivated, relieved, grateful from the conversation with Jordan!

Jordan's job hunting story is really inspiring and love she has shared her experience and how she made her final decision on picking the company she would like to join!! Love it!!

**Takeaways:**

- Live coding: all about collaborative effort with the interviewer and how you would be about to understand errors and debugged the problems, as well as how you communicate your thought process.
  - Common look-out questions can include:
    - Transform API data to Frontend
    - How much you know about Javascript?
      - Closure
      - Hoisting
      - Async/await
      - Promise
      - etc.
- Even you do not fully remember a concept fully, it is okay to mention it out loud and walk your way through it. It does not need to be perfect!!

- Look out for `Fullstack` role as well - because they could be 70% focus on Frontend and 30% focus on the Backend or 50% front/back.

- Consider small companies as well - what matter most to an organization is the management team as well as the people/community of the organization!!

- What to be aware of in the smaller or medium size company? REALLY CRUICAL: `find out if they have a strong culture of documentation`!!

- Documentation can be crucial in some big tech companies - you basically need to document everything you have done. <-- which is good because this is how you can learn and how other software engineers can learn from you!

- Know how to ask hard challenging question to the employer, especially knowing their management style, existed pipeline, the current need of the team, etc. - why? because it is A `Good Manager` can definitely help you and challenge you so you can grow better in your career journey. And you can always be yourself when you are with them.

  - You can also ask `scenario-type` of questions to help you to know how they would normally handle challenging work situation ie, If a deadline is coming close for a project, but the project is not yet ready or come close to completing, what would you do as a manager and how would you approach a scenario like this?

- `Mindset/Mental Health` is crucial. Jordan will be meditating every morning to always remind her - `Hope`!

  - `Hope - being afraid and still doing it anyway!!`
  - When she was anxious, scared in her job hunting process in terms of if she would be qualified for the role or not, she would apply anyway. Give it a try!

- Going back in time, what Jordan would have done differently?

  - Focus on Algo more first, then Live Coding
  - Time box them and prepare for them seperately - which could reduce the anxiety in interviewing

- What works well for Jordan in her job hunting process:
  - Linkedin Premium
  - Always apply early and be the first 50 people to apply
  - Reached out to Recruiters
  - Connected with her network for Referral
  - Number Game: 10-20/week

## Fellow Alum Lena Kwon (07/26/22)

Amazing 1-on-1 Session with Lena Kwon and got the chance to know the types of questions I need to practice more to make sure I can do well in `recursion`!!! It is amazing to get to connect with Lena and get to know more about her personal & career goal and her job hunting experience!

Here are the list that Lena has shared with me!!

```
Uni- value binary tree : https://leetcode.com/problems/univalued-binary-tree/
Binary Tree Path: https://leetcode.com/problems/binary-tree-paths/
Invert BInary Tree: https://leetcode.com/problems/invert-binary-tree/submissions/
Merge Tree: https://leetcode.com/problems/merge-two-binary-trees/
Subtree: https://leetcode.com/problems/subtree-of-another-tree/
Same Tree: https://leetcode.com/problems/same-tree/
Min Depth: https://leetcode.com/problems/minimum-depth-of-binary-tree/
Max Path Sum: https://leetcode.com/problems/binary-tree-maximum-path-sum/
Diameter of a tree: https://leetcode.com/problems/diameter-of-binary-tree
Path Sum: https://leetcode.com/problems/path-sum/
Tree from inorder and preorder : https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
```

Takeaways:

- Different companies have different interview atmospheres/expectations on you - some may welcome more questions asked others might not. It is hard to tell but just do your best and ask questions that you need to solve any problem given to you
- Focus on practicing all the basics, if you are weak at a topic, practice lots of questions until it becomes a second nature! You know immediately what you need to do by looking at the problem.
- Have your job hunting profiles open up early on so recruiters are aware of you!
- Determination can beat your anxiety - Lena shared she felt her anxiety when she went into her first interview with different big tech, including Google, but as she progressed through the interview, she becomes more determined that she would be able to make and start to build up her goals to practice each day to make sure to can accomplish her goals! Through continuous practice (repetitive work through basic problems again and again + under pressure + make sure to have the same performance in interview setting as well) has helped her to fully understand algo pattern and able to use them to solve some harder problems at Big Tech!

## Mentor John Mendez (08-16-22)

This is an Amazing 1-on-1 session with Mentor John! I have learned a ton. I wrote 4.5 pages of written notes lol based on what I have learned from John! I valued a lot of his insights, guidance, experience and his perspectives!!

**Takeaways:**

- `System Design` vs `Product Design` - System Design has a more backend focus vs Product Design has a more frontend focus
- What to focus on in an interview - if your strength is at a certain area in the system/product design, it is crucial to know when to `handwave`(means focus less and generally mentionn it and skip it) on a certain topic.
- `Mindset for facing interviews` (or when you are moving to the next round of the interviews - it is not harder, it is more detailed) - it is more about what you know and what your strength is so the company can decide on where they could place you in a team!
- What are the engineering team looking for?
  - Asking questions is key - `How you would be doing on the job? and what you are going to ask?`
- `Caching` - used in Browser (Chrome Dev Tool), API, etc. It is a topic that I need to do some more research on
- `Deliberate Practice with Intention` - when going through at topic, you can learn it, and then practice using Excalidraw to walk through what you have learned and explained it to yourself. You are not just reading, you are also speaking, listening, and doing to make sure what you have learned stick with you.
- `Ask Why?` - this is crucial especially questions related to your engineering decisions, always explain why you have chosen to use a certain tool over the others. Why you have made the decision? Why you choose a relational database over a non-relational database? is the tool faster (performance)? is the feature beneficial for the users? how do you handle errors?
- `Talk about your project as a story`
- `Interviewing is all about psychology in the interation`
- If you are ever asked what type of features that you would like to build on top of what you have built so far, `make sure to mention something simple and straightforward just in case the interviewer wants you to code it out on the spot`! Be aware in how you answer this question, `you want to make sure you showcase your strength`

## Mentor John Mendez (09/01/22)

Really encouraging chat on Mindset in Interviewing!! Always get a ton of takeaways from the conversation!

**Takeaways:**

- Being your authentic self and show them what you know! Don't Present like Someone that is not you, be YOU is key!
- Interviewer is also human and they also want you to be successful
- Think about Interview is like you are working/shadowing at this company for one day and how do you feel like working there
- Are you someone who can work under pressure?
- Be positive when you are struggling
- Be humble on bad choices
- Have confidence and what you are good at and learn from others on what you could do better to improve in your current skillsets
- Team fit is crucial, you also want to see if you will fit in the team
- Familiarized with simple Js Methods: `sort, filter, find, some, include`
- Around 5 mins left of the interview, Thank you for the interviewer time and note down what do you think my weakness today are? and let them know what you think you should be improving in your interview performance
- You never know what they are looking for
- Remember they have already seen you once, they are trying to get some signals on things you have not done well in the previous interview
- If you are not sure about sth or there is a disagreement between you and the interviewer, listen to their thought and also let them know that you will do some additional research after the interview to learn more about different perspectives on the problem
- You want to surround yourself with good engineers and you can ship features and grow faster working there
- Have a daily affirmation and read it everyday like: "I am a software engineer, nothing happens today is going to change that"

- At the end John went throught and letting me know about `export` constant obj vs `export default` function in React

- When it comes to red flags, you want to ask the questions what are the red flags to you? sometimes the interviewer might consider certain things are red flags, are not neccessarily that important or not really matter to you. Rethink about the culture of the company as well to see if it is a right fit for you.

## Mentor Hansel Ong (09/02/22)

2 hours phone chat with Hansel to learn more about Amazon and leadership principles(LP)!! Really meaningful session to learn more about Hansel mentoring style and his thoughtful response in every question I asked. He will make sure I am the one who will think as a software engineer when going through the problem. What would you do? Imagine you are a hiring Manager, what do you think in your own performance? what do you feel like based on the questions the interviewee asked? are they thoughtful enough?

**Takeaways:**

- Customers = those who made a request or those who you are building for (ie, customer success team or PM they can also be your customers)
- End Users = who are using them
- Put yourself in the interviewer shoe and see how you would approach the problem
- NOTE TO SELF: Good to think about your leadership principles strengths and weaknesses
- Concise STAR method response is key 1-2 sentences for S T R, and as for A, you can have a few sentences on it because this is the key element that you will be paid close attention to
- For a LP response example, know the following based on the interviewer perspective:
  - are there any signals at all from this candidate?
  - proactive/initiative?
  - scope/complexity/impact they made? risk?
  - Idea of Actions - are they in the realm of what the typical Amazonian will do
  - Is the example exceed the expection?
- The offer is given to those who they think they can be successful being part of the Amazonian team
- Leveling
  - Different levels have different expections
  - Do you stand out enough to raise the bar?
- Questions to Hiring Managers (how about you standing in their shoes and thinking about these questions?)

  - work-life balance?
  - take 2-months vacation after getting the job?
  - like least and like most about working at the team?
  - Js vs Typescript?
  - A researched + thoughtful questions regarding the team or what they do

- Having thoughtful questions help the interviewer to get to know you a lot better
- Go straight to the point when asking your questions?
- Think about WHY THIS QUESTION MATTERS TO YOU?

- Every team is like a little company at Amazon. The manager can decide on the working style for the entire team.

- REMEMBER YOU ARE A SOFTWARE ENGINEER, HOW WOULD YOU APPROACH A PROBLEM?

- When you have brain fart, go back to the engineering methods and while going through each methods write down/ document down as you go to avoid blanking out on a problem.

<!--
## ...

**Takeaways:**

 -->
