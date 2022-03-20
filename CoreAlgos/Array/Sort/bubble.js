/*
Q. Given an unsorted array, perform bubble sort in ascending order.

Examples:
• Given an array: [1] // returns [1]
• Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]
*/

function bubbleSort(array) {

}

// Test Cases
console.log(bubbleSort([])) // []
console.log(bubbleSort([1])) // [1]
console.log(bubbleSort([3, 1, 2, 4])) // [1, 2, 3, 4]
console.log(bubbleSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]

//----------------------------------------------------------------------------------

//Approaches: Time: O(N^2)

function bubbleSort(array) {
    //iterate through the entire array 
    //compare the consecutive items in the second iteration within the subarray
    //if the current item is larger than the next item -> swap!! 
  
    for(let i = 0; i < array.length; i++) { //main array 
      for (let j = 0; j < array.length; j++) {//subarray
        const currentValue = array[j], nextValue = array[j + 1]; 
        if (currentValue > nextValue) {
          array[j + 1] = currentValue; 
          array[j] = nextValue; 
        }
      }
    }
  
    return array 
}