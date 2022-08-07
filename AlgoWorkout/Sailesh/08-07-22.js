/*
  Given a chess board with a set of bishops, return the number of pairs of bishops that are   
  attacking each other. Bishops will be given as an array of tuples.

  Examples

  Bishops: [(0, 0), (2, 2), (1, 2), (3, 0)]

  This would look like this:

  A . . . .
  . . x . .
  . . B . .
  x . . . .
  . . . . C

  (A, B) , (A, C), (B, C)

  A, B, C => AB AC BC
  A, B, C, D => AB, AC, AD, BC, BD, CD

  _ * _ = 3 * 2 / 2 = 3
  
  Bishops: 0,0, 1,1, 2,0
  
  x . .
  . x .
  x . .


  // 3 4 5 6
  // 2 3 4 5 
  // 1 2 3 4 
  // 0 1 2 3 

  0 => (3, 0)
  1 => (2, 0), (3, 1)
  2 => (1, 0), (2, 1), (3, 2)

  diagonal = (boardSize - 1 - row) + column

  // 0 1 2 3
  // 1 2 3 4
  // 2 3 4 5
  // 3 4 5 6

  (2, 3)

  0 => (0,0
  1 => (1, 0), (0, 1)
  2 => (2, 0), (1, 1), (0, 2)
  3 => (3, 0), (1, 2), (2, 1), (0, 3)

  diagonal = row + column


  Assume magic dictionary of key:value => diagonal:#bishopsOnDiagonal
Notes:
-board is a square
-bishops can be part of multiple pairs
-


For each bishop: 
  - Figure out the two diagonals it's on
  - Add n -1 for each diagonal where n is the # of bishops on said diagonal

Return count / 2

counter = 1
Approach1 (picked)
per bishop in bishopArray 
  -iterate through rest of bishopArray and find which ones have same abs(deltaY/deltaX)

Approach2
  1-Iterate through the bishops
  2- For each bishop generate coordonatesfor each elements in his diagonals
  3- for each coordinates check if in set of bishops
  

*/

/*
  def numberOfBishops(bishops, boardSize):
    total = 0
    for idx in range(len(bishops): 
      bishop = bishops[idx]
      for idx2 in range(idx, len(bishops)):
        delta_x = abs(bishop[0] - bishops[idx2][0])
        delta_y = abs(bishop[1] - bishops[idx2][1])
        if delta_x == delta_y:
          total += 1
    return total 
*/
function numberOfBishops(bishopArray, boardSize) {
    const antiDiagMap = {};
    const mainDiagMap = {};
    
    // Main diagonal index: (boardSize - 1 - row) + column
    // 3 4 5 6
    // 2 3 4 5 
    // 1 2 3 4 
    // 0 1 2 3 
    for (const bishop of bishopArray) {
      const index = (boardSize - 1 - bishop[0]) + bishop[1];
      mainDiagMap[index] = mainDiagMap[index] ? mainDiagMap[index] + 1 : 1;
    }
    
    // Anti diagonal index: row + column
    // 0 1 2 3
    // 1 2 3 4
    // 2 3 4 5
    // 3 4 5 6
    for (const bishop of bishopArray) {
      const index = bishop[0] + bishop[1];
      antiDiagMap[index] = antiDiagMap[index] ? antiDiagMap[index] + 1 : 1;
    }
    
    let bishopCount = 0;
    for (const bishop of bishopArray) {
      const antiDiagIndex = bishop[0] + bishop[1];
      const mainDiagIndex = (boardSize - 1 - bishop[0]) + bishop[1];
      if (mainDiagMap[mainDiagIndex]) {
        bishopCount += mainDiagMap[mainDiagIndex] - 1;
      }
      if (antiDiagMap[antiDiagIndex]) {
        bishopCount += antiDiagMap[antiDiagIndex] - 1;
      }
    }
    
    // Divide by 2 because you double count bishops pairs
    return bishopCount / 2;
  
  }
  
  
  // O(n^2)
  //[0, 0], [2, 2], [1, 2], [3, 0]]
  // [0, 0], [2, 2], [1, 1]
  /*
  function numberOfBishops(bishopArray, boardSize) {
    // for (const bishop of bishopArray)
    let total = 0; // 3
    for (let i = 0; i < bishopArray.length - 1; i++) {
      const bishop1 = bishopArray[i]; //[2,2]
      for (let j = i + 1; j < bishopArray.length; j++) {
        const bishop2 = bishopArray[j];  //[1,1]
        const delta_x = Math.abs(bishop1[0] - bishop2[0]);
        const delta_y = Math.abs(bishop1[1] - bishop2[1]);
        if (delta_x === delta_y) {
          total += 1;
        }
      } 
    }
    return total;
  }
  */
  
  
  console.log("Should be 2: ", numberOfBishops([[0, 0], [2, 2], [1, 2], [3, 0]], 4));
  console.log("Should be 3: ", numberOfBishops([[0, 0], [2, 2], [1, 1]], 3));