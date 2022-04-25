/*PASSED
Q. Given an array of integers, flip an array.

Example:
Input: [1, 2, 3, 4, 5, 6]
Output: [6, 5, 4, 3, 2, 1]

*/

function solution(array) {
    let res = []; 
    for (let i = array.length - 1; i > -1; i--) {
        res.push(array[i]); 
    }
    return res; 
}
