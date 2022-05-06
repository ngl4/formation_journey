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