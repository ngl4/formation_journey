// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.


/*
Monotonically increasing
input: [1, 3, 5, 7]
output: true 

Monotonically decreasing
input: [7, 5, 3, 1]
output: true

Not monotonical array
input: [7, 8, 3]
output: false 


Approaches: 


always monotical when the array is less than 3 items [1,3], [3,1]

end at array.length - 1

1 3 5 7
    i

7 5 3 1 
    i

array[i] > array[i+1] increasing to false
array[i] < array[i+1] decreasing to false 

increasing: true
decreasing: true


set up the increasing, decreasing value and set to true
iterate through an array (array.length - 1)
    if array[i] > array[i+1] increasing to false 
    if array[i] < array[i+1] decreasing to false 
return increasing or decreasing 

T: O(N) n= number of elements of the input array 
S: O(1)


Testing 

[1, 3, 5, 7]
       i

increasing = true
decreasing = false
output= true

[7, 5, 3, 1]
       i

increasing = false
decreasing = true
output= true 

[1, 5, 3, 7]
       i

increasing = false
decreasing = false
output= false


[1, 3, 5, 7]
    i
*/


function isMonotonicArray(input) {
    if (input.length === 0) return false;
    
    let increasing = true, decreasing = true; 
    for (let i = 1; i < input.length; i++) { 
      if (input[i] < input[i-1]) increasing = false; 
      if (input[i] > input[i-1]) decreasing = false; 
    }
    return increasing || decreasing; 
  } 
  
  // var isMonotonic = function(nums) {
  //   let dec = true; 
  //   let inc = true; //1
    
  //   for (let i = 1; i < nums.length; i++) {
  //       dec &= nums[i-1] >= nums[i]; // true  &=  false   //0
  //       inc &= nums[i-1] <= nums[i]; // true  &=  false   //0
  //   }
    
  //   return dec || inc;  0 or 0  true or false
  // };
  
  
  //My first approach
  // if (nums.length < 2) return true;
  // if (nums[0] <= nums[1]) { 
  //     for (let i = 0; i < nums.length - 1; i++) {
  //         if (nums[i] > nums[i + 1] ) return false;  
  //     }        
  // }
  // if (nums[0] >= nums[1]) {
  //     for (let i = 0; i < nums.length - 1; i++) {
  //         if (nums[i] < nums[i + 1]) return false; 
  //     }        
  // }
  // return true; 
  
  
  let arr1 = [1, 3, 5, 7];
  let arr2 = [7, 5, 3, 1];
  let arr3 = [1, 5, 3, 7];
  let arr4 = [1, 2, 2, 2];
  let arr5 = [];
  console.log(isMonotonicArray(arr1)) // true
  console.log(isMonotonicArray(arr2)) // true
  console.log(isMonotonicArray(arr3)) // false
  console.log(isMonotonicArray(arr4)) // true
  console.log(isMonotonicArray(arr5)) // false