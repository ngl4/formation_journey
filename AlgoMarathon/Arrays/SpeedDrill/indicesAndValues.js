/*PASSED
Q. Given an array of indices and an array of integer values, return an array of all the values at those indices. Any out of bounds indices should be filled in with a 0. Indices follow a zero-based numbering rule (i.e. The index of the first element is 0 not 1).

Example:
Input: indicies: [0, 0, 5, 2, 3], values: [7, 6, 5, 4, 3]
Output: [7, 7, 0, 5, 4]

Input:
indices: []
values: []
Output:
[]


Input:
indices: [1]
values: []
Output:
[0]

Input:
indices: []
values: [1]
Output:
[]

*/


function solution(indices, values) {
    if (indices.length < 1) return indices; 
    if (values.length < 1) return [0];
    let res = []; 
    for (let i = 0; i < values.length; i++) {
        if (indices[i] < indices.length) {
            res.push(values[indices[i]])
        }else res.push(0);
    }
    return res; 
}
