/*
Q. Given an unsorted array, perform merge sort in ascending order.

Examples:
• Given an array: [1] // returns [1]
• Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]

https://www.youtube.com/watch?v=jlHkDBEumP0
https://www.youtube.com/watch?v=4VqmGXwpLqc 
*/
function mergeSort(array) {  

  }

  // Test Cases
  console.log(mergeSort([])) // []
  console.log(mergeSort([1])) // [1]
  console.log(mergeSort([3, 1, 2, 4])) // [1, 2, 3, 4]
  console.log(mergeSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]

//----------------------------------------------------------------------------------

//Approaches: Time: O(n log n)

function mergeSort(array) {  
    //split array - find the mid point and then split up the array 
    if (array.length < 2) {
      return array; 
    }
    let mid = Math.floor((array.length/2));
    let left = array.slice(0, mid); 
    let right = array.slice(mid); //mid -> last
    // console.log(mid, left, right); 
    
    return merge(mergeSort(left), mergeSort(right)); 
  }
  
  function merge(left, right) {
    //result array
    let result = []; 
    
    //based left right length - loop
      //comparison left vs right - smaller value push first to result array, push larger value next 
    while (left.length && right.length) {
      if (left[0] < right[0]) { //push left
        result.push(left.shift()); 
      }else {//push right
        result.push(right.shift()); 
      }
    }
    //create two new variables (clone of the left and right)
    let cloneLeft = left.slice(); //[3]
    let cloneRight = right.slice(); //[]
    // console.log(cloneLeft, cloneRight); 
  
    //return 
    return result.concat(cloneLeft, cloneRight); 
  }
 