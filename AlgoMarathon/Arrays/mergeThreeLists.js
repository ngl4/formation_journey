/*
Algo: Merge 3 sorted lists (Easy)

Given three sorted arrays of integers, merge them into a single sorted list.
Examples

Input1: array1: [1, 2],   array2: [3, 4],   array3: [5, 6]
Output1: [1, 2, 3, 4, 5, 6]

Input2: array1: [1, 2, 10],   array2: [2, 9],   array3: [11]
Output2: [1, 2, 2, 9, 10, 11]

*/


function mergeThreeLists(array1, array2, array3) {
    //APPROACH #1: T: O(nlogn) S: O(1) 
    // return array1.concat(array2, array3).sort((a, b) => a - b); 
  
    //APPROACH #2: T: O(n) S: O(n)
    let i1 = 0, i2 = 0, i3 = 0;
    let output = [];
    while (i1 < array1.length || i2 < array2.length || i3 < array3.length) {
  
      let v1 = i1 < array1.length ? array1[i1] : Infinity; //only set to infinity when arr has no more items
      let v2 = i2 < array2.length ? array2[i2] : Infinity;
      let v3 = i3 < array3.length ? array3[i3] : Infinity;
  
      // console.log(v1, v2, v3); //1, 2, 11
  
      let min = Math.min(v1, v2, v3);
  
      // console.log(min); //1
  
      if (min == v1) {
        // console.log(i1); //0
        output.push(array1[i1++]); //pushing i1 first to the output array and then increment 
        // console.log(output); //[1]
        // console.log(i1); //1
      } else if (min == v2) {
        output.push(array2[i2++]);
      } else {
        output.push(array3[i3++]);
      }
    }
    return output;
  }
  
  console.log(mergeThreeLists([1, 2, 10], [2, 9], [11]), [1, 2, 2, 9, 10, 11]); 


  /*
  Progress Notes: 

  Approach#1: took me 4 mins to write out the solution 

  Approach#2: I spent around 10 mins on the problem and did not get anywhere. 
  I have looked up the solution and learn how it is solved and worked on understanding the problem. 
  And the pattern used. I am slightly close because I have thought of using a while loop and Math.min(), 
  but I have not been able to successfully write out the approach to the problem

  */