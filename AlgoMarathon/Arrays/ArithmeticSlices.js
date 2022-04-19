//Attempt #1 (Failed)
//Approach: Better Brute Force
//Time: o(n^2)
//Space: O(1)
var numberOfArithmeticSlices = function(nums) {
    let count = 0; 
    for (let i = 0; i < nums.length  - 2; i++) {
        let diff = nums[i + 1] - nums[i]; 
        for (let j = i + 2; j < nums.length; j++) {
            if (nums[j] - nums[j-1] === diff) {
                count++; 
            }else break;
        }
    }
    return count; 
};

/*
Progress Notes: 
15 mins 
- try to solve the problem by myself - and know I want to use O(n^2) approach
- did not find a solution, since the second for loop is done incorrectly 

15 mins
- review through the 2 brute force solutions (O(n^3) and O(n^2))
- fully understand how the O(n^2) approach works

Future Attempts: 
- Using Recursion --> T: O(n)  S: O(n)
- Using Dynamic Programming -->  T: O(n)  S: O(n)

*/