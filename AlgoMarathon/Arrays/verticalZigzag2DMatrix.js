/*##############################################################
Q. Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in vertical zigzag order (see examples below) starting from the top left element

Examples:
Input1:
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

Output1:
[1, 4, 7, 8, 5, 2, 3, 6, 9]

Input2:
[
  [1, 2, 3],
  [4, 5, 6]
]

Output2: [1, 4, 5, 2, 3, 6]
##############################################################*/

function verticalZigzag(m) {
    const newArr = [];
  
    for (let j = 0; j < m[0].length; j++) {//columns
      if (j % 2 === 0) {//even
        for (let i = 0; i < m.length; i++) { //row //going forward down the column
          newArr.push(m[i][j]); 
        }
      }else {//odd
        for (let i = m.length - 1; i >= 0; i--) { //row //going backward up the column
          newArr.push(m[i][j]); 
        }      
      }
    }
  
    // Why the following is generating incorrectly? 
    
    // for (let j = 0; j < m[0].length; j++) {
      // forwards
    //   for (let i = 0; i < m.length; i++) {
    //     let num = m[i][j]; 
    //     if (j % 2 === 0) {
    //       newArr.push(num)
    //     } else {
          // backwards
    //       for (let k = m[j].length - 1; k >= 0; k--) {
    //         newArr.push(num[k])
    //       }
    //     }
    //   }
    // }
    return newArr;
  };
  
  // test cases
  const testCase1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  // [1, 4, 7, 8, 5, 2, 3, 6, 9]
  
  const testCase2 = [
    [1, 2, 3],
    [4, 5, 6]
  ]
  // [1, 4, 5, 2, 3, 6]
  
  console.log(verticalZigzag(testCase1));
  console.log(verticalZigzag(testCase2));
  