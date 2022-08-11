/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1


Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

*/

/*
High level Understanding and Breaking down the problem in English USING DFS RECURSIVE APPROACH: 
- Iterate through the entire grid 
- If we encounter '1', we increment the counter by 1 since it is the first island we found 
- Then you want to explore how big this island is 
- You will then use DFS recursion method to search in four different directions for all the lands assoicated with the island (top, down, left, and right)
- Make a mark once we have visited the land (instead of creating a separate visited variable, you can use flip it to '0' as an indicator that the land is already visited - based on this problem, we do not need to keep track of how how visited land)
- return the number of islands (based on the counter)
___

Time: O(r * c) number of elements on each row and each column of the input array 
Space: O(r * c) Using recursive call stack will take linear space for both visited rows and columns 

*/

var numIslands = function(grid) {
    let count = 0; 
    let rowLen = grid.length; 
    let colLen = grid[0].length; 
    
    function dfs(row, col, grid) {
        if (row < 0 || col < 0 || row >= rowLen || col >= colLen || grid[row][col] === '0') {
            return;
        }
        grid[row][col] = '0'
        dfs(row, col + 1, grid); 
        dfs(row + 1, col, grid); 
        dfs(row, col - 1, grid); 
        dfs(row - 1, col, grid);             
    }
    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (grid[i][j] === '1') {
                count++;   
                dfs(i, j, grid); 
            }
            
        }
    }
    return count; 
};