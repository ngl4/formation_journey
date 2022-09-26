/*
        fib(5)
        /    \
      fib(4)  fib(3)
      /         /     \
    fib(3)    fib(2)  fib(1)
      /
      fib(2) ......
      /
      fib(1) ......
      /
      fib(0)
#1
 Time: 2^n (binary tree) 
 Space: O(n) (bound by the depth of the tree)

#2
                   X 
                  / \
                 X   0 
                /  \
               X    0 
X - split
0 - done

  Time: O(n)
  Space: O(n)

#3
  Time: O(n)
  Space: O(n)

*/
//#1
function fib(n) {
  if (n < 2) return n;
  return fib(n-1) + fib(n-2);
}

function fibT(n) {
  if (n < 2) return n;
  return fib((n/2)-1) + fib((n/2)-2);   //-> 2^logn
}

// function fibT1.0(n) {
//   print temi
//   return fib((n/2))
// }
//#2
function fib1(n, cache = {}){
  if(n < 2) return n
  if(cache[n]) return cache[n]

  cache[n] = fib(n-1) + fib(n-2)
  return cache[n]
}
//#3
function fib2(n){
  let cache = [0, 1]

  for(let i = 1; i < n; i++){
    cache.push(cache[i] + cache[i-1])
  }
  return cache[cache.length-1]
}

// console.log(fib(10))

/**
 * cutting search base
 * 
 *  fib((n/2)-1) + fib((n/2)-2); 
 * 
 * 
 */
//Min num of coins to make change for a value

/***
 * 
 *        [1, 2, 5] 
 *        makeChange(10)
 *         /           |              \
 *      makeChange(9) makeChange(8) makeChange(5)
 *        /      | \
 * makeChange(8) makeChange(7) makeChange(4)
 */


function makeChange(c) {
    if (c == 0) return 0;
    const minCoins = Number.MAX_VALUE;
    
    // Try removing each coin from the total and
    // see how many more coins are required
    for (const coin of coins) {
        // Skip a coin if it’s value is greater
        // than the amount remaining
        if (c - coin >= 0) {
            let currMinCoins = makeChange(c - coin);
        if (currMinCoins < minCoins)
            minCoins = currMinCoins;
        }
    }
    // Add back the coin removed recursively
    return minCoins + 1;
}


function makeChange1(c,cache = []) {
  if (c == 0) return 0;
  let minCoins = Number.MAX_VALUE;
  if (cache[c] >= 0) return cache[c];
  // Try removing each coin from the total and
  // see how many more coins are required
  for (const coin of coins) {
      // Skip a coin if it’s value is greater
      // than the amount remaining
      
      if (c - coin >= 0) {
          
          let currMinCoins = makeChange(c - coin);
      if (currMinCoins < minCoins)
          minCoins = currMinCoins;
      }
  }
  // Add back the coin removed recursively
  cache[c] = minCoins + 1
  return cache[c];
}

//Pros using DP: no stack space issue using dynamic programming vs recursion for meta data

function makeChange2(c) {
  let cache = [c + 1];
  for (let i = 1; i <= c; i++) {
      let minCoins = Number.MAX_VALUE;
      // Try removing each coin from the total
      // and see which requires the fewest
      // extra coins
      for (let coin of coins) {
          if (i - coin >= 0) {
              let currCoins = cache[i-coin] + 1;
          if (currCoins < minCoins) {
              minCoins = currCoins;
          }
      }
  }
  cache[i] = minCoins;
  }
  return cache[c];
}
