/*
Input set: {'a', 'b', 'c', 'd'}
Power set:
{
    {},
    {'a'},
    {'b'},
    {'c'},
    {'d'},
    {'a', 'b'},
    {'a', 'c'},
    ....
    {'a', 'b', 'c', 'd'}
    
}
*/ 

/*
         
      0  1  2  3  4   5
      a  b  c
               i

                _
                 
             a   a  b  c
            /    i   
          b      a  b  c
         /          i
        c        a  b  c
       /               i
    null         a  b  c
                         i


                         a b c
                         a c
                         a b
                         b c
                         a
                         b
                         c


  bactracking([], 0) - complete
      add 'a', call bt 
        backtracking(['a'], 1) - completed
            adding 'b', call bt
            curr_res now ['a', 'b']
            backtracking(['a', 'b'], 2) - completed
                adding 'c', call bt
                backtracking(['a', 'b', 'c'], 3) - add to result, done
                
                removing 'c', call bt
                bactracking(['a', 'b'], 3) - add to result, done
            
            remove 'b', call bt
            backtracking(['a'], 2) - completed
              add arr[2] to curr_res, call bt
              backtracking(['a', 'c'], 3) - add to result, done

              remove arr[2] from curr_res, call bt
              backtracking(['a'], 3) - add to result, done
      
      remove 'a', call bt
      bactracking([], 1) - completed
        add arr[1] to curr_res, call bt
          backtracking(['b'], 2) - completed
            add arr[2] to curr_res, call bt
              bactracking(['b', 'c'], 3) - add to result, done
            remove arr[2] from curr_res, call bt
              backtracking(['b'], 3) - add to result, done

        remove arr[1] from curr_res, call bt
          backtracking([], 2) - completed
            add arr[2] to curr_res, call bt
              backtracking(['c'], 3) - add to result, done
            remove arr[2] from curr_res, call bt
              backtracking([], 3) - add to result, done



                1
              2   3
          4   5   6   7

          return [
            [1, 2, 4]
            [1, 2, 5]
            [1, 3, 6]
            [1, 3, 7]
          ]
                                []
          a              a              []   
          b          ab     a         b    []
          c        abc ab  ac  a   bc  b   c   []

          going left: take the next character
          going right: don't take the next character, stay as is.


          */

          function printAllDfsPaths(tree) {


        }
        function powerset(arr) {
          let final_res = []
          
          
          function backtracking(curr_res, i) {
            // base case
            // when i goes outside of the original arr range
            if(i == arr.length) {
              final_res.push([...curr_res])
              console.log("adding to final_res: ", curr_res)
              return
            }
        
            // recursive case
            // curr_res = [] -> ['a'] -> ['a', 'b'] -> ['a', 'b', 'c']
            //  i       = 0  ->   1   ->      2     ->     3
            // taking the current letter, and call recursively
            curr_res.push(arr[i]);
            backtracking(curr_res, i+1);
        
            // NOT take the current letter, and call recursively
            curr_res.pop();
            backtracking(curr_res, i+1)
          }  
        
          backtracking([], 0)
        
          return final_res
        
        }
        
        console.log(powerset(['a', 'b', 'c']));