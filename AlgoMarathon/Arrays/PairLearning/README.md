# Pair Learning in Algo Marathon 

## Brian Do (04/25/22)
- Going through [a Medium array problem](https://github.com/ngl4/formation_journey/blob/main/AlgoMarathon/Arrays/PairLearning/cellTowerswBrian.js)
- KEY TAKEAWAY: Understand a problem and able to describe it, and `to come up with a solution plain English`. Practice doing this more whenever I encounter a problem!!! 

- If the problem is harder than you, it might be best to reach out to the Fellow Manager to lower the difficulty. 

- `Pre-coding` is what I need to focus to practice more and start with `easy` type of problems!! 

- `intuition` - Brian has mentioned this several times during the session. It is really crucial to approach an unknown problem with intuition. This does not come naturally, it comes with practices. 

- Learned about the difference between `||` (falsy) and `??` (nullish) in Javascript 

**Reflection:** 

- I felt uncomfortable working through this problem since it is harder than expected and I had a hard time going through the problem understanding and precoding aspects. 

- Brian has given me several opportunities to pseudocode and code things out, but I still struggle and I can tell clearly that I still do not fully understand the problem well enough that I am able to come up with a solution in plain English. 

- Brian is really patience in walking through the problem, verbalizing his thought process, and coding up a solution to the problem. He even took an extra mile to test the code to make sure it is working properly as expected. 

- I have learned his mindset and attitude whenever he encountered a challenging problem. Thanks to him I realize I definitely need to work on the easy type of problems and focus on practicing my `precoding` skill (including how to understand and come up with a solution in plain English)

- It is so cool to see that he can use his intuition and test out a lot of trials and errors in his mind already. 

## Jiyoon (04/27/22)

**Reflection & Takeaways**
We went over [the same cell Towers problem](https://github.com/ngl4/formation_journey/blob/main/AlgoMarathon/Arrays/PairLearning/cellTowerswJiyoon.py) and this time I was able to see a different approach to the problem and visualization of the problem in the lens of another programmer. 

I had a great session with Jiyoon. She was prepared to come in the session and share her understanding of the problem. She walked through the problem with visualization that helped me to understand it better. She was also able to clearly verbalize her thought process and was really patience in explaining the problem slowly in the session. 

I have learned something new regarding the O(n) time and space complexity - I feel like Jiyoon has a really good understanding on them. She explains to me the importance to talk about `what “n” means` and `the importance to apply the complexity based on the problem scenario, instead of just assuming` all for loop is going to return O(n) and all nested for loop will return O(n^2). This is a really good point and I will keep it in mind whenever I run into future algo problem. 

## Stoney (05/09/22)

**Takeaways**
Interesting new approach introduced by Stoney to solve the problem. I was able to successfully code out the approach that Stoney has suggested. I have learned something new during this session. Interesting idea to use `increment` and `decrement` as a way to keep track of number of repetitive elements. Really smart approach suggested by Stoney: 

```js
function numElementsRepeatedX(input, target) {
    let numOfRepXtime = 0;
    let numMap = new Map(); 
    for (let i = 0; i < input.length; i++) {
      const count = (numMap.get(input[i]) || 0) + 1; 
      numMap.set(input[i], count); 
      if (count === target) numOfRepXtime++;
      if (count === target + 1) numOfRepXtime--; //decrement once if the value is found to have repeated more than the target time, benefit: it will not keep decrementing if the count is still incrementing of a particular value 
    }
  return numOfRepXtime;  
}
```

## Mitch (05/10/22)

We went over the [sortedSquared Algo Easy problem](). Mitch has showed me how he would walk through the problem step by step using the engineering methods. He also has shared a lot of great advices and a [Leetcode pattern resource](https://seanprashad.com/leetcode-patterns/) that I find super helpful! 

https://leetcode.com/problems/squares-of-a-sorted-array/ 

Thank you so much that Mitch is willing to help out in sharing how he walked through a problem and how he would explain his thought process along the way. Even though he may come into the session without knowing how to approach the problem, he still able to generate a brute force approach and able to explain the optimal two-pointer solution extremely well. After hearing Mitch's explanationa and visualization, I realize I just have to rely more on the visualization to help me to understand the problem so it can help me to come up with approaches to the problem. 

**Takeaways**
- Asking questions to narrow down the best path to take (come up with the best solution to solve the problem)
- `Putting Text into Picture`
- Always ask `Why` you are asking certain questions - does the question matter or help you to get a better understanding of the problem?
- `Ask the interviewer to provide an example of the problem (ie, the input and output), if not, you can come up with an example and ask the interviewer to see if they make sense`
- Paying close attention to the instruction is key!! 
- For Optimal solution, try to think the possibility of `bringing down the runtime by using up some additional space/memory`


