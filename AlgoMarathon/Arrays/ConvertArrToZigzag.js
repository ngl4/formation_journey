/*
Prompt: 
Given an array of DISTINCT elements, 
rearrange the elements of array in zig-zag fashion in O(n) time. 
The converted array should be in form a < b > c < d > e < f. 

Example:

Input: arr[] = {4, 3, 7, 8, 6, 2, 1} 
Output: arr[] = {3, 7, 4, 8, 2, 6, 1}

Input: arr[] = {1, 4, 3, 2} 
Output: arr[] = {1, 4, 2, 3}

*/

//Attempt #1 - unsure

const createZigzag = (arr) => { 

    //ATTEMPT1: BUBBLE SORT AND SWAPPING - O(N^2)
    // for (let i = 0; i < arr.length; i++) {
    //   for (let j = 0; j < arr.length; j++) {
    //     let currVal = arr[j]
    //     let nextVal = arr[j+1]; 
    //     if (arr[j+1] < arr[j]){
    //       arr[j+1] = currVal; 
    //       arr[j] = nextVal; 
    //     }
    //   }
    // }
    // for (let i = 1; i < arr.length - 1; i+=2) {
    //   [arr[i], arr[i+1]] = [arr[i+1], arr[i]]; 
    // }
    // return arr; 
  }
  
  const test1 = createZigzag([1, 4, 3, 2]); 
  const test2 = createZigzag([4, 3, 7, 8, 6, 2, 1]); 
  console.log(test1); //[1, 4, 2, 3] or [1, 3, 2, 4]
  console.log(test2); //[3, 7, 4, 8, 2, 6, 1] or [1,3,2,6,4,8,7]


/*
22 mins: 
- Read and understand the prompt 
- Spend 10 mins to think of an approach (blank out and not sure), write test cases
- So check the first hint - simple solution: sort first then swap items after the first index 
- did visualizations on simple solution and start writing up the solution 
- since I have used bubble sort to sort through the array, the time complexity is O(n^2) 

15 mins: 
- Document my progress note 
- Reading through the efficient approach with the time complexity of O(n)
- Watching the Youtube video 

Questions: 
- Why is the simple solution time complexity is O(N log N)? 

Future Attempts: 
- Try to use the O(n) approach 

*/