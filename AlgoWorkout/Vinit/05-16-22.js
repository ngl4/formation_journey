/* DYNAMIC PROGRAMMING PROBLEM - How to roll a dice? 

You given a total number of dice, the number of faces on each dice and a total, write a function that determines the total number of ways to throw the dice to get the target sum.
If the number of faces on a dice is X, then numbers on each face will be 1, 2, ..., X. So a dice with 5 faces will have numbers 1, 2, 3, 4 and 5.

Examples:

n = 1, faces = 6, total = 3 returns 1 (must throw face 3)
n = 3, faces = 6, total = 7 returns 15
n = 2, faces = 6, total = 1 returns 0 (no ways to get 1 with two dice)
n = 2, faces = 6, total = 13 returns 0 (With two six sided dice, max is 12)
n = 2, faces = 3, total = 4 returns 3

start with n dice with target T
roll the first dice => y, new target: T - y
roll the 2nd dice => h, new target: T - y - h
... keep doing this until we run out of dice

base case is when we get down to our last dice
  if (dice === 1)
    if (target <= faces) {
      return 1
    } else {
      return 0
    }

n: 2
faces: 3
target: 4

getWays(n = 2, faces = 3, target = 4)

roll first dice: 1, 2, 3

if it rolls 1:
  getWays(n = 1, faces = 3, target = 3)
    since it is possible to roll 3, we can achieve target with this last dice => 1
if it rolls 2:
  getWays(n = 1, faces = 3, target = 2)
    since it is possible to roll 2, we can achieve target with this last dice => 1
if it rolls 3:
  getWays(n = 1, faces = 3, target = 1)
    since it is possible to roll 1, we can achieve target with this last dice => 1


    dp = {}
    
    def getWays(dices, faces, target):
      if target < 1:
        return 0
      if dices == 1:
        if faces >= target:
          return 1
        else:
          return 0
      numWays = 0
      for i in range(1,faces+1):
        if (dices,target-i) not in dp:
          dp[(dices,target-i)] = getWays(dices-1, faces, target-i)
          numWays += dp[(dices,target-i)]
      return numWays


      {
        
      }

      dp = {(dices,target):numWays}

*/


let dp = new Map();

function getWays(dices, faces, target) {
  if (target < 1) {
    return 0;
  }

  if (dices === 1) {
    return faces >= target ? 1 : 0;
  }

  let numWays = 0;

  for (let i = 1; i <= faces; i++) {
    const key = String(dices - 1) + '/' + String(target - i);

    if (!dp.get(key)) { // if key is not in map, compute by recursing and store result in map
      const ways = getWays(dices-1, faces, target - i);
      dp.set(key, ways);
    }

    numWays += dp.get(key);
  }

  return numWays;
}

/*
n = 1, faces = 6, total = 3 returns 1 (must throw face 3)
n = 3, faces = 6, total = 7 returns 15
n = 2, faces = 6, total = 1 returns 0 (no ways to get 1 with two dice)
n = 2, faces = 6, total = 13 returns 0 (With two six sided dice, max is 12)
n = 2, faces = 3, total = 4 returns 3

n = 2, faces = 6, target = 6
1, 5
2, 4
3, 3
4, 2
5, 1

n = 2, faces = 3, total = 4 returns 3

                                              root
                      1st rolls 1           1st rolls 2           1st rolls 3
                2nd 1, 2nd 2, 2nd 3      2nd 1, 2nd 2, 2nd 3    2nd 1, 2nd 2, 2nd 3

*/

// console.log(getWays(1, 6, 3)); // 1
// console.log(getWays(3, 6, 7)); // 15
// console.log(getWays(2, 6, 1)); // 0
// console.log(getWays(2, 6, 13)); // 0
// console.log(getWays(2, 3, 4)); // 3