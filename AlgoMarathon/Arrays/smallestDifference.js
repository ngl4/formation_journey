/*

Algo: Smallest Difference (must be solved in 20 mins)

Example: 

input: 
arrayOne: [-1, 2, 3]
arrayTwo: [5, 6, 4, 7]

output: 
smallest difference pair: [3, 4]

*/



//Attempt #1 (Failed) - only get to pseudo-coding and trying to think of different approaches 

/*
Time Spent to understand the solution 
and generally watched through the video explanation: 15mins 
Time Spent : 25mins 
Talking through the thought process, how I approach the problem 
sorted or not 
assume these arrays can have different length 

Math.abs

potentialMin = []

-1 2 3 = L3 = arrayOne
     i
4 5 6 7 = L4 = arrayTwo
j

sorted both arrays
compare the last number in both array 
if arrayOne[arrayOne.length -1] < ... arrayTwo 
we will only iterate through the arrayTwo and compare with the biggest number in
the arrayOne

find the min diff 

diff: 0
pair: [3, 4]
*/

function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b);
      arrayTwo.sort((a, b) => a - b);
      let i = 0; 
      let j = 0; 
    //   while (i < arrayOne.length || j < arrayTwo.length) {
          
    //   }
  }
