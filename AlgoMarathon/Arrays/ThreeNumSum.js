  /*  07-03-2022
Q. Given an array of integers, find all unique triplets (a, b, c) in the array such that their sum equals zero (a + b + c = 0).

For test purposes, you must return one sorted triplet with the smallest overall value
Examples:

Given an array: [1, 2, 0] returns: []
Given an array: [-1, 0, 1, 0, 1] returns: [[-1, 0, 1]]
Note: actual return output: [-1,0,1] since there is only one triplet
Given an array: [-5, -1, 0, 1, 4, -1] returns: [[-5,1,4], [-1,0,1]]
Note: actual return output: [-5,1,4] since -5 is the smallest overall value

Input:
array: [1, -1]
Expected Output:
[]

Input:
array: [1, -1, 0]
Expected Output:
[-1, 0, 1]

Input:
array: [-5, -1, 0, 1, 4, -1]
Expected Output:
[-5, 1, 4]


High level Approach: 
Iterate through the given array and find the sum of three values that add up to the target value zero. Return all the triplets in the output. 


Approach (using 3 pointers): 
- set up a result array to store 
- set up three pointers i, j, k
- i and j pointers are moving together, whereas the k pointer will be iterate through the array from j + 1 to the last index of the array for every incrementation in i and j 
    - we will be summing up all the values where the pointers are pointed to and compare with the target value zero
    - If the sum is equal to the target zero, 
      - If the result array is not empty, compare the index i value on the result array with the current index i value, if the current index i value is larger than the one in the result array, replace the result array[0] with the current one. 

      - It it is res array is empty: 
        - we will push the values up in the order of i, j, k to the result array.   
At the end return the result array 

*/

function threeSum(input) {
    let res = [];
  
    for (let i = 0; i < input.length - 2; i++) {
      for (let j = i + 1, k = j + 1; k < input.length; j++, k++){
        let sum = input[i] + input[j] + input[k]; 
        if (sum === 0) {
          if(res.length > 0) {
            if (res[0][0] > input[i]) {
              res.pop(); 
              res.push([input[i], input[j], input[k]]); 
            }
          }else {
            res.push([input[i], input[j], input[k]]); 
          }
        }
      }
    }
  
    return res; 
  }
  
  console.log(threeSum([-5, -1, 0, 1, 4, -1]))
  


/*
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given an array of integers, find all unique triplets (a, b, c) 
in the array such that their sum equals zero (a + b + c = 0).

Examples:
TargetSum: 0 for the below 3 examples: 
• Given an array: [1, 2, 0] returns: []
• Given an array: [-1, 0, 1, 0, 1] returns: [[-1, 0, 1]]
• Given an array: [-5, -1, 0, 1, 4, -1] returns: [[-5,1,4], [-1,0,1]]

More Examples: 
input: [12, 3, 1, 2, -6, 5, -8, 6]
targetSum: 0
output: 
[
  [-8, 2, 6],
  [-8, 3, 5],
  [-6, 1, 5],
]
*/ 


//ATTEMPT #1 - FAilED - Not entirely sure how to approach the problem 

/*

Visualization (no success)

result array: [] - only if the three numbers match up with the target sum then it will be added to the result array 

targetSum matched array: [] - this will be pushed to the result array, will be clear every iteration

12, 3, 1, 2, -6, 5, -8, 6
i    
                        j
c

-8, -6, 1, 2, 3, 5, 6, 12  
i    
                    j
c

*/

function tns(input, targetSum) {
    // Write your code here.
    input.sort((a, b) => a - b);  //only sort the problem
    console.log(input);  
    return []
  }

/*
Progress notes: 

There are a few mins at the beginning which I organize and document down the problem and add test cases

20mins - approaching and understanding the problem and going through some hints to see if I solve the problem, but I feel like I am still not entirely sure 

I have mainly spent the time to do visualization and I feel like what I am thinking is definitely getting close to the two-pointer solution found in the AlgoExpert

27mins - Going through the video explanation of Algo Expert 

*/
  
  // Test Cases
  test.startProblem("Three Number Sum")
  test.testForArrays([], tns([], 0), 1)
  test.testForArrays([[-1, 0, 1]], tns([-1, 0, 1], 0), 2)
  test.testForArrays([[-1, 0, 1]], tns([-1, -1, 1, 1, 0, 0], 0), 3)
  test.testMatchAny([[-1, 0, 1], [-5, 1, 4]], tns([-5, -1, 0, 1, 4, -1], 0), 4)
  test.testForArrays([
    [-8, 2, 6],
    [-8, 3, 5],
    [-6, 1, 5],
  ], tns([12, 3, 1, 2, -6, 5, -8, 6], 0), 5)
  test.endProblem()

/*----------------------------------------------------------
Test Class 
ListNode Class (Linked List)
TreeNode Class (Binary Tree)
------------------------------------------------------------*/
class Test {
    constructor(test_name = "", printTests = false) {
        this.total_count = 0
        this.problem_count = 0
        this.total_score = 0
        this.problem_score = 0
        this.current_problem = ""
        this.failed_problems = []
        console.log(`Beginning Test: ${test_name}`)
    }
        
    // Test Helpers
    test(expected_outcome, outcome, case_num) {
        if (expected_outcome == outcome) {
            return this.passed(case_num)
        }
        return this.failed(case_num)
    }
  
    testMultipleCases(possible_outcomes, outcome, case_num) {
        var possible_outcome
        for (possible_outcome of possible_outcomes) {
            if (this.compareArrays(possible_outcome, outcome)) {
                return this.passed(case_num)
            }
        }
        return this.failed(case_num)
    }
  
    testForArrays(expected_outcome, outcome, case_num) {
        if (this.compareArrays(expected_outcome, outcome)) {
            return this.passed(case_num)
        }
        return this.failed(case_num)
    }
  
    compareArrays(array1, array2) {
        return array1.length === array2.length && array1.filter((a, i) => Array.isArray(a) ? !this.compareArrays(a, array2[i]) : array2[i] !== a).length === 0;
    }
  
    testMatchAny(expected_outcome, outcome, case_num) {
        if (this.isEqual(expected_outcome, outcome)) {
            return this.passed(case_num)
        }
        return this.failed(case_num)
    }
  
    isEqual(array1, array2) {
        var sortedArr1 = []
        var sortedArr2 = []
        for (var a1 of array1) {
            sortedArr1.push(a1.sort())
        }
        for (var a2 of array2) {
            sortedArr2.push(a2.sort())
        }
        return this.compareArrays(sortedArr1.sort(), sortedArr2.sort())
    }  
  
    // Test Logistics
    startProblem(problemName) {
        this.current_problem = problemName
        this.problem_score = 0
        this.problem_count = 0
        this.failed_problems = []
    }
    passed(case_num) {
        this.total_score += 1
        this.problem_score += 1
        this.problem_count += 1
        this.total_count += 1
    }
    failed(case_num) {
        this.problem_count += 1
        this.total_count += 1
        this.failed_problems.push(case_num)
    }
    endProblem() {
        console.log(`\n   ${this.current_problem} Score: ${this.problem_score} / ${this.problem_count}`)
        if (this.failed_problems.length > 0) {
            console.log(`   ** Failed Test Cases: ${this.failed_problems}`)
        }
    }
    printFinal() {
        console.log(`\nTotal Score: ${this.total_score} / ${this.total_count}`)
    }
  }
        
  var test = new Test("")
  
  class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
  }
  
  function arrayify(head) {
    var ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.value)
        ptr = ptr.next
    }
    return array
  }
  
  class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
  }
  
  function arrayifyTree(root) {
    if (!root) { return [] }
    var queue = []
    var array = []
    queue.push(root)
    while (queue.length !== 0) {
        var node = queue.shift()
        array.push(node.value)
        if (node.left) { queue.push(node.left) }
        if (node.right) { queue.push(node.right) }
    }
    return array
  }