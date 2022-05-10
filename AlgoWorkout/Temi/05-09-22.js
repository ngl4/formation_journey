/*
 
Given an array of chronological prices for a stock, find the maximum profit to be made per stock. You can make at most one trade and there are no trading fees.

Examples
[2, 5] -> 3 (buy at 2, sell at 5)
[6, 10, 2, 3, 8] -> 6 (buy at 2, sell at 8)
Function Signature
function maximizeProfit(prices: Array<number>): number

create bestProfit variable to -Infinity
loop through input array ----> i
  loop through input array from i+1 ------> j
    if num[j] - num[i] > bestProfit
      update bestProfit
currDiff = 
maxDiff = 2 
  l       c
 [8, 10, 15, 2, 4]
 
[6, 8, 10, 2, 3]
           
*/

function maxProfit(arr){
    let bestProfit = -Infinity;
    for(let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {
        if(arr[j] - arr[i] > bestProfit){
          bestProfit = arr[j] - arr[i];
        }
      }
    }
    return bestProfit
  }
  //[3, 10, 2, 3, 8]
  // 
  
  // console.log(maxProfit([2, 5])) // 3
  // console.log(maxProfit([6, 10, 2, 3, 8])) // 6
  
  /*
  current_difference = 1
  max_difference = 4 
  current_min
  [6, 8, 10, 2, 3]
  
               i
            m
  
  create currDiff, maxDiff, currMin = array[0]
  loop through array, i + 1 -> arrayLength
    currDiff = currElement - currMin
    if currElement < currMin
      currMin = currElement
    if currDiff > maxDiff
      maxDiff = currDiff
  return maxDiff
  */
  
  function maxProfitv2(arr) {
    let min = arr[0];
    let bestProfit = -Infinity;
    for (let i = 1; i < arr.length; i++) {
      const cur = arr[i];
      const curProfit = cur - min;
      if (cur < min) {
        min = cur;
      }
      if (curProfit > bestProfit) {
        bestProfit = curProfit;
      }
    }
    return bestProfit;
  }
  
  console.log(maxProfitv2([2, 5])) // 3
  console.log(maxProfitv2([6, 10, 2, 3, 8])) // 6