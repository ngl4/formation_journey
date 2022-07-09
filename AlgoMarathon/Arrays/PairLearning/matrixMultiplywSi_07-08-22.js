/*
Problem

In mathematics when two matrices are multiplied the result is a new matrix where each position (i, j) in the output is the sum of the products of the ith row in the first matrix and the jth column in the second. This is called the dot product.

For example:
[1 2]        [5 6]
[3 4]   x    [7 8]

The (0, 0) position in the result is:1 * 5 + 2 * 7 = 19
The (1, 1) position in the result is: 3 * 6 + 4 * 8 = 50

This makes the complete output:
[19 22]
[43 50]


- both matrix can be multiplied 

- touchbase on edge cases (assume these are not the case)
[1, 2, 3] * [2]
            [3]

[[],[]]  => []   

-later on: 
n x m
[[1, 2], [1, 2]] * [[1, 2]]
n * square root (n)


Approaches: 

[[1 2]        [[5 6]
 [3 4]         [7 8]]



*Time Complexity: 
To compute each cell of the n cells in the output matrix, we need to do sqrt(n) work, so this makes the runtime complexity O(n * sqrt(n)).

O (n + m) n=size of the first matrix   m=size of the second matrix 

n = 4  time complexity: 4 * 2

*Space Complexity: O(n)  n = size of the first row of the second input array

Target runtime and space complexity:
 The size of the input is the total size of both matrices. Since for this problem, both matrices are the same size, with n elements each, the input size (and output size) is O(n).


 i     j 
 x x.  x x
 x x   x x

*/

function matrixMultiply(a, b) {
    var result = Array.from(Array(a.length), () => Array(a.length).fill(0));
    
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a.length; j++) { 
            let value = 0;
            for (var k = 0; k < a.length; k++) {
                value += a[i][k] * b[k][j];
            }
            result[i][j] = value;
        }
    }
    return result;
  }
  
  function matrixMultiply(matOne, matTwo) {
    let res = []; 
  // - iterate row by row for the first matrix
    for (let i = 0; i < matOne.length; i++) {
      let resRow = [];
      // iterate through the length of the column of the 2nd matrix
      for (let j = 0; j < matTwo[0].length; j++) {
        let value = 0; 
        // iterate through the length of the row of the 1st matrix
        for (let k = 0; k < matOne[0].length; k++) {
          value += matOne[i][k] * matTwo[k][j];
        }
        resRow.push(value);
      }
      res.push(resRow);
    }
  //   - resRow  = []
  //   - for each value in the row, 
  //     - we are going to iterate through the column and multiple them (we need to iterate through all the columns)
  //     - push this multiplied values to the resRow
  //   - push the resRow to the res array
  
    return res; 
  }
  
  
  const a = [
    [1, 2],
    [3, 4],
   ];
   const b = [
     [5, 6],
     [7, 8],
    ];
  /* 
  1, 3 * 5
         7
  26
  */
  const c = [
    [1, 3]
  ];
    const d = [
      [5],
      [7],
    ];
  console.log(matrixMultiply([], [])); 
  console.log(matrixMultiply(a, b)); 
  /*
  [19 22]
  [43 50]
  */
  console.log(matrixMultiply(c, d)); 
  /*
  1 * 5 + 3 * 7 = 26
  [26]
  */
  
  
  
  
  