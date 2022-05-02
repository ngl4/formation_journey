/*
Algo: Minimum Domino Rotations For Equal Row

In a row of dominoes, tops[i] and bottoms[i] represent the top and bottom halves of the ith domino. (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the ith domino, so that tops[i] and bottoms[i] swap values.

Return the minimum number of rotations so that all the values in tops are the same, or all the values in bottoms are the same.

If it cannot be done, return -1.

Example 1: 

Input: tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]
Output: 2
Explanation: 
The first figure represents the dominoes as given by tops and bottoms: before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.


Example 2:

Input: tops = [3,5,1,2,3], bottoms = [3,6,3,3,4]
Output: -1
Explanation: 
In this case, it is not possible to rotate the dominoes to make one row of values equal.


Input: tops = [1,1,1], bottoms = [1,1,1]
Output: 0
No rotation happens when two arrays are the same 

Input:
tops = [1,2,1,1,1,2,2,2]
bottoms = [2,1,2,2,2,2,2,2]

output: 1

*/


//ATTEMPT #1  (Failed) - I have done visualization on the problem but failed to execute the final answer due to edge cases 

/*
Visualization 

[5,1,6,4,3,2] = t
              i
[2,2,2,2,2,2] = b
              j
              
              
[3,5,1,2,3] = t
 i

[3,6,3,3,4] = b
   j

 move j forward
 then compare with b[j] vs t[i]
 if they are the same, then swap t[i] and b[j - 1]
 if they are not the same, then return -1 or break
 then move i two steps forward 
 also move j two steps forward 
 then compare with b[j] vs t[i]
 if they are the same, then swap t[i] and b[j - 1] 
 if they are not the same, then return -1
 
 
*/
var minDominoRotations = function(tops, bottoms) {
    let t = 0; //top pointer
    let b = 1; //bottom pointer 
    let rotationCount = -1; 
    
    while (typeof tops[t] !== 'undefined' && typeof bottoms[b] !== 'undefined') {
        console.log(t, b); 
        console.log(tops[t] === bottoms[b] && tops[t + 1] !== bottoms[b - 1] && tops[t] !== bottoms[b - 1]);
        if (tops[t] === bottoms[b] && tops[t] !== bottoms[b - 1]) {
            [tops[t], bottoms[b - 1]] = [bottoms[b - 1], tops[t]]; 
            rotationCount++; 
        }
        else rotationCount = 0; 
        b += 2;
        t += 2; 
    }
    return rotationCount; 
};

/*
Progress Notes : 

30mins: Visualizations + approaches + coding up the solution -> but only pass a few test cases, there are a few edge cases that do not pass ie, when the tops and bottoms array items are basically the same, no rotation is needed.

20mins: Reviewing through the Leetcode solutions but still do not fully understand how to 

Future attempt: 
- rework on the problem 
- review the solution again (ask for help if needed)
*/