/*

Given an array of integers, return maximum subarray sum. A subarray is any contiguous set of numbers


can inputArray be empty? []
what are the possible numbers in the inputArray
[1,2,3,4] => 1 + 2 + 3 + 4 = 10
[1,2,3,4,-20,2,3,4,5] => 10 => 0 => [2,3,4,5] => 14,13 => 14
[] => 0
[-3, -1, -2] => 0
[1,2,3,4,-20] => 10

max => the returned answer
14
currSum, represents the current subarray we are considering
14 (current num is larger than currSum -> we reset the currSum to num)

1, 2, 3, 4, -20, 2, 3, 4, 5
                          ^
max = 14
currSum = 14


max = 10
-10, 2 => if the current sum is smaller than the current number at index i
reset our max counter
only the max if the counter is greator than max
keep summing up the numbers as we go
keeps a max for record (current maximum subarray sum)
*/

// time complexity
// O(N) where N is number of the elements in the input array
// space complexity
// O(1) constant, we are not adding extra space other than the input
function getMaximumSubArraySum(input) {
    let max = 0;
    let currSum = 0;
    for (const num of input) {
      currSum = Math.max(currSum + num, num);
      max = Math.max(max, currSum);
    }
    return max;
  }
  
  
  
  console.log(getMaximumSubArraySum([1,2,3,4])) //=> 1 + 2 + 3 + 4 = 10
  console.log(getMaximumSubArraySum([1,2,3,4,-20,2,3,4,5])) //=> 10 => 0 => [2,3,4,5] => 14,13 => 14
  console.log(getMaximumSubArraySum([])) //=> 0
  console.log(getMaximumSubArraySum([-3, -1, -2])) //=> 0
  console.log(getMaximumSubArraySum([1,2,3,4,-20])) //=> 10
  
  
  /*
          3
        2   5
      2 5   3 2
  
  
  
      1, 2, -10, 2, 3
  */