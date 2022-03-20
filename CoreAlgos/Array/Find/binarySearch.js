/*
Using Binary Search to find the index of the target value in an array 
*/

function binarySearch(array, target, left = 0, right = array.length-1) {
}

// Test Cases
var array = [1, 2, 3, 6, 8, 13, 113, 153, 200]
console.log(binarySearch(array, 1)) // 0
console.log(binarySearch(array, 200)) // 8
console.log(binarySearch(array, 8)) // 4
console.log(binarySearch(array, 154)) // -1

//----------------------------------------------------------------------------------

//Approaches: 


function binarySearch(array, target, left = 0, right = array.length-1) {
    //INTERATIVE BINARY SEARCH 
    let targetIndex = -1; 
    while (targetIndex < 0 && left <= right) { 
      let mid = Math.floor((left + right) / 2);
      
      if (array[mid] === target){
        targetIndex = mid;
      }
      else if (target < array[mid]) {
        right = mid - 1; 
      }
      else {
        left = mid + 1;
      }
    }
    return targetIndex;

    //Another Iterative Approach: 
    //   let firstIndex = 0; 
    //   let lastIndex = array.length - 1; 
    //   let mid; 
    //   while(firstIndex <= lastIndex) {
    //     mid = Math.floor((firstIndex + lastIndex)/2); 
    //     if(array[mid] === target) return mid; 
    //     if(target > array[mid]) {
    //       firstIndex = mid + 1; 
    //     }else {
    //       lastIndex = mid - 1; 
    //     }
    //   }
    //   return -1; 
  
    //RECURSIVE BINARY SEARCH (UNCOMMENT BELOW TO SEE HOW IT WORKS!!)
    // console.log(array, target, left, right); 
    // if (left > right) return -1;
    // let mid = Math.floor((left + right) / 2);
    // console.log(left, right, mid);
    // if (array[mid] === target) return mid;
    // else if (target < array[mid]) return binarySearch(array, target, left, mid - 1);
    // else if (target > array[mid]) return binarySearch(array, target, mid + 1, right);
}

