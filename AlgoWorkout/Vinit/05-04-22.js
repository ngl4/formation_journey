/*
Stack Type Problem (looks like easy but actually really hard!!)

Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature.

Example:

Given the list of temperatures T = [73, 74, 75, 71, 69, 72], your output should be [1, 1, 0, 2, 1, 0].


outer loop goes through each temperature
    inner loop counts while there isnt a greater temperature
      increments a counter


[74, 72, 69, 68, 70]
         2   1   0


Create a stack of array indices. Iterate through the array.
At each position, compare two values: the value at current index we are processing in the array, and the value at the index at the top of the stack. If the current element is larger, set the value in the answers array as the difference between the current index in the last index of the stack. Repeat this until the current value is larger than the value at last index of the stack. Append the current index to the stack and move on to the next element in the array.

[73, 74, 75, 71, 69, 72]
*/

// stack: [2, 5]
// result: [1, 1, _, 2, 1]
// i: 6
// curItem: 72

// while(stack.length > 0 && 75 < 72)
//  stackTop: 3
// result[1] => 2 - 1

function findWarmerV2(temps) {
    const stack = [];
    const result = new Array(temps.length).fill(0);
  
    for (let i = 0; i < temps.length; i++) {
      const curItem = temps[i];
  
      while(stack.length > 0 && temps[stack[stack.length - 1]] < curItem) {
        const stackTop = stack[stack.length - 1];
        result[stackTop] = i - stackTop;
        stack.pop();
      }
      stack.push(i);
    }
  
    return result;
  }
  
  
  function findWarmer(temps){
    let result = [];
  
    for (let i = 0; i < temps.length; i++){
      const curTemp = temps[i];
      let j = i+1;
  
      while (curTemp >= temps[j] && j < temps.length){
        j++
      }
  
      result.push(j >= temps.length ? 0 : j-i);
    }
  
    return result;
  }
  
  // i: 2
  // curTemp: 75
  // j: 6
  
  // while (75 >= 72 && j < 6)
  
  
  // result: [1, 1, 0]
  
  console.log(findWarmerV2([73, 74, 75, 71, 69, 72])); // [1, 1, 0, 2, 1, 0]