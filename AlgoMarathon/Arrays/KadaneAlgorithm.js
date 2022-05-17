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