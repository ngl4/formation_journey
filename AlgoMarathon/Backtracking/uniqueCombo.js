/*
Given an array of unique numbers (nums), find all possible unique combinations of those numbers.

Input: [1, 2, 3]
Output: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]

Be aware of the sort order of the output.

Backtracking
*/ 

function uniqueCombo(nums) {
    let res = []; 
    function backtracking(arr, i_posn, curr_res){
  
      //base case 
      if (i_posn >= arr.length) {
        res.push([...curr_res]); 
        return; 
      }
  
      //recursive case - pick 
      curr_res.push(arr[i_posn]); 
      backtracking(arr, i_posn + 1, curr_res); 
  
      //recusive case - not pick 
      curr_res.pop(); 
      backtracking(arr, i_posn + 1, curr_res); 
    }
  
    backtracking(nums, 0, []); 
    return res.sort(); 
  }
  
  console.log(uniqueCombo([1, 2, 3])); 