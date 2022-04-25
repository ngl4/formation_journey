/*

Codewriting

Q. Given an array of integers which represents a path, determine if you reach to the end of the array after following the path. Start with element 0 and move forward x number of steps, can be negative which means move backward.

Example:
Input: [1, 2, 0, -1]
Output: false // starting at 0, the first path is 1, so take 1 step forward where you get to 2. Then you take 2 more steps forward to get to -1. Then take a step backward where you land at 0. Since 0 does not do anything, you get stuck at that point. Thus this returns false.
*/

function solution(path) {
    if (path.length < 1) return false; 
    let sum = 0; 
    for (let i = 0; i < path.length; i++) {
        sum += path[i]; 
    }
    console.log(sum, path.length - 1);
    if (sum >= path.length - 1) return true; 
    return false; 
}
