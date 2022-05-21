/*
Given a two dimensional matrix (NxM), a size A such that A is less than both N and M, and an offset X, Y, return a new matrix that is the sub-matrix of the original. The size of the new matrix is AxA (square) and the values should be those in the original matrix starting at position indicated by the offset (X, Y). For example for an input matrix:

1 2 3
4 5 6
7 8 9
Size is 2 and offset is (0, 1), the expected output is:

2 3
5 5
Because the output is size 2x2 and is taken from a submatrix whose top left corner is at (0, 1) in the original.

Return an empty array if a square of the required size is not possible at starting at the given offset. The input matrix can be assumed to be a consistent rectangle (all rows are the same length).



*/

//FIRST ATTEMPT: FAILED
function solution(matrix, size, y, x) {
    if (matrix.length === size && x === 0 && y === 0) {
        return matrix; 
    }
    for (let i = y; i < matrix.length; i++) { //row (x)
        for (let j = x; j < matrix[i].length; j++) {
            console.log(matrix[i][j], matrix[i][j+1])
        }
    }
}

/*
Test cases

Input:
matrix:
[[1,2,3], 
 [4,5,6], 
 [7,8,9]]
size: 2
x: 1
y: 1
Expected Output:
[[5,6], 
 [8,9]]


 Input:
matrix:
[[1,2,3], 
 [4,5,6], 
 [7,8,9]]
size: 2
x: 0
y: 1
Expected Output:
[[2,3], 
 [5,6]]


 Input:
matrix:
[[1,2,3], 
 [4,5,6], 
 [7,8,9]]
size: 3
x: 0
y: 0
Expected Output:
[[1,2,3], 
 [4,5,6], 
 [7,8,9]]


Input:
matrix:
[[1,2,3,4], 
 [5,6,7,8], 
 [9,10,11,12], 
 [13,14,15,16]]
size: 3
x: 1
y: 0
Expected Output:
[[5,6,7], 
 [9,10,11], 
 [13,14,15]]


*/
