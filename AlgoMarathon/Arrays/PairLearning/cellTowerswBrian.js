/*
One-on-One with Brian Do!!! (around close to 2hrs)

Prompt (This is considered a MEDIUM TYPE problem)

You are given an array representing the positions of cell towers along a 2 dimensional line. You are given a second array representing positions of customers across the same 2 dimensional line. Given these two inputs, you must determine a signal strength k such that every customer is covered by at least one cell tower. All cell towers must have the exact same signal strength and covers customers to its left and right equally.

Function Signature:
def search(listener, towers):


leftI: 0

left: 3
right: Infinity

time: O(nlogn + mlogm) if both arrays are unsorted
time: O(n + m) if both arrays are sorted 



for (customers)
  while towers[leftI] < currCustomer

towers: [2, 3, 5, 6]
customers: [4, 20, 5]
k = 14

smallestDistanceNeeded = 3
lastEncountered = customer
lastEncounteredI = 4

k = 3

         i
....1.......1....1......
...o.....o........o......



1. sort the towers array and the customers array
2. iterate through the customers array
3. find the closest tower on the left and right side of the customer and update k
  - set the left variable to -Infinity, the right varaible to Infinity 
  - find the 2 towers that are closest to the customer in terms of distance, compare them, and only update k based on the highest smallest difference found. 
*/

function search(customers, towers) {
    customers.sort((a, b) => a - b); // also no.
    towers.sort((a, b) => a - b); // no.
  
    let k = 0
    let towerI = 0;
  
    for (let i = 0; i < customers.length; i++) {
      let left = -Infinity;
      let right = Infinity;
      
      while (customers[i] > towers[towerI]) {
        left = towers[towerI++]
      }
      right = towers[towerI] ?? Infinity //undefined or null. || (falsy) or ?? (nullish)
  
  
      const leftDistance = Math.abs(left - customers[i])
      const rightDistance = Math.abs(right - customers[i])
      const closestTowerDistance = Math.min(leftDistance, rightDistance)
      k = Math.max(k, closestTowerDistance)
    }
  
    return k
  }
  
  
  console.log(search([4, 5, 20], [2, 3, 5, 6]), 14);
  console.log(search([4, 5, 20], [2, 3, 5, 6, 21]), 1);
  
  
  
  
  // Javascript Solution (Formation)
  function search(listener, towers) {
    let maxTowerDistance = Number.MAX_SAFE_INTEGER;
    let towerIdx = 0;
    for (let i = 0; i < listener.length; i++) {
  while(towerIdx + 1 < towers.length 
        && Math.abs(listener[i] - towers[towerIdx]) <= Math.abs(listener[i] - towers[towerIdx + 1])) {
    towerIdx++;
  }
  maxTowerDistance = Math.min(maxTowerDistance, Math.abs(listener[i] - towers[towerIdx]));
    }
    return maxTowerDistance;
  }