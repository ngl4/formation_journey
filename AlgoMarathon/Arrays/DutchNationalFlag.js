/**
  ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
  ✏️ Description
  ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
  Q. Given an array of 0s, 1s, and 2s, sort them in-place in ascending order.
  
  Examples:
  • Given an array: [2, 1] // returns [1, 2]
  • Given an array: [0, 2, 1, 0, 1, 2] // returns [0, 0, 1, 1, 2, 2]
  
  
  Visualization 
  
  0, 0, 1, 1, 2, 2
  ^ (do not move at all)
     ^ (only move when it is swapping with numbers on the right side)
        ^ (move every iteration)
  
  Approaches: 
  - .sort() method. Time: O(nlogn) 
  -  bubble sort method. Time: O(n^2)
  -  one pass Time: O(n)
  
   */

  //ATTEMPT #1 (unsure): Walking through the problem with Alexis!!
  
  function dnf(input) {

    // ATTEMPT#1 : 3 POINTERS - FAILED 
    // let movableP2 = false; 
    // let p1 = input[0]; 
    // let p2 = input[1];   
    // let inc = 1; 
    // for(let i = 2; i < input.length; i++) {
    //   let p3 = input[i]; 
    //   if (p2 < p1) {
    //     [p2, p1] = [p1, p2];
    //     movableP2 = true; 
    //   }
    //   if (p3 < p2) {
    //     [p3, p2] = [p2, p3];
    //   }
    //   if (movableP2) {
    //     inc += 1; 
    //     p2 = input[inc]; 
    //     movableP2 = false; 
    //   }
    // }
    // return input;
  
    // ATTEMPT#1: BUBBLE SORT METHOD - PASSED
    // for(let i = 0; i < input.length; i++){
    //   for (let j = 0; j < input.length; j++) {
    //     const curVal = input[j]; 
    //     const nextVal = input[j+1]; 
    //     if (nextVal < curVal) {
    //       [input[j], input[j+1]]=[nextVal, curVal];
    //     }
    //   }
    // }
    // return input; 
  }
  
  // Test Cases
  test.startProblem("Dutch National Flag")
  var array1 = []; dnf(array1)
  var array2 = [2, 1, 1, 0]; dnf(array2)
  var array3 = [0, 2, 1, 0, 1, 2]; dnf(array3)
  test.testForArrays([], array1, 1)
  test.testForArrays([0, 1, 1, 2], array2, 2)
  test.testForArrays([0, 0, 1, 1, 2, 2], array3, 3)
  test.endProblem()


  /*
  PROGRESS NOTE

  14m - basic understanding the prob, visualization, using bubble sort to solve the problem first

  16m 
  - trying to use a 3 pointer approach 
  - working on the visualization for around 5-10mins 
  - Then use the rest of the code to code out the solution 
  - It is not successful 

  Reflection: 
  - I am grateful that Alexis is able to work together with me on this problem 
  - She has given me some hints on how I could approach this problem ~ using 3 pointers 
  
  Future Attempts: 
  Walk through the 3 commons solutions to this problem:
• Sort the array as just a normal unsorted array. 
• Two passes:
    First pass: count the number of 0s, 1s and 2s. 
    Second pass: overwrite the original array with the correct number of 0s, then 1s, then 2s.

• One pass (read about this on Leetcode)

  */
  