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