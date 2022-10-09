/*
In front of you is a row of N coins, with values v1, v2, ..., vn.
You are asked to play the following game. You and an opponent take turns choosing either the first or last coin from the row, removing it from the row, and receiving the value of the coin.

Write a program that returns the maximum amount of money you can win with certainty, if you move first, assuming your opponent plays optimally.


Function Signature
function playGame(coins)

Examples
[10, 24, 5, 9] => 33

[4] => 4 BASE CASE if the length of the arry is 1 = return arr[0]

[24,5] => 24 if the length the array is 2 = we can 
max(arr[0],arr[1])

recursive solution
  return 4
  or
  return max(24,5) = 24

  two options:
    1 option = arr[0]
    2 option = arr[arr.length - 1]
  
  option1 = arr[0] + recursiveSol
  option2 = arr[arr.length - 1] + recursiveSol

*/

/*
you can only pick the first or last coin

as you pick a coin it is removed from the row

with certainty if I move first
I have the option of taking the first or the last coin

*/
/*
  l l+1 r-1  r
 [10,24,5,9]

 [10,24,5,10]



def max_profit(coins, value):
  print(value)
  if len(coins) == 1:
      return value + coins[0]

  elif len(coins) == 2:
      print(value, "+", max(coins))
      return value + max(coins)

  else:
      return value + max(
          coins[0] + min(max_profit(coins[2:], value), max_profit(coins[1:-1], value)),
          coins[-1] + min(max_profit(coins[:-2], value), max_profit(coins[1:-1], value))
)

Time: ?
Space: O(1)

O(n^2) or O(2^n)

 */

// function playGame(coins, sum) {
//   console.log(coins);

//   if (coins.length === 1) {
//     return sum + coins[0];
//   }
//   else if (coins.length === 2) {
//     return sum + Math.max(...coins);
//   }
//   // [ 10, 24, 5, 9 ]
//   else {
//     return (
//       sum +
//       Math.max( //19 vs 33
//         coins[0] +
//           Math.min(
//             playGame(coins.slice(-2), sum), //coins[2:]
//             playGame(coins.slice(1, coins.length - 1), sum)
//           ),

//         coins[coins.length - 1] +
//           Math.min(
//             playGame(coins.slice(0, 2), sum), //coins[:-2] //24
//             playGame(coins.slice(1, coins.length - 1), sum) //24
//           )
//       )
//     );
//   }
// }

function playGame(nums) {
  let sum = 0;

  function backtrack(arr, left, right) {
    console.log(left, right, arr);
    if (left >= right) return (sum += arr[0]);
    if (arr.length === 2) return (sum += Math.max(arr[left], arr[right]));

    while (left < right) {
      const leftCandidate = arr[left + 1];
      const rightCandiate = arr[right - 1];

      if (leftCandidate > rightCandiate) {
        sum += arr[right];
      } else {
        sum += arr[left];
      }
      //[10,24,5,9]
      //[24,5]
      backtrack(arr.slice(1, right), left, right - 2);
      return sum;
    }
  }

  return backtrack(nums, 0, nums.length - 1);
}

//[10, 24, 5, 9] => 33
//console.log(playGame([10,24,3,5,9], 0))
console.log(playGame([10, 24, 26, 9], 0)); //36

/* lC rC
26 9
*/

/*
                      33
            33-10 33-24 33-5 33-9



*/

/*

DP Solution

def max_profit(coins, value):
    n = len(coins)
    profit = [[0 for _ in range(n)] for _ in range(n)]

    for i in range(n):
        profit[i][i] = coins[i]

    for i in range(n - 1):
        profit[i][i + 1] = max(profit[i][i], profit[i + 1][i + 1])

    for gap in range(2, n):
        for i in range(n - gap):
            j = i + gap
            left = profit[i][j - 2]
            diagonal = profit[i + 1][j - 1]
            bottom = profit[i + 2][j]
            profit[i][i + gap] = max(
                coins[i] + min(diagonal, bottom),
                coins[j] + min(left, diagonal)
            )

return profit[0][-1]

Runtime: O(n^2)
Space: O(n^2)


https://leetcode.com/problems/predict-the-winner/


*/

// find the number of way to get to a position from a grid of dimensions m * n
// the final position should be at grid(2,3)
// you can only move right or down

//input = grid(2,3)

/*
input and output
grid(0,0)
[
  
] => 0
grid(1,1)
[
  [] => 1
]

[0,0
  [, R,R ],
  [, ,D]  3
]

R or D
col + 1 = right
row + 1 = down

*/

//recursion
  //base (0,0)(1,1)
  //Shrink the input to 0 or 1 
//

//store the number of ways info avoid repetitive ways 
//helper function() -> four directions 
// -> * -> * -> END

//_ _ _
/*
|X|

*/


/* Top Down Approach:
                      m n
                      2,3 3
                      r/\D
                  2,2 2    1,3  1           
                  /\       /\
               11 2,1 1,2 1 1,2 0,3 = 0
                /\
    1 1,1 2,0 = 0
*/

// function numWays(m, n){

//   function dfs(row, col) {
//     if (row === 0 || col === 0) {
//       return 0; 
//     }
//     if (row === 1 && col === 1) {
//       return 1; 
//     }
//     return dfs(row - 1, col) + dfs(row, col - 1); 
//   }
//   return dfs(m, n); 
//  }


// console.log(numWays(2,3))

function bottomUpNumWays(m, n){
 const grid = Array(m+1).fill().map((_) => Array(n+1).fill(0))
 grid[1][1] = 1
 
 for(let row = 0; row <= m; row++){
  for(let col = 0; col <= n; col++){
    const self = grid[row][col]
    if(row + 1 <= m) grid[row + 1][col] += self
    if(col + 1 <= n) grid[row][col + 1] += self
  }
 }

 console.log(grid)

 return grid[2][3]
}

console.log(bottomUpNumWays(2,3))


/*
  [
      0, 1, 2, 3
   0 [0, 0, 0, 0],
   1 [0, 1, 1, 1],
   2 [0, 1, 2, 3]2,3
  ]


*/



/*

const = [
  {
    id: 1,
    name: about,
    url: href
  },{},{},{}
]



function Nav(){
 return (
  <nav>
    <div>logo</div>
    <ul>{}</ul>
  </nav>
 )
}

*/
