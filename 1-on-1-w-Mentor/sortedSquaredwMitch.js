/*
Given an integer array nums sotred in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.


Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

edge case:
- neg nums
- empty cases
- if 1 number array


#1
NlogN
[-4,-1,0,3,10] loop and square items
[16,1,0,9,100] loop and sort items
[0,1,9,16,100] return this array
output: [0,1,9,16,100]

#2
N
input: [-7,-3,2,3,11]
[49,9,4,9,121]
[4,9,9,49,121]
output: [4,9,9,49,121]

N
input => []
output => []

input => [3]
input => [9]


Time complexity
nlogn

Space complexity
1



input: [-4,-1,0,3,10]
[-4, -1]  [0, 3, 10] spilt
[16, 1] [0, 9, 100] sqaure both arrays

[16, 1] [0, 9, 100]
i         
                j
[0, 1, 9, 16, 100]
T O(N)
S O(N)


*/

function sortedSquares(arr) {
    if (!arr.length) return arr;
    if (arr.length === 1) {
      arr[0] = arr[0] * arr[0];
      return arr;
    }
  
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] * arr[i];
    }
  
    return arr.sort((a, b) => a - b);
  }
  
  console.log(sortedSquares([]), [])
  console.log(sortedSquares([3]), [9])
  console.log(sortedSquares([-4,-1,0,3,10]), [0,1,9,16,100])
  console.log(sortedSquares([-7,-3,2,3,11]), [4,9,9,49,121])