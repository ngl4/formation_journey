/*
07-03-22
*/
var twoSum = function(nums, target) {
    //one pass hashtable Time: O(n) Space: O(n) - Optimized (increase space to reduce time)
    let indexMap = new Map(); //key: 'item value'   value: 'index number'
    for (let i = 0; i < nums.length; i++) {
        let remaining = target - nums[i]; 
        if (indexMap.has(remaining)) {
            return [indexMap.get(remaining), i]; 
        }
        indexMap.set(nums[i], i); 
    }
    
    //brute force Time: O(n^2) Space: O(1) 
    // for (let i = 0; i < nums.length; i++) {
    //     let currVal = nums[i]; 
    //     for (let j = i + 1; j < nums.length; j++) {
    //         let sum = currVal + nums[j]; 
    //         if (sum === target) {
    //             return [i, j];
    //         }
    //     }
    // }
};


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    //Two pointers: Time: O(n) Space: O(1) - more optimized space solution
        let low = 0; 
        let high = numbers.length - 1; 
        
        while (low < high) {
            let sum = numbers[low] + numbers[high]; 
            if (sum === target) {
                return [low + 1, high + 1];
            }else if (sum < target) {
                low++; 
            }else {
                high--; 
            }  
        }
        return [-1, -1];
    
        
    //one pass hashtable: Time: O(n) Space: O(n)
       // let indexMap = new Map(); 
       // for (let i = 0; i < numbers.length; i++) {
       //     let remaining = target - numbers[i]; 
       //     if (indexMap.has(remaining)) {
       //         return [indexMap.get(remaining) + 1, i + 1];
       //     }
       //     indexMap.set(numbers[i], i); 
       // } 
    };