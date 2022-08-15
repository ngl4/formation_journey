/*
- Should I assume it should not be sorted? or can it be sorted? or does it really matter? 

[] => true or false? 
[1] => true

Approaches: 

1) Sort then find - if we encounter a num more than once, then it will return false, else keep iterating throu until the end of the array

Time: O(n log n) 
Space: O(1)

2) Non-sorted - set a count variable + use a Map to store num item as the key and its frequency as the value (count)

Time: O(n)
Space: O(n)

3) Is there an optimized version? 

Time: O(n)
Space: O(1)

*/
var containsDuplicate = function(nums) {
    let freqMap = new Map();
    for (let i = 0; i < nums.length; i ++) {
        let count = freqMap.get(nums[i]) || 0; 
        count++; 
        if (count > 1) {
            return true; 
        }
        freqMap.set(nums[i], count); 
    }
    return false; 
  };
  
  console.log(containsDuplicate([1,2,3,1]));
  console.log(containsDuplicate([1,2,3]));
  
  /*
  nums = [1,2,3,1]
  
  1,2,3,1
      ^
  
  count = 2 => true 
  
  {
  1: 1
  2: 1
  3: 1
  }
  
  */
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  