/*
  Spiral Traversal
  Rotate 90 deg
  Sudoku Validator
  Islands Problem
*/

/*

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.


https://leetcode.com/problems/rotate-image/ 

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]


res = []

columnArray = [] - numbers for each column

[[1,2,3], first row
[4,5,6], mid row
[7,8,9]] last row 

[
  [3, 2, 1],
  [],
  []
]

col
7 4 1
8 5 2 
9 6 3

rotateMatrix (matrix)
  newMatrix = new Array(matrix.length).fill([])
  loop over the matrix from end => 0
    - grab the column (row) => 123
    - loop over the column from 0 to end  
      - add each number to the result arr by pushing it in 

  [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
  ]
  return matrix
*/

function rotateMatrix(matrix) { 
    let newMatrix = matrix.map((elem) => {
      elem = [...elem];
      elem.length = 0;
      return elem;
    })
    for (let r = matrix.length - 1; r >= 0; r--) { // second last row 
      let row = matrix[r]; // 456
      for (let c = 0; c < row.length; c++) { // 1
        newMatrix[c].push(row[c]);  // newMatrix[1].push(8)
      }
    }
    return newMatrix; 
  }
  
  //swapping!! 
  function rotateMatrix(matrix) {
    let seen = {}
    function solution (matrix, row = 0, col =0) {
      console.log(row, col);
      if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[`${row}-${col}`] === true) {
        return;
      }
      [matrix[row][col], matrix[row][col+1]] = [matrix[row][col+1], matrix[row][col]]
      [matrix[row][col], matrix[row + 1][col]] = [matrix[row + 1][col], matrix[row][col]]
      seen[`${row}-${col}`] = true;
      solution(matrix, row, col + 1)
      solution(matrix, row + 1, col)
    }  
    solution(matrix);
    return matrix; 
  }
  
  var rotate = function(matrix) {
    let l = 0;
    let r = matrix.length-1;
    
    while (l < r) {
        for (let i = 0; i < r - l; i++) {
            
            let top = l;
            let bottom = r;
            
            //get topLeft val
            let topLeft = matrix[top][l+i];
            
            //move bottom left to top left
            matrix[top][l+i] = matrix[bottom - i][l];
            
            //move bottom right to bottom left
            matrix[bottom - i][l] = matrix[bottom][r - i];
            
            //move top right to bottom right
            matrix[bottom][r - i] = matrix[top + i][r];
            
            //set top right to be topleft
            matrix[top + i][r] = topLeft;
        }
        l++;
        r--;
    }
  };
  
  
  var rotate = function(matrix) {
    for(let r = 0; r < matrix.length; r++){
        for(let c = r; c < matrix.length; c++){
            let temp = matrix[r][c]
            matrix[r][c] = matrix[c][r]
            matrix[c][r] = temp
        }
    }
    for(let row of matrix){
        row.reverse()
    }
  };
  
  
  console.log(rotateMatrix([[1,2,3],[4,5,6],[7,8,9]]));
  
  /*
  Output:
    [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ]
  */
  
  /*
  new matrix
  [
    [7],
    [8],
    [9]
  ]
  
  
  row: [7,8,9]
  
  
  */
  
  
  /*
    Given an m x n matrix, return all elements of the matrix in spiral order.
    https://leetcode.com/problems/spiral-matrix/
  
    Input: matrix = [
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12]
    ]
    Output: [1,2,3,4,8,12,11,10,9,5,6,7]
  
  
  Option 1: Recursion (DFS on Matrix)
  
  
  spiralTraversal (matrix)
    result = []
    solution (row, col):
      if we are not within the bounds 
        stop recursively iterating over the function 
      else 
        add the current value to the result 
        perform a recursive call on all four directions 
        spiralTraversal(matrix, row, col + 1) // right
        spiralTraversal(matrix, row + 1, col) // down 
        spiralTraversal(matrix, row, col - 1) // left 
        spiralTraversal(matrix, row - 1, col) // up 
    solution(0, 0)
    return result;
  */
  
  function spiralTraversal(matrix) {
    let result = []; 
    // let matrixCopy = matrix.map((row) => [...row]); 
    function spiraldfs(matrix, row = 0, col = 0) {
      if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || matrix[row][col] === true) {
        return; 
      }
      result.push(matrix[row][col]);
      matrix[row][col] = true; // visited 
      spiraldfs(matrix, row, col + 1) 
      spiraldfs(matrix, row + 1, col)
      spiraldfs(matrix, row, col - 1)
      spiraldfs(matrix, row - 1, col)
    }
    // console.log(matrix);
    spiraldfs(matrix);
    // console.log(matrix); 
    return result; 
  }
  
  
  
  // console.log(spiralTraversal([
  //   [1,2,3,4],
  //   [5,6,7,8],
  //   [9,10,11,12]
  // ]));
  
  /*
  
  row = 0
  col = 4
  
  spiraldfs(matrix, row, col + 1) 
    spiraldfs(matrix, row, col + 1) 
      spiraldfs(matrix, row, col + 1) 
        spiraldfs(matrix, row, col + 1)  <---- 3
  
  res = [1,2,3,4]
  matrix[row][col] = 1
  
    Input: matrix = [
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12]
    ]
  */ 
  