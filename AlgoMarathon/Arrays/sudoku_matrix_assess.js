/*
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

Example

For the first example below, the output should be true. For the other grid, the output should be false: each of the nine 3 × 3 sub-grids should contain all of the digits from 1 to 9.

Input:
grid:
[[1,3,2,5,4,6,9,8,7], 
 [4,6,5,8,7,9,3,2,1], 
 [7,9,8,2,1,3,6,5,4], 
 [9,2,1,4,3,5,8,7,6], 
 [3,5,4,7,6,8,2,1,9], 
 [6,8,7,1,9,2,5,4,3], 
 [5,7,6,9,8,1,4,3,2], 
 [2,4,3,6,5,7,1,9,8], 
 [8,1,9,3,2,4,7,6,5]]
Expected Output:
true

Input:
grid:
[[1,3,4,2,5,6,9,8,7], 
 [4,6,8,5,7,9,3,2,1], 
 [7,9,2,8,1,3,6,5,4], 
 [9,2,3,1,4,5,8,7,6], 
 [3,5,7,4,6,8,2,1,9], 
 [6,8,1,7,9,2,5,4,3], 
 [5,7,6,9,8,1,4,3,2], 
 [2,4,5,6,3,7,1,9,8], 
 [8,1,9,3,2,4,7,6,5]]
Expected Output:
false


Input:
grid:
[[5,5,5,5,5,5,5,5,5], 
 [5,5,5,5,5,5,5,5,5], 
 [5,5,5,5,5,5,5,5,5], 
 [5,5,5,5,5,5,5,5,5], 
 [5,5,5,5,5,5,5,5,5], 
 [5,5,5,5,5,5,5,5,5], 
 [5,5,5,5,5,5,5,5,5], 
 [5,5,5,5,5,5,5,5,5], 
 [5,5,5,5,5,5,5,5,5]]
Expected Output:
false

grid:
[[1,2,3,4,5,6,7,8,9], 
 [4,6,5,8,7,9,3,2,1], 
 [7,9,8,2,1,3,6,5,4], 
 [1,2,3,4,5,6,7,8,9], 
 [4,6,5,8,7,9,3,2,1], 
 [7,9,8,2,1,3,6,5,4], 
 [1,2,3,4,5,6,7,8,9], 
 [4,6,5,8,7,9,3,2,1], 
 [7,9,8,2,1,3,6,5,4]]
Expected Output:
false

[execution time limit] 4 seconds (js)

[input] array.array.integer grid

A matrix representing 9 × 9 grid already filled with numbers from 1 to 9.

[output] boolean

true if the given grid represents a correct solution to Sudoku, false otherwise.
*/


//ATTEMPT #1: (FAILED)

function solution(grid) {
    for (let i = 0; i < grid.length -2; i+= 3) {
        let gridSet = new Set(); 
       for (let j = 0; j < grid[i].length; j+=3) {
           if (!gridSet.has(grid[i][j])) gridSet.add(grid[i][j])
           else return false; 
           console.log(grid[i][j]); 
       }
    } 
    return true;
}


/*
input: 
[[1,3,2,5,4,6,9,2,7], 
 [4,6,5,8,7,9,3,8,1], 
 [7,9,8,2,1,3,6,5,4], 
 [9,2,1,4,3,5,8,7,6], 
 [3,5,4,7,6,8,2,1,9], 
 [6,8,7,1,9,2,5,4,3], 
 [5,7,6,9,8,1,4,3,2], 
 [2,4,3,6,5,7,1,9,8], 
 [8,1,9,3,2,4,7,6,5]]
 
output:
false

input: 
[[1,3,2,5,4,6,9,8,7], 
 [4,6,5,8,7,9,3,2,1], 
 [7,9,8,2,1,3,6,5,4], 
 [9,2,1,4,3,5,8,7,6], 
 [3,5,4,7,6,8,2,1,9], 
 [6,8,7,1,9,2,5,4,3], 
 [5,7,6,9,8,1,4,3,2], 
 [2,4,3,6,5,7,1,9,8], 
 [8,1,9,3,2,4,7,6,5]]
 
 output: 
 true

*/ 
