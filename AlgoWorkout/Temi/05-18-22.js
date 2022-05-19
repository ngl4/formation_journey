/*

Given an array of 0s and 1s, what is the minimum number of moves needed to group all 0s on one side and 1s on the other side. A "move" is a swap between any adjacent positions.

Examples
[0, 1] => 0, no swaps are needed since they are already grouped.
[0, 1, 0] => 1, swap 1 with either 0 to group them.
[1, 0, 1, 1, 0] => 2, swap 0 with 1 then swap it again with the next 1.
--> [1, 1, 1, 0, 0]
 
[1, 0, 1, 1, 0]
    p
 
[0, 1, 1, 1, 0]   count = 1
 p

[0, 1, 1, 1, 0]   count = 1
    p
       p 
          p 
             p

[0, 1, 1, 0, 1]   count = 2
          p
       
[0, 1, 0, 1, 1]   count = 3
       p

[0, 0, 1, 1, 1]   count = 4
    p


[1, 0, 1, 1, 0]
l
    f
work to get 0 at index 1 is: 1 - (-1) - 1 = 1
add this work to total count = 1
increment l by 1

[1, 0, 1, 1, 0]
 l
             f

work to get 0 at index 1 is: 4 - (0) - 1 = 3
add this work to total count = 4
increment l by 1

[1, 0, 1, 1, 0]
    l
             f


Function Signature
function minSwaps(input: Array): number

APPROACH
count 1
[0, 0, 1, 0]
p1         p2     

 counter:1
[0, 1, 1, 1, 0]
    p1 p2              
 counter:1
[0, 1, 1, 1, 0]
          p1 p2

 counter:2
[0, 1, 1, 0, 1]
          p1 p2              


value = 0
swap = 1
[0, 0, 1, 1, 0]         
       f
c      

    p2
[0, 1, 1, 1, 9]

Compare in either directions:
- 0s on the left
  - 
- 1s on the left
*/