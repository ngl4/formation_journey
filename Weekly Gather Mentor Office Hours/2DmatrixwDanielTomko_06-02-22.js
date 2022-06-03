/*
06/02/2022 

*/

const matrix = [
    [ 1,  2,  3,  4, 5],
    [ 6,  7,  8,  9, 10],
    [11, 12, 13, 14, 15]
  ];
  
  
  
  function zigzagOrder(array) {
    const result = [];
  
    for (let i = 0; i < array.length; i++) {
      const row = array[i];
      if (i % 2 === 0) {
        // go forward
        for (let j = 0; j < row.length; j++) {
          result.push(row[j]); 
        }
      } else {
        // go backward
        for (let k = row.length - 1; k >= 0; k--) {
          result.push(row[k]);
        }
      }
    }
  
    return result;
  }
  
  function zigzagOrder2(array) {
    const result = [];
  
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        // go forward
        for (let j = 0; j < array[i].length; j++) {
          result.push(array[i][j]); 
        }
      } else {
        // go backward
        for (let k = array[i].length - 1; k >= 0; k--) {
          result.push(array[i][k]);
        }
      }
    }
  
    return result;
  }
  
  //console.log(zigzagOrder(matrix));
  /*single dimensional perfect square matrix
  usually will be rectangular
  
  Can I depend on it being square?
  This is not quadratic!
  Time: o(n)
  linear in size of input
  n = r * c total size is 15 
  count of all the locations - n is total size of input
  Space: o(n)
  
  we explicitly went over columns as outer loop
  
  */
  function columnMajor(matrix) {
    const result = [];
  
    for (let j = 0; j < matrix[0].length; j++) {
      for (let i = 0; i < matrix.length; i++) {
        result.push(matrix[i][j]);
      }
    }
  
    return result;
  }
  
  console.log(columnMajor(matrix));
  /*
  Problem: https://leetcode.com/problems/set-matrix-zeroes/

  Given a 2d rectangular matrix any row that contains a zero. set all row  elem to zero and columns to zero
  Avoid Domino effect
  */
  
  const input1 = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ];
  
  const output1 = [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1]
  ];
  
  const input2 = [
    [0, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
  ];
  
  const zrows = [0];
  const zcolumns = [0]
  
  const output2 = [
    [0, 0, 0],
    [0, 1, 1],
    [0, 1, 1]
  ];
  
  
  function setMatrixZeros(matrix) {
    const zrows = [];
    const zcolumns = [];
  
    // make lists of the rows and columns to zero out
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] === 0) {
          zrows.push(i);
          zcolumns.push(j);
        }
      }
    }
  
    while (zrows.length) {
      const rowIndex = zrows.pop();
      // Zero out one row
    }
  
    while (zcolumns.length) {
      const colIndex = zcolumns.pop();
      // Zero out one column
    }
  
  }
  