/*
Q. Given an unsorted array, return the number of unique values. For example, given [1, 1], there are two elements but only one unique value: 1.

Examples
Input1: []
Output1: 0
Input2: [3, 1, 1, 2, 3, 1, 1, 1, 4]
Output2: 4 // [1, 2, 3, 4]
*/

function numUniques(array) {

}

//   Test Cases
console.log(numUniques([])) // 0
console.log(numUniques([3, 1, 1, 2, 3, 1, 1, 1, 4])) // 2
console.log(numUniques([1])) // 1

//----------------------------------------------------------------------------------

//Approaches: 

function numUniques(array) {
  //Better Approach - more cleaner in comparison with the other approach below
  let map = new Map(); 
  for (let i = 0; i < array.length; i++) {
    const count = (map.get(array[i]) || 0) + 1; 
    map.set(array[i], count); 
  }
  return Array.from(map.values()).filter((elem) => elem === 1).length; 

  //Another Approach - using a set and an object instead of a map
  // let set = new Set(); 
  // let output = []; 
  // for (let i = 0; i < array.length; i++) {
  //     if (!set.has(array[i])) {
  //        set.add(array[i]);  
  //        output.push(array[i]); 
  //     }
  // }
  // return output.length; 
}