/*
In front of you is a row of N coins, with values v1, v2, ..., vn.
You are asked to play the following game. You and an opponent take turns choosing either the first or last coin from the row, removing it from the row, and receiving the value of the coin.
Write a program that returns the maximum amount of money you can win with certainty, if you move first, assuming your opponent plays optimally.
Function Signature
function playGame(coins)
Examples
[10, 24, 5, 9] => 33
Expected Questions
None
Target Solve Time: 30 minutes.

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
print(max_profit([1,2,3,4], 0))
*/

function playGame(coins, value) {
  console.log(coins);

  if (coins.length === 1) {
    return value + coins[0];
  } 
  else if (coins.length === 2) {
    return value + Math.max(...coins);
  } 
  else {
    return (
      value +
      Math.max(
        coins[0] +
          Math.min(
            playGame(coins.slice(0, 2), value),
            playGame(coins.slice(1, coins.length - 1), value)
          ),

        coins[coins.length - 1] +
          Math.min(
            playGame(coins.slice(0, coins.length - 2), value),
            playGame(coins.slice(1, coins.length - 1), value)
          )
      )
    );
  }
}

console.log(playGame([10, 24, 5, 9], 0));

// function playGame(coins, value) {
//   console.log(coins);

//   if (coins.length === 1) {
//     return value + coins[0];
//   } else if (coins.length === 2) {
//     return value + Math.max(...coins);
//   } else {
//     return (
//       value +
//       Math.max(
//         coins[0] +
//           Math.min(
//             playGame(coins.slice(0, 2), value),
//             playGame(coins.slice(1, coins.length - 1), value)
//           ),

//         coins[coins.length - 1] +
//           Math.min(
//             playGame(coins.slice(coins.length - 2), value),
//             playGame(coins.slice(1, coins.length - 1), value)
//           )
//       )
//     );
//   }
  // if (currMax > finalMax) {
  //   finalMax = currMax;
  //   return;
  // }
  //recursive case (no pop and keep going)
  // currMax = Math.max(coins[index], currMax);
  // playGame(coins, index + 1, currMax, finalMax);

  // //pop and keep going
  // coins.pop();
  // playGame(coins, index + 1, currMax, finalMax);

  // //shift and keep going
  // coins.shift();
  // playGame(coins, index + 1, currMax, finalMax);
// }

console.log(playGame([10, 24, 5, 9], 0));
