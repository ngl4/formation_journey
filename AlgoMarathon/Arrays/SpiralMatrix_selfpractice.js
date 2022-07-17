/*  07-16-22

##### Problem Prompt #####
Q. Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order starting from the top left element.

Examples:

Given a matrix:
[               
    [1, 2, 3],            
    [4, 5, 6],          
    [7, 8, 9]  
]   
returns: [1, 2, 3, 6, 9, 8, 7, 4, 5]

Given a matrix:
[
    [1, 2, 3],
    [4. 5. 6]
]
returns: [1, 2, 3, 6, 5, 4]

Input:
m:
[[1,2], 
 [3,4]]

 Expected Output:
[1, 2, 4, 3]


##### Pseudocode: #####

Set up four pointers 
when the rs <= re and cs <= ce, keep traversing spirally 
starting from: 

Left -> Right (moving right)
Traverse Horizontally (~ traversing in columns) forward. (i <= colEnd)
constant: rowStart
moving: columns (cs -> ce) i++
rowStart++; 

Top -> Bottom (moving down)
Traverse Vertically (~ traversing in rows) forward 
constant: colEnd 
moving: rows (rs -> re) i++; 
colEnd--;

if (cs <= ce) {

Right -> Left (moving left)
Traverse Horizontally (~ traversing in columns) backward 
constant: rowEnd
moving: columns (cs <- ce) i--; 
rowEnd--;

}

if (rs <= re) { 

Bottom -> Top (moving up)
Traverse Vertically (~ traversing in rows) backward 
constant: colStart
moving: rows (rs <- re) i--; 
colStart++; 

}


##### Manual Testing: #####

#Problem3 Manual Test Case: 

output: [1,2,4,3]
rowStart = 2; 
rowEnd = 1; 
colStart = 0; 
colEnd = 0;
    ce
    cs  
re  [1,2]
rs  [3,4]


Expected: [1, 2, 4, 3]



#Problem2 Manual Test Case: 
output: [1,2,3,6,5,4]
rowStart = 1; 
rowEnd = 0; 
colStart = 0; 
colEnd = 1;

Given a matrix:

    cs  ce  
re  [1, 2, 3]
rs  [4, 5, 6]

Expected: [1, 2, 3, 6, 5, 4]


#Problem1 Manual Test Case: 
output: [1,2,3,6,9,8,7,4,5]
rowStart = 2; 
rowEnd = 1; 
colStart = 1; 
colEnd = 1;

          cs
          ce   
      [1, 2, 3]            
  re  [4, 5, 6]          
  rs  [7, 8, 9]  

Expected: [1, 2, 3, 6, 9, 8, 7, 4, 5]

*/


//Implementation: (line-by-line explanation)

function spiralMatrix(matrix) {
    let res = []; 
    let rowStart = 0; 
    let rowEnd = matrix.length - 1; 
    let colStart = 0; 
    let colEnd = matrix[0].length - 1; 
  
    while (colStart <= colEnd && rowStart <= rowEnd) {
      //left to right (constant rowStart, moving columns forward) inc constant rowStart
      for (let i = colStart; i <= colEnd; i++) {
        res.push(matrix[rowStart][i]); 
      }
      rowStart++; 
  
      //top to bottom (constant colEnd, moving rows forward) dec constant colEnd
      for (let i = rowStart; i <= rowEnd; i++) {
        res.push(matrix[i][colEnd]); 
      }
     colEnd--; 
  
      //condition to check (since the pointers are changing, we need an additional check to see if there is a need to keep traversing) - check RowStart <= RowEnd 
      //right to left (constant rowEnd, moving columns backward) dec constant rowEnd
      if (rowStart <= rowEnd) {
        for (let i = colEnd; i >= colStart; i--) {
          res.push(matrix[rowEnd][i]); 
        }
       rowEnd--; 
      }
  
      //condition to check (since the pointers are changing, we need an additional check to see if there is a need to keep traversing)
      //bottom to top (constant colStart, moving rows backward) inc constant colStart
      if (colStart <= colEnd) {
        for (let i = rowEnd; i >= rowStart; i--) {
          res.push(matrix[i][colStart]); 
        }
       colStart++;; 
      }
    }
  
    return res; 
  }
  
  
  console.log(spiralMatrix([[1,2], 
    [3,4]])); 
  console.log(spiralMatrix([
    [1, 2, 3],
    [4, 5, 6]
  ])); 
  console.log(spiralMatrix([               
    [1, 2, 3],            
    [4, 5, 6],          
    [7, 8, 9]  
  ]  )); 