/*

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.


[1, 2, 3] target: 4
[[1, 3], [2, 2], [1, 1, 1, 1], [1, 1, 2], [-1, 2, 3]]

Relevant?
- powerset
- 2^n

target: 8
+ 1           +2        +3
target: 7, target: 6, target: 5
    x         y          z

return x+y+z

[1, 3], target: 4

+3             +1
target:1      target: 3
[1]           [1,1,1], [3]

[1, 3], [1, 1, 1, 1], [1, 3]

Coin change: how many ways to add to target with set of coins?, minimum coins needed to target the target
  1 2 3 4 
1        
2        
3        
x
go through dp
code up backtracking xxxxxxx
next question x xxxXxx

[1, 2, 3], 4 
 ^
 1, [1, 2, 3], 3 // pick
     ^
     1 [1, 2, 3] 2
        ^
      _ [1, 2, 3] 3
            ^
     
 _, [1, 2, 3], 4 // dontpick (no duplicate going forward)
        ^


[1, 2, 3], 8
 ^

 1 [1, 2, 3], 7 /// pick
     ^
 , [1, 2, 3], 8 /// dontp ick 
    ^


[1, 2, 3] 4

     1    2     3
  1 2 3   2
 1  1 
1     
results = [[1, 1, 1, 1], [1, 1, 2]
        pick 1
    pick 1
  pick 1  pick 2
pick 1    [1, 1, 2]
[1, 1, 1, 1]

         3
      2     1
    0  4   2  5
  

*/

function uniqueCombos(input, target) {
    let results = []
    uniqueCombosHelper(input, target, 0, [], results)
    return results
  }
  
  function uniqueCombosHelper(input, target, i, combo, results) {
    if (target == 0) { // base case - we've found a valid combo!
      results.push([...combo])
      return
    }
  
    if (input[i] <= target) {
      combo.push(input[i])
      uniqueCombosHelper(input, target - input[i], i, combo, results) // jiyoon
      combo.pop()
    }
    if (i < input.length - 1) {
      uniqueCombosHelper(input, target, i+1, combo, results) // zaneh
    }
  }
  
  // console.log(uniqueCombos([1, 2, 3], 4))
  // console.log(uniqueCombos([1, 2, 3], 8))
  // console.log(uniqueCombos([3, 4], 5))
  // console.log(uniqueCombos([], 3))
  console.log(uniqueCombos([-1], 3))