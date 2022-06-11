// Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left-justified, and no extra space is inserted between words.

// Note:

// A word is defined as a character sequence consisting of non-space characters only.
// Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
// The input array words contains at least one word.
 

// Example 1:

// Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]











/*

1 2 3
4 5 6
7 8 9 = [1, 4, 7, 8, 5, 2, 3, 6, 9]

 */
function columnMajorZigZag(matrix) {
    const output = [];
    const nrow = matrix.length;
    const ncol = nrow > 0 ? matrix[0].length : 0;
  
    // for each column index
    for (let c = 0; c < ncol; c++) {
      if (c % 2 === 0) {
        // for each row index down
        for (let r = 0; r < nrow; r++) {
          output.push(matrix[r][c]);
        }
      } else {
        // for each row index up
        for (let r = nrow - 1; r >= 0; r--) {
          output.push(matrix[r][c]);
        }
      }
    }
  
    return output;
  }
  
  
  
  console.log(columnMajorZigZag([[1,2,3],[4,5,6],[7,8,9]]));
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
  
  1 2 3
  4 5 6
  7 8 9 = 25
  
  1 2 3 4 5
  6 7 8 9 1
  2 3 4 5 6
  7 8 9 1 2
  3 4 5 6 7
  
  length = 5
  length - 1 - i = 5 - 1 - 2 
  
  1 2
  3 4 = 10
        c
     0 1 2 3   
  0  1 2 3 4
  1  5 6 7 8
  2  1 2 3 4
  3  5 6 7 8 = 36
  
  i = 0, [0][0] and [3][0]
  
  Given a square matrix `mat`, return the sum of the matrix diagonals.
  
  Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
  */
  
  function diagonalSum(matrix) {
    let sum = 0;
    const length = matrix.length;
    for (let i = 0; i < length; i++) {
      sum += matrix[i][i];
      if (i !== length - 1 - i) {
        sum += matrix[length - 1 - i][i];
      }
    }
  
    return sum;
  }
  
  console.log(diagonalSum([[1, 2], [3, 4]]), 10);
  console.log(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), 25);
  
  
  // Test cases
  const mat1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  
  const mat2 = [
    [1, 2],
    [3, 4]
  ]
  
  const mat3 = [
    [1, 2, 3, 4], 
    [5, 6, 7, 8],
    [1, 2, 3, 4],
    [5, 6, 7, 8]
  ]
  
  const mat4 = [];
  
  const tests = [
    [mat1, 25],
    [mat2, 10],
    [mat3, 36],
    [mat4, 0],
  ]
  
  for (const test of tests) {
    const [mat, expected] = test;
    const actual = diagonalSum(mat);
    if (actual !== expected) {
      console.log(`Test failed for matrix: ${mat}. Expected ${expected}, got ${actual}`);
    } else {
      console.log("Test passed!");
    }
  }