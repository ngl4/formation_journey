/*
You are standing at the foot of a mountain, looking up a peak and wondering if it is a false summit or not. A false summit is a visible highpoint that obscures the true summit from view. For example:
                              /
            / \             /
          /     \ _ _ _ _ /
        /
    _ /
X /
0 1 1 2 3 4 5 4 3 3 3 3 3 4 5 6 - heights
In this case, the person standing at the X is looking up at a peak 6 units away that is 5 units high. So even though there is a higher peak further back, it can't be seen because the false summit is in the way. So for input [0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 3, 3, 3, 4, 5, 6], the result should be false; you cannot see the true summit, because only the false summit is visible from the first position.
                    | \
                    |   \
                    |     \
                    |       _ _
                    |
                    |
                    |
            / \     |
          /     \ _ |
        /
    _ /
X /
0 1 1 2 3 4 5 4 3 3 9 10 9 8 7 7 - true (slope < 1)
0 1 1 2 3 4 5 4 3 3 11 10 9 8 7 7 - elevations (slope 1)

The input [0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 11, 10, 9, 8, 7, 7] will return true because the true summit is tall enough to be seen from the first position. However, if the value 11 is instead a 9, the true summit will be obscured by the value 1 at the second index. The value 1 then becomes a false summit!

The function takes an array of elevations. The first elevation will be zero and is the position of the viewer. From there, the elevations at each position will potentially change and indicate the elevation at that point relative to the viewpoint. Return true if the highest visible point is the true summit.

 
[1,2,3,4] -> false (no false summit)
[1,4,2,3]  --> false
[1,4,2,2,2,5] -> true

     .
   . . 
   . .
   . .
x. . .
[1,4,5] -> 
Is there a false summit
true - xxxXxx <-
false - xxxxxxxxx

[1,3,5] - > is this false 
[]
examples - 
 x
[3, 5, 7, 20, 10, 9, 12] => false? [20 is the tallest point] 

                     /\
                    /  \
              /\   /    \
X ___________/  \ /      \

                      /\
                     /  \
   /\               /    \
X /  \_____________/      \

       _
  _   / \
x/ \_/   \_
  1 0  2  0

*/


/*
You are standing at the foot of a mountain, looking up a peak and wondering if it is a false summit or not. A false summit is a visible highpoint that obscures the true summit from view. For example:
                              /
            / \             /
          /     \ _ _ _ _ /
        /
    _ /
X /
0 1 1 2 3 4 5 4 3 3 3 3 3 4 5 6 - heights
In this case, the person standing at the X is looking up at a peak 6 units away that is 5 units high. So even though there is a higher peak further back, it can't be seen because the false summit is in the way. So for input [0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 3, 3, 3, 4, 5, 6], the result should be false; you cannot see the true summit, because only the false summit is visible from the first position.
                    | \
                    |   \
                    |     \
                    |       _ _
                    |
                    |
                    |
            / \     |
          /     \ _ |
        /
    _ /
X /
0 1 1 2 3 4 5 4 3 3 9 10 9 8 7 7 - true (slope < 1)
0 1 1 2 3 4 5 4 3 3 11 10 9 8 7 7 - elevations (slope 1)

The input [0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 11, 10, 9, 8, 7, 7] will return true because the true summit is tall enough to be seen from the first position. However, if the value 11 is instead a 9, the true summit will be obscured by the value 1 at the second index. The value 1 then becomes a false summit!

The function takes an array of elevations. The first elevation will be zero and is the position of the viewer. From there, the elevations at each position will potentially change and indicate the elevation at that point relative to the viewpoint. Return true if the highest visible point is the true summit.

 
[1,2,3,4] -> false (no false summit)
[1,4,2,3]  --> false
[1,4,2,2,2,5] -> true

     .
   . . 
   . .
   . .
x. . .
[1,4,5] -> 
Is there a false summit
true - xxxXxx <-
false - xxxxxxxxx

[1,3,5] - > is this false 

examples - 
 x
[3, 5, 7, 20, 10, 9, 12] => false? [20 is the tallest point - no false summit] 

                     /\
                    /  \
              /\   /    \
X ___________/  \ /      \

                      /\
                     /  \
   /\               /    \
X /  \_____________/      \

       _
  _   / \
x/ \_/   \_
  1 0  2  0

[1,2,5] - NOT false summit Pierre
[1,4,5] - false summit - Pierre/Christy/Mariah/Jessicafalse
[1,3,5] - NOT false summit false
[1, 2, 4, 5] => 4 is a false summit? true (Noor) 

[1,4,3,8] => false 
[0, 1, 4, 3, 9, 8] # => true summit
[1, 1, 1, 1, 5, 5, 12] => true (false summit)

[1,2,7,3,3,8]
true (false summit) - xx
false (no false summit) - 

[1, 2, 7, 3, 3, 20]
true (false summit) - 
false (no false summit) - xx

[2,1,6,1,1,11]
 ^
 

true (false summit) - 
false (no false summit) -

[1,4,5,9,8] -> false (true summit - Anthony)
       ^
 1/1 = 1
  4 / 2 = 2
  5 / 3 = less than 2

  highestSlope = 2
highestMountain = 5
highestMountainSlope = 1.6671.66

return highestSlope != highestMountainSlope
agree - xxxxxxxxxx
disagree - xxxxx

[1, 1, 1, 1, 1, 10]

                                   
                                  
                                 = =- -
                               
                               
                              /          \
                      | |    /            \
X ___________________/    \ /              \
   
2/10 = 1/5 = 0.2
3/20 = 0.15
*/ 

/*

'''
/*
You are standing at the foot of a mountain, looking up a peak and wondering if it is a false summit or not. A false summit is a visible highpoint that obscures the true summit from view. For example:
                              /
            / \             /
          /     \ _ _ _ _ /
        /
    _ /
X /
0 1 1 2 3 4 5 4 3 3 3 3 3 4 5 6 - heights
In this case, the person standing at the X is looking up at a peak 6 units away that is 5 units high. So even though there is a higher peak further back, it can't be seen because the false summit is in the way. So for input [0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 3, 3, 3, 4, 5, 6], the result should be false; you cannot see the true summit, because only the false summit is visible from the first position.
                    | \
                    |   \
                    |     \
                    |       _ _
                    |
                    |
                    |
            / \     |
          /     \ _ |
        /
    _ /
X /
0 1 1 2 3 4 5 4 3 3 9 10 9 8 7 7 - true (slope < 1)
0 1 1 2 3 4 5 4 3 3 11 10 9 8 7 7 - elevations (slope 1)

The input [0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 11, 10, 9, 8, 7, 7] will return true because the true summit is tall enough to be seen from the first position. However, if the value 11 is instead a 9, the true summit will be obscured by the value 1 at the second index. The value 1 then becomes a false summit!

The function takes an array of elevations. The first elevation will be zero and is the position of the viewer. From there, the elevations at each position will potentially change and indicate the elevation at that point relative to the viewpoint. Return true if the highest visible point is the true summit.

 
[1,2,3,4] -> false (no false summit)
[1,4,2,3]  --> false
[1,4,2,2,2,5] -> true

     .
   . . 
   . .
   . .
x. . .
[1,4,5] -> 
Is there a false summit
true - xxxXxx <-
false - xxxxxxxxx

[1,3,5] - > is this false 

examples - 
 x
[3, 5, 7, 20, 10, 9, 12] => false? [20 is the tallest point - no false summit] 

                     /\
                    /  \
              /\   /    \
X ___________/  \ /      \

                      /\
                     /  \
   /\               /    \
X /  \_____________/      \

       _
  _   / \
x/ \_/   \_
  1 0  2  0

[1,2,5] - NOT false summit Pierre
[1,4,5] - false summit - Pierre/Christy/Mariah/Jessicafalse
[1,3,5] - NOT false summit false
[1, 2, 4, 5] => 4 is a false summit? true (Noor) 

[1,4,3,8] => false 
[0, 1, 4, 3, 9, 8] # => true summit
[1, 1, 1, 1, 5, 5, 12] => true (false summit)

[1,2,7,3,3,8]
true (false summit) - xx
false (no false summit) - 

[1, 2, 7, 3, 3, 20]
true (false summit) - 
false (no false summit) - xx

[2,1,6,1,1,11]
 ^
 

true (false summit) - 
false (no false summit) -

[1,4,5,9,8] -> false (true summit - Anthony)
       ^
 1/1 = 1
  4 / 2 = 2
  5 / 3 = less than 2

  highestSlope = 2
highestMountain = 5
highestMountainSlope = 1.6671.66

return highestSlope != highestMountainSlope
agree - xxxxxxxxxx
disagree - xxxxx

[1, 1, 1, 1, 1, 10]

                                   
                                  
                                 = =- -
                               
                               
                              /          \
                      | |    /            \
X ___________________/    \ /              \
   
2/10 = 1/5 = 0.2
3/20 = 0.15
*/ 

/*

'''
# Anthony
def is_false_summit(mountains):
    highest_slope = 0
    highest_mountain_slope = 0
    highest_mountain = 0
    
    for index, mountain in enumerate(mountains, start=1):
        slope = mountain / index
        highest_slope = max(slope, highest_slope)                

        if mountain > highest_mountain:
            highest_mountain = mountain
            highest_mountain_slope = slope

    return highest_slope != highest_mountain_slope

# print(is_false_summit([]))

from typing import List

'''
return (condition) {
    return true
} else {
    return false
    }
'''
# Group 2 Ruqayaah, Hemant, Brent
def isFalseSummit(heights: List[int]) -> bool:
    highestSlope = float('-inf')
    highestMountain = float('-inf')
    highestMountainSlope = float('-inf')

    for i, mountain in enumerate(heights):
        highestSlope = max(highestSlope, mountain / (i + 1))
        if mountain > highestMountain:
            highestMountain = mountain
            highestMountainSlope = mountain / (i + 1)

    return highestSlope != highestMountainSlope

print(isFalseSummit([]), False)
print(isFalseSummit([1, 2, 3]), False)
print(isFalseSummit([1, 5, 3]), False)
print(isFalseSummit([1, 4, 2, 2, 2, 5]), True)
print(isFalseSummit([1, 4, 5, 9, 8]), False)

'''
Pierre, Christy, Mariah
function hasFalseSummit(elevations) {
  if (!elevations.length || elevations.length === 1) {
    return false;
  }

  let highestSlope = -Infinity;
  let highestMountain = elevations[0];
  let highestMountainSlope = -Infinity;
  
  for (let i = 0; i < elevations.length; i++) {
    const currSlope = elevations[i]/(i + 1);

    if (elevations[i] > highestMountain) {
      highestMountain = elevations[i];
      highestMountainSlope = currSlope;
    }
    highestSlope = Math.max(currSlope, highestSlope)
  }

  return highestMountainSlope !== highestSlope
}

Takeaways
- zuff: generate many inputs/outputs

- Pierre: When possible, even "harder" problems you can identify patterns that eliminate the need for comparing elements (e.g. a highestSoFar var)
- Hemant: always have a conversation with the interviewer exploring diff approaches and understanding problem space
- Don't force questions - Christian
- Anthony: You should aim to be able to answer any potential questions about input and output before moving forward on solutions. 
- Start from happy case  and make sure to fully indersatand the problem - Hasanain
- Christy - think what you intend to get out from each test case you wrote
- Harvey - Focus on asking questions that lead to a potential approach 
a-sking  
- Brent: Write many examples with expected output before running your code
- Mariah: Clarify assumptions you made
- Ruqayaah: Try very hard to really understand the relationship between the input and output.
'''
*/

