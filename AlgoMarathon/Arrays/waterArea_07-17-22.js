
  /*
  
  Q. Given an array of non-negative integers, where each integer represents the height of a pillar of width 1, the water will be poured over all the pillars. Return the surface area enclosed by these pillars from the front.
  
  Spilled water should be ignored.
  Example:
  
  Given an array: [1, 0, 2, 0, 3]
              |    -> "*" is  water trapped by the pillars
            |*|    -> "|" is the one unit of the height of a pillar
          |*|*|       
          -----
  returns 3

  [1,0,0] = 0
  [1,0,2] = 1
   ^   ^
  0, 2, 0 = 0

  Input:
  heights: [5, 0, 0, 0, 0, 1]
  
  Expected Output:
  4
  
  
  Input:
  heights: [3, 2, 1, 2, 3]
  
  Expected Output:
  4
  
  Input:
  heights: [3, 0, 2, 0, 4]
  
  Expected Output:
  7
  
  Input:
  heights: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
  
  Expected Output:
  6

  -----
  ##### Ideas for Max Area of Water Container - Medum Leetcode problem
  The following Approaches are used to find "Max Area of Water Container": 

  1) Brute Force Solution (Two pointers moving in the same direction)
  - we will set one i pointer at one item and move the other j pointer (j = i + 1) through the entire array
  - once an iteration is completed, the i pointer will move the next item and the j pointer will be moving through the entire array 
  - until the i pointer gets to the end of the array 

` 2) Optimal Solution (Two Pointers moving in the opposite direction) 
  - for the small height pointer, it would be moved. 

  These approaches are not able to solve this problem successfully because this problem is looking the total area of the entire pillars Area 
  ------

  ##### Higher Level Order Understanding 
  Find the total water areas that can filled up all the pillars of the container completely without spilling out any water 


 ##### Approaches 
  - Create an empty array (new Array) and filled it up with values zero
  - Create a leftMax, rightMax, totalMax values = 0
  - Create two loops - one from the left and one from the right 

  - iterating from left to right (find Height Max form left)
  - set the empty array (new Array) index i to the leftMax value 
  - Update the leftMax value by finding the max of the current height vs the existing leftMax 

  - Similarly for iterating from right to left (Find Height Max from right - Update when diff found in new Array index)
  - Create a minHeight variale to find the min height of the current new Array index vs the rightMax 
    (we would like to make sure the water is not spilled out, so if we have a 3 pillars and a 4 pillars, we want to get the minHeight of 3)
  - Compare the current height with the minHeight 
    - if the current Height is smaller than the minHeight (we found a pillar that is smaller than the existing minHeight)
        - Update the new Array index by finding the diff of current Height and the minHeight 
    - else if the current height is larger than the minHeight 
        - we would like to update the the new Array index to 0 
        - ie, input: [3, 4]  -> the new Array: [3, 0]

  - At the end, we will accumulate all the values in the new Array and return the output


 
  ##### Manual Testing: 

  leftMax = 4
 
  [0, 3, 3, 3, 3]
               ^
   
  [3, 0, 2, 0, 4]
               ^
  
  rightMax = 4
  minHeight = 0

  [0, 3, 1, 3, 0]
   ^
   
  [3, 0, 2, 0, 4]
   ^               
  */


   //##### Implementation: 

   function findWaterArea(input) {
    if (input.length < 1) return 0;

    //create an empty array with the same length of input and fill it up with zero num
    let maxes = Array.from(new Array(input.length), item => item).fill(0);

    //set up a leftMax value - used as comparison with the current height
    let leftMax = 0; 
   
    //Find the max height area starting from the left and update the maxes array indexes accordingly
    for (let i = 0; i < input.length; i++) {
       let height = input[i];
       maxes[i] = leftMax;
       leftMax = Math.max(leftMax, height); 
     }
     
     //et up a rightMax value - used as comparison with the current height 
     let rightMax = 0; 
   
     //Find the difference in the max height and the current height 
     //Using the minHeight to determine if the current height pillar is less than the minHeight so far, get the diff to update the maxes array index 
     //else, if the current height is larger than the minHeight, then we will just update the maxes index to 0
     //Update the rightMax by finding the max values when comparing the existing rightMax with the current height 
     for (let i = input.length - 1; i >= 0; i--) {
       let height = input[i]; //2
       let minHeight = Math.min(rightMax, maxes[i]) //3
       if (height < minHeight) {
         maxes[i] = minHeight - height; 
       }else {
         maxes[i] = 0;
       }
       rightMax = Math.max(rightMax, height); 
     }

     //OPTION #1: USE THE FOR LOOP TO SUM UP VALUES

     let maxArea = 0; 

     for (let value of maxes) {
      maxArea += value; 
     }

     return maxArea; 
   
    //OPTION #2: USE REDUCE METHOD TO SUM UP VALUES AND RETURN OUTPUT
    //  return maxes.reduce((pv, cv) => pv + cv, 0); 


    // let leftPointer = 0; 
    // let rightPointer = input.length - 1; 
    // let maxArea = 0; 

    // while (leftPointer < rightPointer) {
    //   let area = (rightPointer - leftPointer) * Math.min(input[leftPointer], input[rightPointer]);   //width * height (getting the rectangular area)
    //   console.log('area: ', area); 
    //   maxArea = Math.max(maxArea, area); 
    //   console.log('max area: ', maxArea); 
    //   if (input[leftPointer] < input[rightPointer]) {
    //     leftPointer++;
    //   }else if (input[leftPointer] > input[rightPointer]) {
    //     rightPointer--; 
    //   }else {
    //     leftPointer++;
    //   }
    // }
    // return maxArea; 
  }

  console.log(findWaterArea([3, 0, 2, 0, 4])) //7
  // console.log(findWaterArea([3, 2, 1, 2, 3])) //4
  // console.log(findWaterArea([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) //6