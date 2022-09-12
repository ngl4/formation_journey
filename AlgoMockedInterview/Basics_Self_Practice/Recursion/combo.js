/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    let res = []; 
    
    function backtrack(start, combo) {
      if (combo.length === k) { //know to push the combo found when it reached the height of the decision tree
          res.push([...combo]); 
          return; 
      }  
        
      for (let i = start; i <= n; i++) { //number of intergers(where we are trying to iterate through each possibilities) //choose the numbers that are greater than the prev/smaller number 
          console.log(i);
          combo.push(i); 
          backtrack(i+1, combo);
          combo.pop(); 
      }
    }
    
    backtrack(1, []);
    console.log(res);
    return res; 
};

/*

param n = 4 (1-4 range)
param k = 2 (2 combo)


start at 1

       1
    2  3. 4  = 3 combo
    
       2
    1. 3. 4  = 2 combo (1,2 already existed)
    
       3
    1. 2. 4  = 1 combo (only 3,4)
    
k = height of the decision tree 
complexity: n^k
choose the numbers that are greater than the prev/smaller number 
    
    

*/