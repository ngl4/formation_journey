/*
Spiral Matrix: https://leetcode.com/problems/spiral-matrix/
Spiral Matrix

Given an m x n matrix, return all elements of the matrix in spiral order.

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

rowStart = 0;
rowEnd = matrix.length - 1
colStart=0;
colEnd=matrix[0].length-1;

//define the resultant array of length[m*n]
i=0;
Visualization
    L.          R
T   1   2   3   4//  colstart;<colEnd//rowStart++ [0-3]
T   5   6   7   8//  rowStart;<rowEnd; colEnd-- [1-3]
    9  10  11  12//. colEnd;<colStart;rowEnd-- [2-0]
    13 14  15  16  // rowEnd;<rowStart;colStart++; 
B

AND or OR condition?

output: 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10


O(n) n = number of elements

O(n * m) m= number of elements in row | n= number of elements in column

keep track of what we have last 


Approaches: 

1) Left, Right, Bottom, Top Traversals 
//Left to right
- 
2) Maintain pointers for row and col

3)
- stop traversals when you know the result mxn length has been filled
- keep checking result length
OR
check colStart < colEnd && ? || ?  rowStart < rowEnd
*/ 



function spiralMatrix(input) {
  let res = [];
  let rowStart = 0;
  let rowEnd = input.length - 1
  let colStart = 0;
  let colEnd = input[0].length-1;

  while (rowStart <= rowEnd && colStart <= colEnd) { //||
    // console.log('while loop start'); 
  //top left to top Right //colstart;<colEnd//rowStart++ [0-3]
    for(let i=colStart;i<=colEnd;i++){
      // console.log("left to Right -->",input[rowStart][i]); 
      // console.log(" "); 
      res.push(input[rowStart][i]);
    }
    rowStart++;

  //top right to bottom right  //rowStart;<rowEnd; colEnd-- [1-3]
    for(let i = rowStart; i <=rowEnd; i++) {
      // console.log("top right to bottom right-->", input[i][colEnd])
      // console.log(" "); 
      res.push(input[i][colEnd]);
    }
    colEnd--;
  
    if(rowStart <= rowEnd){
    //bottom right to bottom left //colEnd;<colStart;rowEnd-- [2-0]
      for(let i = colEnd; i >= colStart; i--){
        // console.log("bottom right to bottom left-->",input[rowEnd][i]); 
        // console.log('rowStart:', rowStart); 
        // console.log('rowEnd:', rowEnd); 
        // console.log('colStart:', colStart); 
        // console.log('colEnd:', colEnd); 
        // console.log(" "); 
        res.push(input[rowEnd][i]);
      }
      rowEnd--;
    }
  
    
    if(colStart <= colEnd) {
      //bottom left to top left //rowEnd;<rowStart;colStart++; 
        for(let i = rowEnd; i >= rowStart; i--) {
          // console.log("bottom left to top left -->",input[i][colStart]);
          // console.log(" "); 
          res.push(input[i][colStart]);
        }
        colStart++;
    }
    
  }

  return res;
}

// const test = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// const test2 = [[1,2,3],[4,5,6],[7,8,9]]
const test3 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
const test4 = 
[[1,11],
[2,12],
[3,13],
[4,14],
[5,15],
[6,16],
[7,17],
[8,18],
[9,19],
[10,20]] 
//console.log(spiralMatrix([[1,2,3],[4,5,6],[7,8,9],[10,11,12]]));  //[1,2,3,6,9,8,7,4,5]
// console.log(spiralMatrix(test3)); 
console.log(spiralMatrix(test4)); 

   
// [1,2,3]
// [4,5,6]
// [7,8,9]
// [10,11,12]


// [1,2,3,4]

// [5,6,7,8]
// [9,10,11,12]

//output [1,2,3,4,8,12,11,10,9,5,6,7,6]
//expected [1,2,3,4,8,12,11,10,9,5,6,7]


/*[[1,11],
  [2,12],
  [3,13],
  [4,14],
  [5,15],
  [6,16],
  [7,17],
  [8,18],
  [9,19],
  [10,20]] 
  
  Output - reversed after 10
  [1,11,12,13,14,15,16,17,18,19,20,10,2,3,4,5,6,7,8,9]
  Expected
  [1,11,12,13,14,15,16,17,18,19,20,10,9,8,7,6,5,4,3,2]
  */

  /*

We did not solved the following problem - spent 25 mins on it!!


https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/ 

Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

n == matrix.length == matrix[i].length
All the rows and columns of matrix are guaranteed to be sorted in non-decreasing order.

You must find a solution with a memory complexity better than O(n2).
1   5   9   
2   20  21   k=5. 20;k=7 21
12  22  23

1   5   9  10 
2   20  21 22  k=5. 10;k=7 21
12  22  23 24
14  25. 28 29

Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
Output: 13
Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13


[1,5,9,10,11,12,13, 15] k=8 => 15?

Input: matrix = [[-5]], k = 1
Output: -5

- min priority queue 
- sorting into a bigger array O(nlogn)
- three pointer solution, with a counter to check we're at kth num
  - bad nxn, 1 <= n <= 300 and is not a guaranteed 3x3 matrix.

*/

