/* PASSED 
Q. Given two integer arrays of equal length, merge them into one by taking the minimum value at the each index.

Example:
Inputs: [1, 2, 3, 4, 5] and [5, 4, 3, 2, 1]
Output:[1, 2, 3, 2, 1] // at the index 0, 1 is smaller than 5. Thus, take 1 as the first element.

Input:
a1: [1]
a2: [1]
Output:
[1]

Input:
a1: [1]
a2: [2]
Output:
[1]

*/


function solution(a1, a2) {
    let res = []; 
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] > a2[i]) res.push(a2[i]);
        else res.push(a1[i]); 
    }
    return res; 
}
