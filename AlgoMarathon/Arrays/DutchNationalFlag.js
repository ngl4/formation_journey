/**
  ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
  ✏️ Description
  ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
  Q. Given an array of 0s, 1s, and 2s, sort them in-place in ascending order.
  
  Examples:
  • Given an array: [2, 1] // returns [1, 2]
  • Given an array: [0, 2, 1, 0, 1, 2] // returns [0, 0, 1, 1, 2, 2]

  
   */

  //ATTEMPT #1 (unsure): Walking through the problem with Alexis!!


  /*
  Visualization: 
  
  0, 0, 1, 1, 2, 2
  ^ (do not move at all)
     ^ (only move when it is swapping with numbers on the right side)
        ^ (move every iteration)
  
  Approaches: 
  - .sort() method. Time: O(nlogn) 
  -  bubble sort method. Time: O(n^2)
  -  one pass Time: O(n)

  */
  
  function dnf(input) {

    // ATTEMPT#1 : 3 POINTERS - FAILED 
    // let movableP2 = false; 
    // let p1 = input[0]; 
    // let p2 = input[1];   
    // let inc = 1; 
    // for(let i = 2; i < input.length; i++) {
    //   let p3 = input[i]; 
    //   if (p2 < p1) {
    //     [p2, p1] = [p1, p2];
    //     movableP2 = true; 
    //   }
    //   if (p3 < p2) {
    //     [p3, p2] = [p2, p3];
    //   }
    //   if (movableP2) {
    //     inc += 1; 
    //     p2 = input[inc]; 
    //     movableP2 = false; 
    //   }
    // }
    // return input;
  
    // ATTEMPT#1: BUBBLE SORT METHOD - PASSED
    // for(let i = 0; i < input.length; i++){
    //   for (let j = 0; j < input.length; j++) {
    //     const curVal = input[j]; 
    //     const nextVal = input[j+1]; 
    //     if (nextVal < curVal) {
    //       [input[j], input[j+1]]=[nextVal, curVal];
    //     }
    //   }
    // }
    // return input; 
  }
  
  // Test Cases
  test.startProblem("Dutch National Flag")
  var array1 = []; dnf(array1)
  var array2 = [2, 1, 1, 0]; dnf(array2)
  var array3 = [0, 2, 1, 0, 1, 2]; dnf(array3)
  test.testForArrays([], array1, 1)
  test.testForArrays([0, 1, 1, 2], array2, 2)
  test.testForArrays([0, 0, 1, 1, 2, 2], array3, 3)
  test.endProblem()


  /*
  PROGRESS NOTE

  14m - basic understanding the prob, visualization, using bubble sort to solve the problem first

  16m 
  - trying to use a 3 pointer approach 
  - working on the visualization for around 5-10mins 
  - Then use the rest of the code to code out the solution 
  - It is not successful 

  Reflection: 
  - I am grateful that Alexis is able to work together with me on this problem 
  - She has given me some hints on how I could approach this problem ~ using 3 pointers 
  
  Future Attempts: 
  Walk through the 3 commons solutions to this problem:
• Sort the array as just a normal unsorted array. 
• Two passes:
    First pass: count the number of 0s, 1s and 2s. 
    Second pass: overwrite the original array with the correct number of 0s, then 1s, then 2s.

• One pass (read about this on Leetcode)

  */





/*-----------

Test Cases

-------------*/

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
  
  