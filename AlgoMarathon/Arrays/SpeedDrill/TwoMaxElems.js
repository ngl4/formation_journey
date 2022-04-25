/* PASSED
Q. Given an unsorted array of unique integers, return the two biggest elements in an array of ascending order. You may assume there are at least two elements.

[execution time limit] 4 seconds (js)

[input] array.integer array

[output] array.integer

Input:
array: [12, 5, 7, 10, 1, 160]

Expected Output:
[12, 160]

Input:
array: [12, 17, 161, 5, 7, 10, 1, 160]

Output:
[160, 161]

Input:
array: [1, 3, 7, 6, 2, -1]

Output:
[6, 7]

*/

function solution(array) {
    let sortedArr = array.sort((a, b) => a - b); 
    return sortedArr.slice(array.length - 2); 
}
