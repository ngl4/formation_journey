/*
Q. Given an unsorted array, perform selection sort in ascending order.

Examples:
• Given an array: [1] // returns [1]
• Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]
*/
function selectionSort(array) {

}

// Test Cases
console.log(selectionSort([])) // []
console.log(selectionSort([1])) // [1]
console.log(selectionSort([3, 1, 2, 4])) // [1, 2, 3, 4]
console.log(selectionSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]

//----------------------------------------------------------------------------------

//Approaches: Time: O(N^2)

/*
Testing the Approach: 

-current item
-current minimum 

1 2 3 4
    i
      j
    m
*/


//Better Approach: 
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
      let min = i; 
      for (let j = i + 1; j < array.length; j++) {
        if (array[min] > array[j]) {
          min = j; 
        }
      }
      if (min !== i) {
        [array[i], array[min]] = [array[min], array[i]];
      }
    }
  return array; 
}


//Another Approach: 
// function selectionSort(array) {
//     const length = array.length;
//     let minIndex, temp;
    
//     for (let i = 0; i < length; i++) {
//       minIndex = i;
//       for (let j = i + 1; j < length; j++) {
//         if (array[minIndex] < array[j]) continue; //DIFF: use continue
//         minIndex = j;
//       }
      
//       if (i != minIndex) {
//         temp = array[minIndex];  //DIFF: use temp variable instead of destructing 
//         array[minIndex] = array[i];
//         array[i] = temp;
//       }
//     }
    
//     return array; 
//   }