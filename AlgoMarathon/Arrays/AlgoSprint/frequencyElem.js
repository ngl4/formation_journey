// Your previous Plain Text content is preserved below:

// Algo Sprints Number of Unique Elements Variations

// 1. Most frequent element in array*
// 2. Least frequent element in array ****
// 3. Number of elements with exactly 2 occurrences ([1, 2, 1, 3, 2, 4] returns 2) ***


/*

Approach
- iterate array
- map
- min

1, 1, 3, 2, 6
              i

{              
1: 2
3: 1
2: 1
6: 1
}

Object.keys(map)
*/

// function findLeastElem(input) {
//   let frequencyMap = new Map(); 
//   let min = Infinity; 
//   let minKey = null;
//   for (let i = 0; i < input.length; i++) {
//     const count = (frequencyMap.get(input[i]) || 0) + 1; 
//     frequencyMap.set(input[i], count);
//   }
//   // let frequencies = frequencyMap.entries();

//   for (const [key, value] of frequencyMap.entries()) {
//       if (value < min) {
//         min = value;
//         minKey = key;
//       } 
//   }

//   return minKey;
  // console.log(frequencies);
// }

// // Test Cases 
// console.log(findLeastElem([]), null);
// console.log(findLeastElem([9, 8, 7]), 9); 
// console.log(findLeastElem([1, 1, 3, 2, 6]), 3);
// console.log(findLeastElem([1, 1, 1, 3, 5, 3, 2, 2, 5, 6]), 6);
// console.log(findLeastElem([2, 4, 2, 1, 2, 1, 4, 5, 4, 5]), 1);

// 3. Number of elements with exactly 2 occurrences ([1, 2, 1, 3, 2, 4] returns 2) ***

// function exactlyTwoOccurances(input) {

//   let frequencyMap = new Map(); 
//   let min = Infinity; 
  // let minKey = null;
//   for (let i = 0; i < input.length; i++) {
//     const count = (frequencyMap.get(input[i]) || 0) + 1; 
//     frequencyMap.set(input[i], count);
//   }

//   let listOfTwo = [];
//   frequencyMap.forEach( (value, key)=> 
//   {
//     if(value === 2) {
//       listOfTwo.push(key);
//     }
//   });

//   return listOfTwo.length;

// }

function findMaxElem(input) {
    let frequencyMap = new Map(); 
    let max = 0; 
    let maxKey = null;
    for (let i = 0; i < input.length; i++) {
      const count = (frequencyMap.get(input[i]) || 0) + 1; 
      frequencyMap.set(input[i], count);
    }
    // let frequencies = frequencyMap.entries();
  
    for (const [key, value] of frequencyMap.entries()) {
        if (value > max) {
          max = value;
          maxKey = key;
        } 
    }
  
    return maxKey;
    // console.log(frequencies);
  }

// Test Cases

console.log(exactlyTwoOccurances([1, 1, 3, 2, 6]), 1);