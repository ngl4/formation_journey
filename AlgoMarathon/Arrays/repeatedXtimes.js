/*
Given an array and a target count X, return the number of elements that is repeated exactly X times.

Function Signature:
function numElementsRepeatedX(input, target)

*/

//ATTEMPT #1 (Passed)

/*
Test Cases: 

input: 
array: [2, 3, 4, 3, 6, 3, 8, 8, 3]
targetCount: 2

output: 1       ===> (8)

Same array
repeatedTime: 1 

output: 3        ===> (2, 4, 6)


Approach: 
- iterate through the array 1 time 
- create a Map to store the array item (as key) and count (as value)
- if the count is equal to the targetCount, break from the loop
- return the number of elements by finding out how many keys have the values (equal to targetCount)

T: O(n) - only have 1 iteration 
S: O(n) - since extra space is created (Map) and it will be changing proportionally to the input array size 

*/

const findRepeatedElements = (input, targetCount) => {
    const allElems = new Map(); 
    for (let i = 0; i < input.length; i++) {
      const count = (allElems.get(input[i])|| 0) + 1; 
      allElems.set(input[i], count); 
    }  
    return Array.from(allElems).filter(elem => elem[1] === targetCount).length; //OPTION#1 Array.from(allElems) = [[2, 1], [3, 4], [4, 1], [6, 1], [8, 2]]
    // return Array.from(allElems.values()).filter(elem => elem === targetCount).length; //OPTION#2 Array.from(allElems.values()) = [1, 4, 1, 1, 2]
  }
  
  console.log(findRepeatedElements([2, 3, 4, 3, 6, 3, 8, 8, 3], 1)); //output: 3
  console.log(findRepeatedElements([2, 3, 4, 3, 6, 3, 8, 8, 3], 2)); //output: 1


  /*
  PROGRESS NOTE: 

  10m: writing up the test cases, approaches, time & space complexities
  
  20m: coding up the function + test cases 

  Reflection: 
  - Still need to make sure I am familiarize with Map and Set and all the related methods 

  Future Attempts: 
  - Make sure I will work through this problem under 10 mins with visualization, approach, and coding out the solution 
  */ 