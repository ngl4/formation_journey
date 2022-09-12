/*Try again 09/08/22

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]

*/






/** completed in the past 
 * @param {number[]} nums
 * @return {number[][]}
 */
/*

Backtracking
pick or not pick 

result array 
Recursive approach (array, index, curr_state)
using index to keep track of our location within the array 

[1,2,3]  
 ^
 
[1,2,3]  
   ^

*/
var subsets = function(nums) {
    let result = []; 
    function backtracking(arr, i = 0, curr_state = []) {
        //base 
        if (i === arr.length) {
            result.push(curr_state); 
            return; 
        }
        
        //recursive 
        //pick 
        curr_state.push(arr[i]); 
        backtracking(arr, i + 1, curr_state);
        arr.pop(); 
        
        //not pick 
        // backtracking(arr, i + 1, curr_state);
        
    }
    backtracking(nums);
    return result; 
};