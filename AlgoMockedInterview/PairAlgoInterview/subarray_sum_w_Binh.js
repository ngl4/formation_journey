/*
Prompt
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.


input = [2,3,5,9] k = 5 
result = 2 


input can have negative numbers
input is empty || null = 0


2,3,5,9

[2, 3, 5, 9 ] k = 5.      result=2      curSum=0    windownStart = 4 

curSum = 0 
*/

/*

Questions: input/output 

Test Cases 

Happy 
[1, 0]

input = [2,3,5,9] k = 5 

Bad
[] = null/0

Edge
[-1,-1, 1] => 1 K = 0


Approaches


Insights:
- cumulative sum 

Recipe: 

iterate .. 
  iterate ...

manual test

Implementation


*/


/*
We can solve this problem using a dictionary to record the cumulative sum at each element and map it to the number of times that sum has been seen. If we ever find a non-nil entry for the key at cumulative sum - k, we know for sure that some subarray must have summed to k, and the value at that key will tell us the number of subarrays that have summed to k at that point. Note that the number of subarrays that sum to k at particular key may be greater than 1 if some elements of the subarray are negative. We initialize the dictionary with a mapping of [0: 1] for the case where the first element of the array is exactly equal to k, in which case we want to return 1 for the key currSum - k = 0.

https://leetcode.com/problems/subarray-sum-equals-k/solution/
*/
function countSubarraySum(nums, k) {
    let currSum = 0;
    const seenSums = {0: 1};
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        count += seenSums[currSum - k] || 0;
        seenSums[currSum] = (seenSums[currSum] || 0) + 1;
    }
    return count;
  }
  
  function subarraysK(arr, k){
    let result =0;
    let windownStart = 0;
  
    if(!arr) return result; 
    if(arr.length === 1 && arr[0] != k) return 0; 
    let curSum = arr[0]; 
  
    
    for(let windowEnd = 1; windowEnd < arr.length; windowEnd++){
      curSum += arr[windowEnd];
  
      while(curSum >=k){
        if(curSum ===k){
          result++; 
        }
        curSum -= arr[windownStart];
        windownStart++; 
      }
  
    }
  
    return result;
  
  }
  
  [-1,-1,1]
  [1]
  
  console.log(subarraysK([], 5), 0);
  console.log(subarraysK(null, 5), 0);
  console.log(subarraysK([2,3,5,9], 5), 2);
  console.log(subarraysK([2,-3,5,9], 2), 2);
  console.log(subarraysK([1, 1, 1], 2) == 2); // (1,1), (1, 1)
  console.log(subarraysK([1, 2, 3, -1, 4], 3) == 3); // (1,2), (3), (-1, 4)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // var hammingWeight = function (n) {
  //   let output = 0;
  //   while (n != 0) {
  //       n &= n - 1;
  //       console.log(n.toString(2));
  //       output++;
  //   }
  //   return output;
  // };
  
  // console.log(hammingWeight(11)); 