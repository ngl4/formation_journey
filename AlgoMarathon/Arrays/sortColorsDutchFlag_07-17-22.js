/*

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Input: nums = [2,0,1]
Output: [0,1,2]


##### 3-Pointers APPROACH (SUCCESS)

- set a curr pointer, left pointer, and right pointer 
- Keep looping when curr <= right 
- if curr === 0, then swap the curr value with the right value 
  - move both curr and the left pointers forward (curr++, left++)
- If curr === 2, then swap the curr value with the right value 
  - move the right pointer backward (right--)
- If curr === 1, then move the curr pointer forward (curr++) only 

0,0,1,1,2,2
  ^
        ^
      ^

Time: O(n) n= number of elements in the input array (input length)
Space: O(1) no extra space is used besides the input array
*/

function sortColors(input) {
  let left = 0, curr = 0, right = input.length -1; 

  while (curr <= right) {
    if (input[curr] === 0) { //we are on the smaller num, switch with any bigger left value
      [input[curr],input[left]] = [input[left],input[curr]];
      // let temp = input[curr]; 
      // input[curr] = input[left]; 
      // input[left] = temp; 

      curr++; 
      left++; 

    }else if (input[curr] === 2) { //we are on the bigger num, switch with any smaller right num 
      [input[curr],input[right]] = [input[right],input[curr]];

      right--;

    }else { //we are on 1, keep moving the curr pointer forward only, 
      //so if we have a situation of [1,0,2], we will move the curr pointer forward, the left p is still at 1, curr is 0, right is 2. 
      curr++;
    }
  }
  return input; 
}



/*
##### Failed APPROACH  - There are tons of edge cases - The best way to solve this problem is to use 3 pointers 
Two Pointers and One Pass: 
while left <= right
when the input[left] > input[right], move right--; 
when the input[left] < input[right], move left++; 
when the input[left] === input[right], move left++; 

0,0,1,1,2,2
      ^
  
      ^


0,1,2
^
^

Time: O(n) n= number of elements in the input array (input length)
Space: O(1) no extra space is used besides the input array

*/


// ##### IMPLEMENTATION

// function sortColors(input) {
  // let left = 0; 
  // let right = input.length - 1;

  // while (left <= right) {
  //   if (input[left] > input[right]) {  //swap
  //     [input[left],input[right]] = [input[right],input[left]];
  //     if (input[right] === 1) {
  //       left++; 
  //     }else {
  //       right--;
  //     }
  //   }else if (input[left] < input[right]) { //no swap
  //     if (input[left] === 1) { //handle edge cases: [1, 0, 2], [1,2,0]
  //       right--; 
  //     }else {
  //       left++; 
  //     }
  //   }else { //same values
  //     if (input[left] > 0) { //handle edge cases: [1,0,1], [2,0,2]
  //       if (input[right - 1] === 2) {
  //         left++; 
  //       }else {
  //         right--; 
  //       }
  //     }else {
  //       left++; 
  //     }
  //   }
  // }
  // return input;  
// }

//[1,2,1]


console.log(sortColors([2,0,2,1,1,0])); 
console.log(sortColors([2,0,1])); 
console.log(sortColors([1,0,2]));   
console.log(sortColors([1,2,0])); 
console.log(sortColors([1,0,1])); 
console.log(sortColors([2,0,2])); 
console.log(sortColors([2,1,2])); 
console.log(sortColors([0,2,0])); 
console.log(sortColors([2,2,1])); 
console.log(sortColors([1,2,1])); 