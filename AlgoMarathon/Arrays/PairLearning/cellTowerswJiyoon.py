'''
SOLUTIONS from Carlos and his pair leanring fellow 
'''

def search1(customers, towers):
  closestTower = [float("inf")] * len(customers)
  # create dictionaries to determine if element is customer/tower
  t_dict = {}
  c_dict = {}

  for t in towers:
      t_dict[t] = True
  for c in customers:
      c_dict[c] = True
  
  merged = customers + towers
  merged.sort()
  
  # left to right
  left = None
  print(merged)
  for i in range(len(merged)):
      if merged[i] in t_dict:
          left = merged[i]
      if merged[i] in c_dict:
          idx = customers.index(merged[i])
          if left:
              closestTower[idx] = abs(left - merged[i])
  
  # right to left
  right = None
  for j in reversed(range(len(merged))):
      if merged[j] in t_dict:
          right = merged[j]
      if merged[j] in c_dict:
          idx = customers.index(merged[j])
          if right:
              closestTower[idx] = min(abs(merged[j] - right), closestTower[idx])
  
  print(closestTower)
  return max(closestTower)



def search(customers, towers):
    closestTower = [0] * len(customers)
    diff = float("inf")
    largest = 0
    smallest = 0
    for i in range(len(customers)):
        smallestDiff = float("inf")
        for j in range(len(towers)):
            largest = max(customers[i], towers[j])
            smallest = min(customers[i], towers[j])
            diff = largest - smallest
            if diff < smallestDiff:
                smallestDiff = diff
                closestTower[i] = smallestDiff
    return max(closestTower)

towers1 = [0, 2, 6, 10]
customers1 = [0, 5, 11]
print(search1(customers1, towers1), 1)
towers2 = [0, 2, 6, 10]
customers2 = [0, 4, 13]
print(search1(customers2, towers2), 3)
  
  
  
  # /*
  #   Jiyoon's Approach in Python

  # */

'''
You are given an array representing the positions of cell towers along a 1 dimensional line. 

You are given a second array representing positions of customers across the same 1 dimensional line. 

Given these two inputs, you must determine a signal strength k such that every customer is covered by at least one cell tower. 

All cell towers must have the exact same signal strength and covers customers to its left and right equally.


Function Signature:
def search(listener, towers):

Examples
Let's say cell towers are at: [0, 2, 6, 10]
and customers are at: [0, 5, 11]

In this case, you only need a cell distance of 1, because customer 5 would be covered by 6 and customer 11 would be covered by 10.
If the customers were at: [0, 4, 13], you'd need a distance of 3 in order for customer 13 to be covered by 10.


    t: 0  2     6    10
    c: 0    4              13
    returns 3


    c: 0       5       11
    returns 1

        i
    0 2 6 10
    
        j
    0 5 11



tower = 0
customer 0 is covered, need 0 - set as current k

i = 2
customer = 5
could cover, would need 3 - bigger than k
if i = 6, could cover, would need 1 - smaller k


i = 6
customer = 11
could cover, would need 5 - bigger than k
if i = 10, could cover, would need 1 - smaller k


when would we determine is the right time to move to the next tower / customer? 

we don't want smallest min, we want smallest max


      i
    0 2 6 10
    
    j
    0 5 11

        
                  i
    t: 2 3 5 6 21
               j
    c: 4 5 20 31

'''


# def search(listener, towers):
    
#     i = j = 0

#     customer_strength = []
#     while i < len(towers) and j < len(listener):

#         curr_strength = abs(towers[i] - listener[j])
#         if i + 1 < len(towers):
#             one_tower_over = abs(towers[i + 1] - listener[j])
#             if one_tower_over < curr_strength:
#                 customer_strength.append(one_tower_over)
#                 i += 1
#             else:
#                 customer_strength.append(curr_strength)
#         else:
#             customer_strength.append(curr_strength)
        
#         i += 1
#         j += 1

    # print(customer_strength)
    # return max(customer_strength)





print(search([0,5,11],[0,2,6,10]), 1)
print(search([0,4,13],[0,2,6,10]), 3)
print(search([4, 5, 20], [2, 3, 5, 6]), 14)
print(search([4, 5, 20], [2, 3, 5, 6, 21]), 1)
print(search([4, 5, 20, 31], [2, 3, 5, 6, 21]), 10)

# /*
# Understanding the approach that are done with Brian and Alexis


# Pseudo-code

# 1. sort the towers array and the customers array
# 2. iterate through the customers array
# 3. find the closest tower on the left and right side of the customer and update k
#   - set the left variable to -Infinity, the right varaible to Infinity 
#   - find the 2 towers that are closest to the customer in terms of distance, compare them, and only update k based on the highest smallest difference found.

#           t
# Tower:    ....1.......1....1......
#           i
# Customer: ...o.....o........o......


#        t
#     t: 0  2     6    10
#        i
#     c: 0    4              13


#     c: 0       5       11
#     returns 1

#     worst Time: O(c + t)
#     Space: O(1) 
# */



#  function search(customers, towers) { 
#      let k = 0
#      let towerI = 0;
  
#      for (let i = 0; i < customers.length; i++) { 
#        let leftTower = -Infinity;
#        let rightTower = Infinity;
      
#        while (customers[i] > towers[towerI]) {
#          leftTower = towers[towerI++]
#        }
#        rightTower = towers[towerI] ?? Infinity //undefined or null. || (falsy) or ?? (nullish)
  
  
#        const leftTowerStrength = Math.abs(leftTower - customers[i])
#        const rightTowerStrength = Math.abs(rightTower - customers[i])
#        const smallestTowerStrength = Math.min(leftTowerStrength, rightTowerStrength)
#        k = Math.max(k, smallestTowerStrength)
#      }
  
#      return k
#    }
  
#    console.log(search([4, 5, 20], [2, 3, 5, 6]), 14);
#    console.log(search([4, 5, 20, 31], [2, 3, 5, 6, 21]), 10);
#    console.log(search([1, 1, 1, 1, 1], [2]), 1);
  
  
#   /*
#   print(search([0,5,11],[0,2,6,10]), 1)
#   print(search([0,4,13],[0,2,6,10]), 3)
#   print(search([4, 5, 20], [2, 3, 5, 6]), 14)
#   print(search([4, 5, 20], [2, 3, 5, 6, 21]), 1)
#   print(search([4, 5, 20, 31], [2, 3, 5, 6, 21]), 10)
#   */


