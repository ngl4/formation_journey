/*
Given a matrix of integers, determine if the matrix is monotonically increasing along all rows and all columns. This means that along every row (left to right) and column (top to bottom), each successive value is AT LEAST as large as the previous value. For example:

1 1 1 2
1 2 3 3
3 4 5 6
satisfies the requirements.

You may assume that every row is the same length, ie, the matrix will be rectangular.

Input:
matrix:
[[1,2], 
 [3,4]]

Expected Output:
true


Input:
matrix:
[[1,1,1,2], 
 [1,2,3,3], 
 [3,4,5,6]]
Expected Output:
true

Input:
matrix:
[[1,2], 
 [3,1]]
Expected Output:
false

Input:
matrix:
[[5,2], 
 [3,4]]
Expected Output:
false


Failed 2 edge cases - unable to view them in CodeSignal...

After discussing with Mentor Daniel and Fellow Arthur Damm, the edge cases could be related to the first top down value (ie, for test variable below, the value 9 in i = 0, and the value 2 in i = 1) and the last bottom right corner value (for the test variable below, the "0" zero value)

Special Thanks to Arthur Damm who has been guiding me along when walking through this matrix problem!!! 


  Here is the visualization of the 2 approaches (that inspired by Arthur's explanation): 
  
   Looking Forward Moving Forward
   i-> i ->   (compare the current with the value on the right - the curr value should be less than or equal to the right value)
   |   |      (compare the current with the value on the bottom - the curr value should be less than or equal to the bottom value)
   0   1   2  (index)
  

   Looking Backward Moving Forward 
     |    |
   <-i  <-i
   0 1    2 (index)
*/

function isMonotonic2DMatrix(matrix) {

    function print_cell(i, j) {
      return `[${i}][${j}]=${matrix[i][j]}`;
  }
  
    if (!Array.isArray(matrix) || !Array.isArray(matrix[0]))
      return false
  
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
  
            //LOOKING BACKWARD (MOVING FORWARD) - LBMF
            if (j >= 1) {
              console.log("comparing", print_cell(i, j), "with", print_cell(i, j - 1));
               if (matrix[i][j - 1] > matrix[i][j])
                 return false;
            }
              
            if (i >= 1) {
              console.log("comparing", print_cell(i, j), "with", print_cell(i - 1, j));
              if (matrix[i - 1][j] > matrix[i][j])
                return false
            }
  
            //LOOKING FORWARD (MOVING FORWARD) - LFMF
            // if (j < matrix[i].length) {
            //   console.log("comparing", print_cell(i, j), "with", print_cell(i, j + 1));
            //    if (matrix[i][j + 1] < matrix[i][j])
            //      return false;
            // }
              
            // if (i < matrix.length) {
            //   console.log("comparing", print_cell(i, j), "with", print_cell(i + 1, j));
            //   if (matrix[i + 1][j] < matrix[i][j])
            //     return false
            // }
        }
    }
    return true;
  }
  
  
    const test  = [[9, 2],
                   [2, 0]] //edge case!
  
    const test2  = [[2, 8],
    [2, 9]] //monotonically increase matrix!! 
    
    const test3  = [8, 1] //edge case: an array with values
    const test4  = []     //edge case: an array without values 
    const test5  = [[]]   //edge case: matrix without values
    
  console.log(isMonotonic2DMatrix(test));
  console.log(isMonotonic2DMatrix(test2));
  console.log(isMonotonic2DMatrix(test3), false);
  console.log(isMonotonic2DMatrix(test4), false);
  console.log(isMonotonic2DMatrix(test5), true);

/*

Comments from Mentor Daniel on my approach: 

I have to think about this because you're doing it opposite of how I do it. 
You're starting from 0 and going until the second to last, then looking forward.

In some ways, I like your concept.

Except it has a hole.

If you're at position (x, y), then all you need to do is compare against (x + 1, y) and also (x, y + 1).
But this leaves a hole in the bottom right corner.

Because you'll never compare this value against the one above and to the left.

I approach this problem starting from 1 and then look back.
So from position (x, y) I compare against (x - 1, y) and (x, y - 1).

In this way, I'll finally reach the last position where x = matrix[0].length - 1 and y = matrix.length - 1 and look at the cell above and the cell to the left.

*/

function isMonotonic2DMatrix(matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[i].length - 1; j++) {
            if (matrix[i][j + 1] < matrix[i][j] || 
            matrix[i + 1][j + 1] < matrix[i + 1][j]|| 
            matrix[i + 1][j + 1] < matrix[i][j + 1]) 
            return false; 
        }
    }
    return true; 
}


/*

matrix:
[[1,2], [3,4]]

output: true


prev: a[i][j]
next: a[i][j]

i = 0
[1,2]
   j
   
i = 1
[3,4]
   j

*/ 