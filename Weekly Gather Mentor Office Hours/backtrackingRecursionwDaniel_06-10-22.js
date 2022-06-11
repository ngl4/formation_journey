// Backtracking = DFS of a decision tree


function genericBacktracking() {
    // Are we at a dead 
      // if we are handle this as a base case
      // return
  
    // for each possible branch (or choice)
      // try that choice recursively
      // merge results from different choices
  
    // return the result from this level or position
  }
  
  // [1, 2, 3] => [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
  
  function powerset(elements) {
    const result = [];
    const subset = [];
  
    function helper(i) {
      if (i === elements.length) {
        result.push([...subset]);
        return;
      }
  
      // Branch 1: include element at i
      subset.push(elements[i]);
      helper(i + 1);
  
      // Branch 2: do not include element at i
      subset.pop();
      helper(i + 1);
    }
  
    helper(0);
  
    return result;
  }
  
  console.log(powerset([1, 2, 3]))
  
/*
i                  _
0         1               !1
1      2     !2         2      !2
2    3  !3  3  !3     3  !3   3 !3
   123  12  13  1     23  2   3  _
*/