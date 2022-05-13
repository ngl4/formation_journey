/*
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

 

Example 1:

Input: nums = [1,2,2,3]
Output: true
Example 2:

Input: nums = [6,5,4,4]
Output: true
Example 3:

Input: nums = [1,3,2]
Output: false

*/


//ATTEMPT #1: 05/13/22

/*
[1,2,2,3]
     i

increasing: true
decreasing: false

output: true || false ===> true


[6,5,4,4]
     i

increasing: false
decreasing: true

output: false || true ===> true


[1,3,2]
   i

increasing: false
decreasing: false

output: false || false ===> false

*/
var isMonotonic = function(nums) {
    //easier to understand + cleaner solution - using one pass only 
    let increasing = true, decreasing = true; 
    for (let i = 0; i < nums.length - 1; ++i) {
        if (nums[i] > nums[i+1]) increasing = false; 
        if (nums[i] < nums[i+1]) decreasing = false; 
        console.log("inside loop: ", increasing, decreasing); 
    }
    console.log("outside loop: ", increasing, decreasing); 
    return increasing || decreasing; 
    
    //My first approach: repetitive when doing it in two pass 
    // if (nums.length < 2) return true; //removed in optimal solution
    // if (nums[0] <= nums[1]) { 
    //     for (let i = 0; i < nums.length - 1; i++) {
    //         if (nums[i] > nums[i + 1] ) return false;  
    //     }        
    // }
    // if (nums[0] >= nums[1]) {
    //     for (let i = 0; i < nums.length - 1; i++) {
    //         if (nums[i] < nums[i + 1]) return false; 
    //     }        
    // }
    // return true; 
};