/* PASSED
Q. Given a sorted array of integers and a target number, insert it after the first number that matches it, if no number matches it, do nothing.

Examples:
Input1: array = [1, 2, 3, 4, 5, 6], target =3
Output1: [1, 2, 3, 3, 4, 5, 6]

Input2: array = [1, 5, 7, 8], target = 7
Ouput2: [1, 5, 7, 7, 8]

Input3: array = [1, 5, 7, 8], target = 9
Output3: [1, 5, 7, 8]


Input:
array: []
target: 1
Output:
[]

Input:
array: [1]
target: 1
Output:
[1, 1]
*/

function solution(array, target) {
    let foundIndex = -1; 
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) foundIndex = i; 
    }
    if (foundIndex >= 0) {
        let firstHalf = array.slice(0, foundIndex + 1); 
        let secondHalf = array.slice(foundIndex + 1); 
        console.log(secondHalf); 
        return  firstHalf.concat(target, secondHalf);    
    }else return array; 
}
