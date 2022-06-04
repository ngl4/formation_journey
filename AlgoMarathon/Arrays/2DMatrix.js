/*
Given a two dimensional array of integers, fold this array over a vertical axis, adding the numbers that meet. This means that in each row, the first and last numbers are added to become the first element in the output, and the second and second to last become the second element, etc. For example:

3 7 2 4
8 1 9 5
becomes

7 9
13 10
because

[execution time limit] 4 seconds (js)
[input] array.array.integer matrix
[output] array.array.integer


Examples:

Input:
matrix:
[[1,2], 
 [3,4]]

Expected Output:
[[3], 
 [7]]

Input: 
matrix:
[[1], 
 [2]]

Expected Output:
[[1], 
 [2]]

*/
//Attempt#3 - solving the problem again without guidance using two pointers

function solution(matrix) {
    let res = []; 
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i]; 
        let resRow = []; 
        for (let k = 0, j = row.length - 1; k <= j; k++, j--) {
            if (k === j) {
                resRow.push(row[k]); 
            }else {
                resRow.push(row[k] + row[j]); 
            }
        }
        res.push(resRow); 
    }
    return res; 
}


//Attempt#2 (learning the pattern) 

/* 04/24/2022 
Reviewed Arthur Damm's gudiance (see 04/23/2022) and reworked on the problem 
and added a line by line explanation on the problem
*/

//Solution: 
function solution(matrix) {
    let res = []; 
    for (let i = 0; i < matrix.length; i++) {
        let row = [];
        for (let j = 0, k = matrix[i].length - 1; j <= k; j++, k--) { 
            if (j === k) row.push(matrix[i][j]); 
            else row.push(matrix[i][j] + matrix[i][k]);
        }
        res.push(row);
    }
    return res; 
  }
  
  //Line-by-Line Explanation: 
  function solution(matrix) {
    let res = []; 
    // console.log("res begin: ", res); 
  
    for (let i = 0; i < matrix.length; i++) {
        let row = [];
        // console.log("row created: ", row); 
  
        for (let j = 0, k = matrix[i].length - 1; j <= k; j++, k--) { //setting two pointers j and k, j starts at the beginning of the inner array and k starts at the end of the inner array; the loop will keep running as long as j pointer is less than or equal to k pointer; increment j pointer to move it to the right (next) index (ie, [j -> ]) and decrement the k to move the pointer to the left (next) index (ie, [ <- k])
  
            if (j === k) row.push(matrix[i][j]); //handle odd
            else row.push(matrix[i][j] + matrix[i][k]); //handle even (beware j and k)
            // console.log("j: ", j, "k: ", k); 
  
        }//end of inner array iteration 
  
        // console.log("row with sum: ", row); 
        res.push(row);
        // console.log("row pushed to res: ", res); 
  
    }//end of outer array iteration 
  
    // console.log("res output: ", res); 
    return res; 
  }
  
  //Test cases
  console.log(solution([[], []]), "Expected output: ", [[], []]); //empty case
  console.log(solution([[1], [2]]), "Expected output: ", [[1], [2]]); //odd
  console.log(solution([[1, 2], [3, 4]]), "Expected output: ", [[3], [7]]); //even 
  console.log(solution([[1, 2, 3], [2, 4, 6]]), "Expected output: ", [[4, 2], [8, 4]]); //odd
  console.log(solution([[3, 7, 2, 4], [8, 1, 9, 5]]), "Expected output: ", [[7, 9], [13, 10]]); //even
  


/*______________________
04/23/2022

I have sent this problem in the Mattermost channel and got a response from Fellow Arthur Damm: 

Hi Cindy! So it looks like you are adding up consecutive elements in your inner loop, 
but you want to add up first + last, 2nd-first + 2nd-last, and so on... 
Those happen to be the same in a 2 element row but not for any other size.

The easiest way is that for each row, you have 2 pointers j, k with j starting at beginning and k starting at end, 
and in each iteration you add them up, then move j forward and k back.

Also note they want a new matrix back, so you'll have to push a row array onto res, 
not just single elements (which would make res a 1-D array in the end)

The only question is what to do about the middle element if the row is odd-numbered. 
They may not want it doubled, in which case I would add an if(j == k) condition in the loop 
and only push the element at j, not at j + k, in that one case. 
But I would have to look at what the test cases wanted, it could go either way. 

function solution(matrix) {
    let res = []; 
    for (let i = 0; i < matrix.length; i++) {
        let row = [];
        for (let j = 0, k = matrix[i].length - 1; j <= k; j++, k--) {
                row.push([matrix[i][j] + matrix[i][k]);
            }
        }
        res.push(row);
    }
    return res; 
}
________________________*/


//ATTEMPT #1 (30mins - Failed)
function solution(matrix) {
    let res = []; 
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i].length === 1) {
                // res.push([matrix[i][j] + matrix[i][j]]);
            }
            if (matrix[i].length > 2 && matrix[i][j + 1] !== undefined) {
                // console.log([matrix[i][j] + matrix[i][j + 1]]); 
                res.push([matrix[i][j] + matrix[i][j + 1]]);
            }
        } 
    }
    // console.log(res); 
    return res; 
}

/*
Reflection: I am pretty close but I feel like I need to stop working on it once I get to the 30 mins mark. 

Still get stuck at how to push the added values into the res array 

Future Attempts: 
- Double check with other fellows to see how they would approach this problem 
- Rework on this problem again and solve it under 20 mins
*/


