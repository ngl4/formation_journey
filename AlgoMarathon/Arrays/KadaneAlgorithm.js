/*
Given an array of integers, return maximum subarray sum. A subarray is any contiguous set of numbers
Function Signature: 
func maxSubarraySum(input: [Int]) -> Int

*/

/*
Understanding the algorithms (this is using DYNAMIC PROGRAMMING)

- This algo is being used to solve max subarray problem
- one single pass 
- the solution is pretty elegant!! 

max ending here = max (max ending here + num, num)
max so far = max (max so far, max ending here)

(actual max value return at the end)

Time: O(n)
Space: O(1)

*/

//ATTEMPT #2 (SOLVED WITH BRUTE FORCE - THANKS TO FELLOW MAGGIE!!) ~ READ MORE ON TAKEAWAYS IN PAIR LEARNING README!!

// PROBLEM
// Given an array of integers, return maximum subarray sum. 
// A subarray is any contiguous set of numbers

// Function Signature: 
// func maxSubarraySum(input: [Int]) -> Int

// Examples:
// [2, 2, -3, 6, -10, 4] => 7     //[2, 2, -3, 6]
// [] => 0
// [1] => 1
// [-2, 1] => 1
// [-1, -2, -3] => 0 // -1


/*
Approaches: 
#1: 
maxSum = -Infinity
nested loop 
iterate through the input and adds the values as it iterates through each index
sum = 2 + 2 + (-3)
if (sum > maxSum) maxSum = sum; 
Time: O(N^2) => N = numbers of elements of the input array 
Space: O(1)

#2: Kadane's Algo 

[2, 2, -3, 6, -10, 4]
        ^
iterate through the input array once
max end sum = max(num, max end sum + num). -3, 1
max so far = max (max end sum, max so far)

return max so far

Time: O(N) => N = numbers of elements of the input array 
Space: O(1)

*/

// function maxSubarraySum(input) {
//   let maxSum = input.length < 1 ? 0 : -Infinity; 
//   for (let i = 0; i < input.length - 1; i++) {
//     let sum = input[i];
//     for (let j = i + 1; j < input.length; j++) {
//       sum += input[j]; 
//       if (sum > maxSum) maxSum = Math.max(input[j], maxSum); 
//     }
//   }
//   // return maxSum;
//   return maxSum > 0 ? maxSum : input.length === 1 ? input[0] : 0; 
// }

const maxSubarraySum = (nums) => {
    let currentSum = 0;
    let globalSum = nums[0];
    
    for (const num of nums) {
      currentSum = Math.max(num, currentSum + num);
      globalSum = Math.max(globalSum, currentSum);
    }
    
    return globalSum;
  };
  
  //my attempt failed for 2 elements array or 1 element array
  
  console.log(maxSubarraySum([]), 0); //edge case (empty case)
  console.log(maxSubarraySum([2, 2, -3, 6, -10, 4]), 7); 
  console.log(maxSubarraySum([1, 2, 3] ), 6); 
  console.log(maxSubarraySum([-1, -2, -3]), -1); //edge case (all negative numbers)
  
  console.log("Don't pass yet")
  console.log(maxSubarraySum([1]), 1); //edge case (empty case);
  console.log(maxSubarraySum([3, 4, -6, 7, 8, -18, 100]), 100); //edge case (empty case)
  console.log(maxSubarraySum([-2, 1]), 1); //edge case (empty case);
  console.log(maxSubarraySum([-10]), -10); //edge case (empty case);

//ATTEMPT #1 (PARTIALLY CORRECT) - using brute force (does not cover all the edge cases )
//seems like a sliding window problem 
function maxSubarraySum(input) {
    let maxSum = input.length < 1 ? 0 : -Infinity; 
    for (let i = 0; i < input.length - 1; i++) {
      let sum = input[i];
      for (let j = i + 1; j < input.length; j++) {
        sum += input[j]; 
        if (sum > maxSum) maxSum = sum; 
      }
    }
    return maxSum > 0 ? maxSum : 0; 
  }

  //my attempt failed for 2 elements array or 1 element array
  
  console.log(maxSubarraySum([]), 0); //edge case (empty case)
  console.log(maxSubarraySum([2, 2, -3, 6, -10, 4]), 7); 
  console.log(maxSubarraySum([1, 2, 3] ), 6); 
  console.log(maxSubarraySum([-1, -2, -3]), 0); //edge case (all negative numbers)