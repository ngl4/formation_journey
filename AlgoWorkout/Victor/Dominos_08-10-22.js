/*
You're given an array containing either '.', 'L', or 'R' values. These values represent a starting state of a row of dominoes. L means the domino has been pushed to the left. R means the domino has been pushed to the right. All elements to the left  of an L get pushed to the left and all elements to the right of an R get pushed to the right. If a domino is pushed in both directions simultaneously, it stays up.

Given the starting state array, return the updated array representing the final state of the dominos. All dominos should be L, R or . if it stays standing upright.

Examples
[., L, ., R, .] -> [L, L, ., R, R]
[., R, ., ., L, .] -> [., R, R, L, L, .]
[., R, ., ., ., L, .] -> [., R, R, .,  L, L, .]
[., R, ., L, ., L, ., R, .] -> [., R, ., L, L, L, ., R,R]



[., L, ., R, .] -> [L, L, ., R, R]
[., L, ., R, ., ., ., L]

[., R, ., R, ., ., ., L] -> [., R, R, R, R, ., L, L]

[., L, ., L, ., ., ., R] -> [L, L, L, L, ., ., ., R] 
1. go to the right
  - encounter R, turn . into R
2. go the left
    same thing

cases:
  _ - L -> left
  R - _ -> right
  R - L -> meet in middle
  L - R -> nothing
  R - R -> everything in between goes right
  L - L -> everything in between goes left

  . look on left and right sides
  R . L -> stay
  R . -> . turns into R
  . L -> . turns into L

  [., R, ., ., ., L, .] -> [., R, R, .,  L, L, .]
 
  [., R, R, ., L, L, L, L, L]
                           l  r


"""
R="R"
L="L"
d="."

'''
 l
    r
[., R, ., ., L, .]
pseudocode
l and r initialized
r moves until it meets R or L
while r not at end of array:
    move r until it meets R or L
    while: 
x_ - R -> no op
xL - _ -> no op        
x_ - L -> left
xR - _ -> right
xR - L -> meet in middle
xL - R -> nothing (no op)
xR - R -> everything in between goes right
xL - L -> everything in between goes left

    l
       r
   [L, R, ., ., L, .]
          l1           
             r1
   [., R, ., ., L, .]
'''
# Jiyoon
def dominoes(arr):
    l = r = -1
    while r < len(arr):
        
        while arr[r] not in [L, R] and r < len(arr):
            r += 1
        
        # no ops
        if arr[l] == d and arr[r] == R or arr[l] == L and arr[r] == d or arr[l] == L and arr[r] == R:
            l = r
            r += 1
            continue
        # R - R or L - L
        if arr[l] == arr[r] == R or arr[l] == arr[r] == L:
            while l != r:
                arr[l + 1] = arr[r]
                l += 1
        # _ - L
        if arr[l] == d and arr[r] == L or l == -1 and arr[r] == L:
            while l != r:
                arr[l] = L
                l += 1
        # R - _
        if arr[l] == R and arr[r] == d or arr[l] == R and r == len(arr) - 1:
            while l != r:
                arr[l + 1] = R
                l += 1
        
        # R - L -> meet in middle
        if arr[l] == R and arr[r] == L:
            l1 = l + 1
            r1 = r - 1
            while l1 != r1:
                arr[l1] = arr[l]
                l1 += 1
                arr[r1] = arr[r]
                r1 -= 1
            l = r
        r += 1
#  l 
#     r
# [L, L, ., R, .] -> [L, L, ., R, R]
d1 = [d, L, d, R, d]
print(dominoes(d1), [L, L, d, R, R])





#Cindy
'''
function dominoes(input) {
    if (input.length < 1) return input;
    
    let l = 0;
    let r = 0;

    while (r < input.length) {
        //find a R or L other than a '.' 
            //input[l] === R && input[r] === R
            //input[l] === L && input[r] === L
            
        while(input[r] === '.' && l !== R) {
            if (input[r] === 'R') {
                l = r; 
            }
            if (input[r] === 'L') {
                input[l] = 'L'
                l = r;                
            }
            r++; 
        }

        
    }

    //input[l]=== R && input[r] === L 

        //Handle odd window: l === r (stay the same)
         
    //input[l] === L && input[r] === R
    
        //Handle odd window: l === r (stay the same)



    
   return input; 
}


'''






















# Brent
# R, L, d
# Examples
# [., L, ., R, .] -> [L, L, ., R, R]
# [., R, ., ., L, .] -> [., R, R, L, L, .]
# [., R, ., ., ., L, .] -> [., R, R, .,  L, L, .]
# [., R, ., L, ., L, ., R, .] -> [., R, ., L, L, L, ., R,R]

# X   _ - L -> left
# X  R - _ -> right
# X  R - L -> meet in middle
#   L - R -> nothing
# X  R - R -> everything in between goes right
# X  L - L -> everything in between goes left

''' example 2
  [., R, ., ., L, .]
  [., R, R, L, L, .]
                     l
                     r

example 3
  [., R, ., ., ., L, .]
  [., R, R, ., L, L, .]
                        l 
                        r
'''

def dominoes_brent(arr):
    left = -1
    right = 0
    while left < len(arr) and right < len(arr):
        while right < len(arr) and arr[right] == d:
            right += 1
        if right < len(arr) and arr[right] == L:
            if left >= 0 and arr[left] == R:
                while (right - left) > 2:
                    left += 1
                    right -= 1
                    arr[left] = R
                    arr[right] = L
            elif left >= 0:
                while left < right:
                    left += 1
                    arr[left] = L
        elif left >= 0 and arr[left] == R:
            while left < right:
                left += 1
                arr[left] = R
        left = right
        right += 1
    return arr

print(dominoes_brent([d, R, d, d, L, d]), [d, R, R, L, L, d])













# Issa
#   _ - L -> left
#   R - _ -> right
#   R - L -> meet in middle
#   L - R -> nothing
#   R - R -> everything in between goes right
#   L - L -> everything in between goes left
def dominos(board):
    left = -1
    right = 0
    while right < len(board):
        while board[right]== '.':
            right += 1
        if board[right] == 'L' and (left == -1 or board[left] == 'L'):
            for i in range(left +1, right):
                board[i] = 'L'
            left = right
            continue

        if board[left] == 'R' and board[right] == 'R':
            for i in range(left + 1, right):
                board[i] = 'R'  
            left = right
            continue
        
        if (board[right] == 'R' and (left == -1 or board[left] == '.')) or (board[left] == 'L' and (board[right] == '.')):
            left = right
            continue
        
        if board[left]=='L' and board[right]=='R':
            left = right
            continue
        
        if board[left] == 'R' and board[right]=='L':
            while left+1 < right-1:
                board[left+1] = 'R'
                board[right-1] = 'L'
                left += 1
                right -= 1
            left = right
            continue
    return board
                    
            
        
        
        
            
        
            
        
        
*/
