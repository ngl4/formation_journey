// # You're given an array containing either '.', 'L', or 'R' values. 
// # These values represent a starting state of a row of dominoes. 
// # L means the domino has been pushed to the left. 
// # R means the domino has been pushed to the right. 

// # All elements to the left  of an L get pushed to the left. 
// # All elements to the right of an R get pushed to the right. 
// # If a domino is pushed in both directions simultaneously, it stays up.

// # Given the starting state array, return the updated array representing 
// # the final state of the dominos. 
// # All dominos should be L, R or . if it stays standing upright.

// # [R . L] => [R . L]
// # [R L] => [R L]
// # [R . .  L] => [R R L L]
// # [] => [] 
// # [R . . . ] => [R R . . ]
// # [L . . . ] => [L . . .]
// # [ . . . L ] => [ . . L L]
// # [ . ] => [ . ] 
// # [ . L] => [ L L ] 
// # [ R . ] => [ R R] 

// # iterate right to left 
// #   if curr + 1 is not "L" and curr is a "." and curr - 1 is R then update curr to R 
// # itereate from left to right
// #   if curr - 1 is not "R" and curr is a "." and curr + 1 is L then update to L 
// # time complexity O(2n) -> O(n) 
// # space complexity is O(1) 

// def finalDominosState(dominoesRow: list) -> list:

//     if not dominoesRow:
//         return dominoesRow 
    
//     if len(dominoesRow) == 2: 
//         if dominoesRow[0] == '.' and dominoesRow[1] == 'L':
//             return ['L', 'L'] 
//         elif dominoesRow[0] == 'R' and dominoesRow[1] == '.':
//             return ['R', 'R'] 
    
//     for idx in range(len(dominoesRow), -1 , -1):
//         if (idx + 1 < len(dominoesRow) and dominoesRow[idx+1] != 'L' and dominoesRow[idx] == '.' and idx - 1 >=0 and dominoesRow[idx-1] == 'R'):
//             dominoesRow[idx] = 'R'
//     for idx in range(len(dominoesRow)):
//         if (idx - 1 >= 0 and dominoesRow[idx-1] != 'R' and dominoesRow[idx] == '.' and idx + 1 < len(dominoesRow) and dominoesRow[idx+1] == 'L'):
//             dominoesRow[idx] = 'L'
//     return dominoesRow 


// # print(finalDominosState(['R', '.', 'L']), '[R . L]')
// # print(finalDominosState(['R', 'L']), '[R L]')
// # print(finalDominosState(['R','.', '.', '.', 'L']), '[R R . L L]')
// # print(finalDominosState([]), '[]')
// # print(finalDominosState(['R','.', '.','.']), '[R R . .]')
// # print(finalDominosState(['L','.', '.', '.']), '[L . . .]')
// # print(finalDominosState(['.','.', '.', 'L']), '[L L L L]')
// # print(finalDominosState(['.']), '[.]')

// # assert finalDominosState([".", "R" , ".", ".", ".", ".", "L", "."]) == [".", "R", "R", "R", "L",  "L", "L", "."]



// '''
// ->
// [".", "R" , ".", ".", ".", ".", "L", "."]
// [".", "R", "R", "R", "L",  "L", "L", "."] <= expected
//              ^
// [R . . . L 
// itereate from left to right
// check curr is R and curr + 1 is a '.' and curr + 2 is not L 

// '''

// def finalDominosState2(dominoesRow: list) -> list:

//     if not dominoesRow:
//         return dominoesRow 
    
//     if len(dominoesRow) == 2: 
//         if dominoesRow[0] == '.' and dominoesRow[1] == 'L':
//             return ['L', 'L'] 
//         elif dominoesRow[0] == 'R' and dominoesRow[1] == '.':
//             return ['R', 'R'] 
//     l = 0
//     r = len(dominoesRow) - 1 

//     while l < r: 
//         update_r = False 
//         update_l = False
//         if l+2 < len(dominoesRow) and dominoesRow[l] == 'R' and dominoesRow[l+1] == '.' and dominoesRow[l+2] != 'L':
//             update_r = True

        
//         if r-2 >= 0 and dominoesRow[r] == 'L' and dominoesRow[r-1] == '.' and dominoesRow[r-2] != 'R':
//             update_l = True
            
//         if update_r:
//             dominoesRow[l+1] = 'R'
//         if update_l:
//             dominoesRow[r-1] = 'L'

//         l += 1
//         r -=1
//     return dominoesRow 
// print(finalDominosState2([".", "R" , ".", ".", ".", ".", "L", "."]))
// assert finalDominosState2([".", "R" , ".", ".", ".", ".", "L", "."])==[".", "R", "R", "R", "L",  "L", "L", "."]

// '''
// ['.', 'R', 'R', '.', '.', 'L', 'L', '.']
//             l.             r

// '''