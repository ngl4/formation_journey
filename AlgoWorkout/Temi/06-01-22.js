/*
You are given a large array where the vast majority of the elements is zero. Create a class that can store these elements more space efficiently. Your class must have the following methods:


init(original) - you are passed in the original array
set(i, val) - set the value val at index i
get(i) - get the value at index i

Examples
array = init([0, 0, 1, 0 , 0, 0, 0, 2])
array.get(0) // returns 0
array.set(0, 3)
array.get(0) // returns 3
array.get(2) // returns 1
Function Signature
class SparseArray:
     init(original)
     set(i, val)
     get(i)

0 0 0 1 1 2 8

0--[0,1,2] -->0 
1--[3,4]
2--[2]

 


0 0 0 1 1 2 8

{
  3: 1
  4: 1
  5: 2
  6: 8
}

get(2) ----> check map for key ---- not present --- 0
get(4) ----> check map for key ---- present ---- value ---1
set(2, val) ----> map.put(2, val)
set(2, 0) ----> map.remove(2)


maxIndx = original.length

values as keys

init - array
create a variable to store the length 
iterate through the array 
if the value is not equal to zero, store in the map (key: index, value: value of the item)


Set:set(i, val) - set the value val at index i
1. If i is within the array bound and val is not equal to 0 
    i) store the index as key in hashmap and array value as the value(index: value)
 2.   If val==0 and the indrex exists then delete the key from hashmap



Getter: get(i) - get array value at index - array.get(0) // returns 0

1. If i is within the array bound 
    1) check if i is in the hashmap then return the value else return 0;
else 
return array out of bounds


Function Signature
class SparseArray:
     init(original)
     set(i, val)
     get(i)



get(2) ----> check map for key ---- not present --- 0
get(4) ----> check map for key ---- present ---- value ---1
set(2, val) ----> map.put(2, val)
set(2, 0) ----> map.remove(2)

*/
//const hashmap = new Map();

class SparseArray {
    constructor() {
      this.map = new Map();
      this.arrayLength = 0;
    }
  
    init(array) {
      this.arrayLength = array.length;
      for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) continue;
        this.map.set(i, array[i]);
      }
    }
    set(i, val) {
        if (i <= this.arrayLength) {
          this.map.set(i, val);
        }
        else {
          return null;
        }
      }
  
    //What we did in the session, but the extra if conditon is not necessary and it is redundant. It can be removed. 
    // set(i, val) {
    //   if (i <= this.arrayLength) {
    //     if (val == 0 && this.map.has(i)) {
    //       this.map.delete(i);
    //     }
    //     else if (val != 0) {
    //       this.map.set(i, val);
    //     }
    //     else {
    //       return null;
    //     }
    //   }
    // }
  
    get(i) {
      if (i < this.arrayLength) {
        return this.map.has(i) ? this.map.get(i) : 0;
      }
      else {
        return null
      }
    }
  }
  
  
// test cases
const test = new SparseArray();
test.init([0, 0, 1, 1, 2]);  //map
console.log(test.get(2)); //return 1
test.set(2, 0);
console.log(test.get(2)); //return 0
test.set(3, 2); 
console.log(test.get(3)); //return 2
console.log(test.get(0)); //return 0
console.log(test.get(4)) //return 2