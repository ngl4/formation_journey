/*
1. Sum all the elements in an array.
[1,2,3] => 6
[] => 0

iterative: for(let i= 0; i < array.length; i++) sum+=array[i]

Base Case: When len(array) ==1 >>> return array[0]
 
Recursive Case: index

function (array, index)
  Base: 
    if (index === array.length) 
    return 0
  
  return array[index] + function(array, index + 1)

[1, 2, 3]

0        ^ 
3
2
1

6

def rSum(array, index=0):
    
    if len(array) == index:
        return 0
    
    return array[index] + rSum(array, index + 1)

print(rSum([1, 2, 3]), 6)

2. Remove all target elements from an array.
n = 100
func calls=n n* n -> n^2
n operations
[1, 2, 3, 4, 3], 3 = > [1, 2, 4]

[2], 2 => []
[] => []

pseudo
result array
use helper to do the recursive call, 
base case is when the index is at the end of the array
only add to the result if it is not the target
use the helper to advance the index/iterate through array

3. Return true if an array has palindrome values ([3, 2, 1, 2, 3] => true,  [3, 2, 1] => false)


4. Shift the elements in an array by 1 and move the last element to the first ([1, 2, 3, 4] => [4, 1, 2, 3])
*/



function removeAllTargetElems(array,  target, index=0, result=[]) {
    //base 
    if (index === array.length) {
      return result; 
    }
  
    if (array[index] !== target) {
      result.push(array[index]); 
    }
  
    //recursive 
    return removeAllTargetElems(array, target, index + 1,  result);
  }
  
  console.log(removeAllTargetElems([1, 2, 3, 3], 3), "expect [1, 2]")
  
//   ## Sum
  ```js
  const array = [1, 2, 3, 4, 5]
  
  const sum = (arr, i=0) => {
    console.log(arr, i);
    if (i === arr.length){
      return 0
    }
    return arr[i] + sum(arr, i + 1)
  }
  console.log(sum(array), 15)
  ```
  
//   ## Remove Elements
  ```js
  const array = [1, 2, 3, 3, 4, 5]
  
  const remove = (arr, target, i=0) => {
    if (i === arr.length){
      return arr;
    }
    if (arr[i] === target){
      arr.splice(i, 1)
      return remove(arr, target, i)
    }
    return remove(arr, target, i + 1);
  }
  console.log(remove(array, 3,), [1, 2, 4, 5])
  ```
  
//   ## Palindrome
  ```js
  let array = [ 3, 6, 0, 6, 3 ];
  
  const palindrome = (arr, begin=0, end=arr.length - 1) => {
    if (begin >= end) {
      return true;
    }
    if (arr[begin] == arr[end]) {
      return palindrome(arr, begin + 1, end - 1);
    }
    else {
      return false;
    }
  }
  
  console.log(palindrome(array), true)
  
  ```
  
//   ## Rotate
  ```js
  let array = [ 3, 6, 0, 6, 3 ];
  
  //if i == arr.length return array
  //set array at i to array at i -1 or the next index in the array
  //call rotate on the next index
  const rotate = (arr, i = 0, prev=arr[arr.length - 1]) => {
    if (i === array.length){
      return arr
    }
    let tmp = arr[i];
    arr[i] = prev;
    return rotate(arr, i + 1, tmp);
  }
  
  console.log(rotate(array), [3, 3, 6, 0, 6])
  
  ```