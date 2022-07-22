'''
Tony and Daniel Office hours on Algo Marathon 

Approach the problem in High level Perspective First 
'''


def rotate(matrix):

    # YES: iterate through the top left corners of the enclosing boxes
    # YES: stop when you're at or past the center of the square matrix
    # NO: loop from 0 to the center
    nesting = 0
    while nesting <= len(matrix)//2:

        for col in range(nesting, len(matrix) - nesting - 1):
            # do one musical chairs
            musicalChairs(matrix, nesting, col)

        nesting += 1
    


    
def musicalChairs(matrix, nesting, col): # indexing is tricky
    temp = matrix[nesting][col]
    matrix[nesting][col] = matrix[nesting][len(matrix)-col-1]
    matrix[nesting][len(matrix)-col-1] = matrix[len(matrix)-nesting-1][len(matrix)-col-1]
    matrix[len(matrix)-nesting-1][len(matrix)-col-1] = matrix[len(matrix)-nesting-1][col]
    matrix[len(matrix)-nesting-1][col] = temp


matrix = [[1,2,3],[4,5,6],[7,8,9]]
print("Pre-rotation")
print(matrix)
print("\n\nPost-rotation")
rotate(matrix)
print(matrix[0])
print(matrix[1])
print(matrix[2])

'''

store the value at [0][0] then
[0][0] gets the value in 
[0][2] gets the value in
[2][2] gets the value in
[2][0]

now we have to do this for all the elements in the row up to length-2
now we go down and right once [1][1], repeat for all elements in the row up to length-3
stop when you're at or past the center of the square matrix

# Mike's algorithm aka 4 way musical chairs
temp = a
a = b
b = c
c = d
d = a

Input:
 1 2 3 1
 3 5 5 2
 2 5 5 3
 1 3 2 1

Output:
 1 2 3 1
 3 5 5 2
 2 5 5 3
 1 3 2 1

'''

# Not exactly but close: https://leetcode.com/problems/valid-sudoku/
# Each row must contain the digits 1-9 without repetition.
# Each column must contain the digits 1-9 without repetition.
# Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

# n = number of rows/col
# Time Complexity: O(nlogn)
# O(n*n*n) = O(n^3)


# n^2 + n^2 + n^2 = 3n^2 = O(n^2) where n is the number of rows/cols
# O(r*c) where r is the number of rows and c is the number of cols
# O(t) where t is the number of cells
# O(1) because the size is always 81 cells



# Agree    |
# Disagree | X

"""
Complexity:
A: O(log N) |
B: O(N)     |
C: O(N^2)   |x
D: O(1)     | ----- WINNER!!!!!! 😲
E: O(N^3)   |
"""

def isValidSudoku(matrix):
    return areRowsValid(matrix) \
        and areColsValid(matrix) \
        and areCellsValid(matrix)

def areRowsValid(matrix):
    pass

def areColsValid(matrix):
    pass

def areCellsValid(matrix):
    pass