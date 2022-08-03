/*
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.

Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

*/


/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, color) {
    let rowLen = image.length; 
    let columnLen = image[0].length; 
    
    let startingNode = image[sr][sc]; 
    console.log("startingNode: ", startingNode)
    console.log("color: ", color);
    
    if (startingNode === color) return image; //if the color is already equal to the starting Node color, then no need to update the color
    
    /*
    
    2 2 2
    2 2 0
    2 0 1
    
    
    */
    
    //recursive case 
    function dfs (row, col) {
        console.log("dfs func start")
        console.log("image[row][col]: ", image[row][col])
        console.log("row: ", row)
        console.log("col ", col)
        console.log("startingNode: ", startingNode)
        console.log("image[row][col] === startingNode: ", image[row][col] === startingNode)
        if (image[row][col] === startingNode){
            image[row][col] = color;
        console.log("image[row][col]: ", image[row][col])   
        console.log("recursion start")
            if (row >= 1) {
                console.log("going up!")
                dfs(row - 1, col); 
            }
            if (row + 1 < rowLen) {
                console.log("going down!")
                dfs(row + 1, col)
            }
            if (col >= 1) {
                console.log("going left!")
                dfs(row, col - 1); 
            }
            if (col + 1 < columnLen) {
                console.log("going right!")
                dfs(row, col + 1);
            }
        console.log("recursion end")
        }
        console.log("dfs func end")
    }
    //same sr --> sc-- sc++ (zero ---- column)
    //same sc --> sr++ sr-- (zero ---- row)
    
    dfs(sr, sc);
    return image; 
};

/*
row: 3
column: 3

sr= 1
sc = 1

startingNode = 1

color = 2




*/