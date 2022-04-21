/*
Prompt: 

Given an array of number that may contain duplicates, return a new array without the duplicates.

Example:
[4, 2, 6, 7, 4, 8, 7] => [4, 2, 6, 7, 8]

*/

/*
Approaches: 

APPROACH 1: 
no constraints on output order or extra space
use a map and construct a de-duped array to return
N space and time

APPROACH 2: 
no extra space allowed, but order does not matter
sort and remove dupes NlogN

APPROACH 3: 
no extra space and order DOES matter
nested loops N^2 solution

*/

/*
APPROACH 1: 
*/

function removeDuplicates(input){ //optimized version + correct function name (before noDuplicates) + params with descriptive name 
    const seenNumbers = new Set();
    for(const item of input){
      seenNumbers.add(item)
    }
  
    /* for(let i = 0; i < array.length; i++){ //before optimization 
      if(!set.has(array[i])){ //when using a set, there is no need to have an extra if statement 
        set.add(array[i])
      }
    } */
  
    return Array.from(seenNumbers);
  }
  
  console.log(removeDuplicates([4,2,6,7,4,8,7])) // [4,2,6,7,8]
  console.log(removeDuplicates([4,4,4,4,4])) // [4]
  console.log(removeDuplicates([1,3,2,6,8])) // [1,3,2,6,8]
  console.log(removeDuplicates([])) // []