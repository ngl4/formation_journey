// Prompt
// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Writeup: https://leetcode.com/problems/subarray-sum-equals-k/

/*
func numSubarrays(input: [Int], target: Int) -> Int


Numbers can be negative


Brute force approach: O(n^3)

----
**INCORRECT thought direction:**

Sliding Window (non-sorted -> we can then sort it first then iterate through using 2 pointers technique)
Time: O(n log n)
space: O(1)
Sliding Window + 2 pointers (in a sorted situation). 
-----

Optimized approach: (using Hashmap)

iterate through the array once 

Time: O(N)
Space: O(1)

*/


//OPTIMIZED: 
/*
- Create a map to store the key (sum) value (ecountered count of the sum)
- iterate through the input array 
- if the sum is found more than once, inc value 
- inc the count when the sum - k === a key in the map 
*/

function countSubarraySum(nums, target) {
    let count = 0; 
    let sum = 0; 
    let freqMap = new Map(); 
    freqMap.set(0, 1); 
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i]; 
      let sumCount = (freqMap.get(sum) || 0) + 1;
      freqMap.set(sum, sumCount); 
      count = (freqMap.get(sum - target) || 0) + 1;
    }
    return count; 
  }
  
  //SOLUTION FROM FORMATION 
  // function countSubarraySum(nums, k) {
  //   let currSum = 0;
  //   const seenSums = {0: 1};
  //   let count = 0;
  //   for (let i = 0; i < nums.length; i++) {
  //       currSum += nums[i];
  //       count += seenSums[currSum - k] || 0;
  //       seenSums[currSum] = (seenSums[currSum] || 0) + 1;
  //   }
  //   return count;
  // }
  
  /*
  MY Approach 
  Sliding window: O(N^2)
  - iterate through the input array 
  - for each iteration, slide the window into different sizes
    - record the total sum of all items in the window and compare it with k
    - if the sum is equal to K => inc count 
  
  Time: 
    - Worst case: O(N^2)
    - Best case: O(N)
    - window will get smaller as it progresses through the array 
  Space: 
    - O(1)
  
  */
  
  //Attempt #2: Success
  // const countSubarraySum = (input, target) => {
  //   let count = 0; 
  //   for (let i = 0; i < input.length; i++) {
  //     let j = i; 
  //     let sum = 0; 
  //     while (j < input.length) { //looking forward 
  //       sum += input[j]; 
  //       if (sum === target) {
  //         count++;
  //       }
  //       j++; 
  //     }
  //   }
  //   return count; 
  // }
  
  
  //Attempt #1: Failed 
  // const countSubarraySum = (input, target) => {
  //   let count = 0; 
  //   for (let i = 0; i < input.length; i++) {
  //     let j = input.length - 1; 
  //     let sum = 0; 
  //     while (j >= 0) { //incorrect when looking backward why?? 
  //       sum += input[j]; 
  //       if (sum === target) {
  //         count++;
  //       }
  //       j--; 
  //     }
  //   }
  //   return count; 
  // }
  
  /*
  First Approach Testing found issue: 
  
  1, 2, 3
  ^
  
  target: 3
  
  i:1
  j:2
  sum: 3
  count: 2
  */
  
  console.log(countSubarraySum([1, 2, 3], 3), 2); // (1,2), (3)