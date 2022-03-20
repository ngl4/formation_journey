/*
Q. Given an unsorted array, perform insertion sort in ascending order.

Examples:
• Given an array: [1] // returns [1]
• Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]

*/

function insertionSort(array) {

  }
  
  // Test Cases
  console.log(insertionSort([])) // []
  console.log(insertionSort([1])) // [1]
  console.log(insertionSort([3, 1, 2, 4])) // [1, 2, 3, 4]
  // console.log(insertionSort([-10, 1, 3, 8, -13, 32, 9, 5])) // [-13, -10, 1, 3, 5, 8, 9, 32]


//----------------------------------------------------------------------------------

//Approaches: 

/*

  3 1 2 4 0
          i
          k
j   
  0 1 2 3 4

1 2 3 4

0 1 2 3 4 5

Time: O(N^2)

*/

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      let key = array[i];
    //   console.log("Key: ", key); 
      let j = i - 1;
    //   console.log("i:", i); 
    //   console.log("j:", j); 
      while (j >= 0 && array[j] > key) {
          array[j + 1] = array[j];
        //   console.log("array[j]:", array[j]); 
        //   console.log("array[j + 1]:", array[j + 1]); 
          j = j - 1;
        //   console.log("j:", j); 
      }
      array[j + 1] = key;
    //   console.log("j:", j); 
    //   console.log("array[j + 1]:", array[j + 1]); 
  }
//   console.log("array:", array);
  return array;
  }


/* Another Approach learned from Pair Programmer */ 

/*  Pair Learning Solution from Kedir using Java*/
/*
class Solution {
  public static void main(String[] args) {
    int[]input = new int[] {};
    insertionSort(input);
    System.out.println(Arrays.toString(input));
    
  }

  public static void insertionSort(int[]arr){
    if(arr.length<=1){
      return;
    }
  for(int i=0 ; i<arr.length ; i++){
    int j = i;
    while(j>0 && arr[j]<arr[j-1]){
        int temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
        j--;
    }
  }

  }
}
*/
