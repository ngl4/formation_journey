# Algo Marathon

Welcome to Level 2 of Algo Blitz!!

## Tips & Tricks

- Don't spend more than 30 mins on a problem

- Learn by Problem Types

- Follow through the Formation Tasks, and practice more on Neetcode, Leetcode (sort by problem type and acceptance rate), AlgoExpert if needed.

- Try to walk through the problem in "English" to understand what it is asking

_Special thanks to a Formation Fellow Dana Ng who has introduced me to keep track of my progress using Attempts table_

## Fundamentals 
...

## Engineering Method - Practice Coming up with Questions on Array/String Problems

### Array Scenario 1: Sort Subarray Range Problem 

```js
//Given an array, return the smallest range that must be sorted such that the entire array would be sorted 

/*
Example: 
[1, 6, 3, 4, 7] => (1, 3) --> this means index 1 to index 3 (6, 3, 4)

[1, 3, 4, 6, 7] => (-1, -1) --> what if it is sorted? How does the interviewer wants the output to look like 
*/

function unsortedWindow(input) {
    return (0, 0); 
}
```
Before you start doing any approaches and implementation, think about: 
- The Edge cases 
- What you might do to break the problem

The most **basic edge cases** in the Array problem (_use your judgement before asking questions on the following edge cases, sometimes it is pretty obvious then there is no point asking then_): 
- The empty case!! `[]`
- The one element!! `[1]`

**Possible questions to ask**: 
- What does the `output` range `should look like`? (since it is not clear based on this particular problem)
- What if the entire array is already `sorted`? 

### Array Scenario 2: Maximum Subarray 

```js
//Given an array of integers, return maximum subarray sum. A subarray is any contiguous set of numbers (basically means find a subarray with the max sum)

//ie, [2, 2], [2, -3, 6], [-3, 6, -10, 4], these are all subarrays

/*
Example: 
[2, 2, -3, 6, -10, 4] => 7 //[2, 2, -3, 6] <--- This is the subarray that found to have the max sum, and the output should return the sum of all values in the subarray 
*/

function maxSubArraySum(input) {
    return input; 
}

```
Think about the possible edge cases. The most basic one is the `empty array` input. 

Before you blindly ask the question, it is crucial to consider if there is a reasonable assumption to be made for the empty case. 

For this scenario, it is pretty `reasonable` to return `0`. 

So your question could be: `could I assume that when it comes to the empty array, the output will return 0?` or `so for given the empty array, would it just return 0?`

When it comes to integer, another basic edge case can be related to `negative numbers`

So your question could be: `what if the array only contains negative numbers, should we return 0?`

The interviewer's answer could be no, since they would like to have it as a non-empty subarray. This means you will need to find the sum with the least negative numbers to be the subarray sum. 

### String Scenario: Lexicographically Next 

```js
//Given a word, return a word using all letters from the original word that is lexicographically (any later word) closest but after the given word...

//Lexicographic is pretty much same as alphabetical order, but not limited to alphabet letters.(dictionary order)

/*
Examples: 
input => output 
ab => ba
dabc => dacb  <- if you have a hard time understanding this, see the further explanation below: 

Here are all words in the lexicographically order of the word "abcd": (think about how to find these words in a dictionary)

abcd
abdc 
acbd
acdb
adcb
adbc

bacd
badc
bcad
bcda
bdac
bdca

cabd
cadb
cbad
cbda
cdab
cdba

dabc <- input
dacb <- output (the next lexicographically closest word)
dbac
dbca
dcab
dcba <- this is also the next lexicographical word, but not the closest 

So in order to find the lexicographically (the next) closest word for the input 'dabc', as you can see from the above arrows, the next lexicographically closest word should be 'dacb'. Hope this helps! 
*/

function nextWord(word){
    return word;
}
```

I am not entirely sure I fully understand this problem at first. After reviewing this [site](https://www.tutorialcup.com/interview/string/next-permutation.htm), I have finally understood the problem. 

Here are some questions you could ask: 
- Is it even possible? (this happens in transforming type of questions, taking in an input and transforming into something, sometimes it is not even possible to transform)
    - What if there is no lexicographically word? 
    - The best way to ask this question is to bring in an example, ie, what if the input is `aa`, what should it return?

Commonly in String, we always want to make sure to ask if `case` matters?! 
    - Does case matters? 
    - ie, `aA` => `Aa`, is the uppercase letter lexicographically larger or smaller than the lowercase letter? 

Another possible question: 
- Could there be any other characters besides a to z? and how I might compare them? 

# Progress

## Week 1: Arrays

(April 18th - April 24th)

### Algo: Arithmetic Slices
Medium

(Basic math and array manipulation) - Array + Dynamic Programming

https://leetcode.com/problems/arithmetic-slices/

| Attempt | #1  | #2  | #3  | #4  | #5  | #6  | #7  |
| :-----: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Minutes | 30  | --  | --  | --  | --  | --  | --  |

[Details here](https://github.com/ngl4/formation_journey/blob/main/AlgoMarathon/Arrays/ArithmeticSlices.js)


### Algo: Sorted Array to BST
Easy

(handling two different data structures and deeply understanding how binary search trees work) - Array & Binary Search Tree

Make sure to understand how to do Tree Traversal 

https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

| Attempt | #1  | #2  | #3  | #4  | #5  | #6  | #7  |
| :-----: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Minutes | 30  | --  | --  | --  | --  | --  | --  |

[Details here](https://github.com/ngl4/formation_journey/blob/main/AlgoMarathon/Arrays/SortedArraytoBST.js)


### Algo: Convert Array into Zig Zag
Easy

Convert an array in a zig zag fashion

https://www.geeksforgeeks.org/convert-array-into-zig-zag-fashion/

| Attempt | #1  | #2  | #3  | #4  | #5  | #6  | #7  |
| :-----: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Minutes | 37  | --  | --  | --  | --  | --  | --  |

Attempt#1: includes time that I watched the Youtube video (8mins)

[Details here](https://github.com/ngl4/formation_journey/blob/main/AlgoMarathon/Arrays/ConvertArrToZigzag.js)


### Learn Strength Algo: Dutch National Flag

| Attempt | #1  | #2  | #3  | #4  | #5  | #6  | #7  |
| :-----: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Minutes | 30  | --  | --  | --  | --  | --  | --  |

Attempt#1: spent an extra 15 mins to read through the solution in Leetcode regarding the One Pass approach to this problem. 

[Details here](https://github.com/ngl4/formation_journey/blob/main/AlgoMarathon/Arrays/DutchNationalFlag.js)


### Number elements repeated X times in array

| Attempt | #1  | #2  | #3  | #4  | #5  | #6  | #7  |
| :-----: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Minutes | 30  | --  | --  | --  | --  | --  | --  |

[Details here](https://github.com/ngl4/formation_journey/blob/main/AlgoMarathon/Arrays/repeatedXtimes.js)


### 2D Matrix (Array)

| Attempt | #1  | #2  | #3  | #4  | #5  | #6  | #7  |
| :-----: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Minutes | 30  | 60  | --  | --  | --  | --  | --  |

Attempt2: learning the pattern through the guidance of a Formation fellow!! 

[Details here](https://github.com/ngl4/formation_journey/blob/main/AlgoMarathon/Arrays/2DMatrix.js)


### Group Anagram (Array of Strings)

https://leetcode.com/problems/group-anagrams/solution/

https://www.algoexpert.io/questions/Group%20Anagrams

| Attempt | #1  | #2  | #3  | #4  | #5  | #6  | #7  |
| :-----: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Minutes | 35  | --  | --  | --  | --  | --  | --  |

[Details here](https://github.com/ngl4/formation_journey/blob/main/AlgoMarathon/Strings/GroupAnagrams.js)

### Week 2: Focus on Arrays & some Strings
(April 25th - May 1st)

###

| Attempt | #1  | #2  | #3  | #4  | #5  | #6  | #7  |
| :-----: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Minutes | 30  | --  | --  | --  | --  | --  | --  |

[Details here]()

<!--

### Week 1: Focus on Arrays
(April 18th - April 24th)

###

| Attempt | #1  | #2  | #3  | #4  | #5  | #6  | #7  |
| :-----: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Minutes | 30  | --  | --  | --  | --  | --  | --  |

[Details here]()

 -->
