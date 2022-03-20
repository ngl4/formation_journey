/*
Q. Given an array of positive integers, find the first element that occurs k number of times. If no element occurs k times, return -1, and you may assume k is greater than 0. 

Examples:
• Given an array: [1, 2, 2, 3, 3], k: 2 // returns 2
• Given an array: [], k: 1 // returns -1
*/
function firstKTimes(array, k) {

}

// Test Cases
console.log(firstKTimes([1, 2, 2, 3, 3], 2)) // 2
console.log(firstKTimes([1, 2, 2, 3, 3], 3)) // -1
console.log(firstKTimes([], 1)) // -1

//----------------------------------------------------------------------------------

//Approaches: 

function firstKTimes(array, k) {

    //One way to approach: 
    let map = new Map(); 
    for (let i = 0; i < array.length; i++) {
      const count = (map.get(array[i]) || 0 ) + 1;
      // console.log('before: ', map);  
      // if (count === k) return array[i]; 
      map.set(array[i], count); 
      // console.log('after: ', map);  
      if (count === k) return map.get(array[i]); 
    }
    return -1; 
  
    // Another Approach: 

    // const counts = new Map();
    // for (const el of array) {
    //   const count = (counts.get(el) || 0) + 1;
    //   if (count === k) return el;
    //   counts.set(el, count);
    // }
    // return -1
  }