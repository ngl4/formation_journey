// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
/*
head: [1]
f: 2
target: 1
Expected Output:
[1]

Input:
head: [4, 1, 2, 1, 3, 2, 2]
f: 1
target: 1
Expected Output:
[4, 2, 1, 3, 2, 2]


*/
function removeFrequencyTargetLL(head, f, target) {
    let sentinel = new ListNode(0); 
    sentinel.next = head; 
    let curr = sentinel; 
    let count = 0; //inc count when removed target elem from list
    let LLSize = 0; 
    let temp = head; 
    while (temp) {
        LLSize++; 
        temp = temp.next; 
    }
    console.log(LLSize); 
    while (curr && curr.next) {
        if (curr.next.value === target) {
            if (count < f && f <= LLSize) {
                curr.next = curr.next.next; 
                count++; 
            }else {
                curr = curr.next; 
            }
        }else {
            curr= curr.next; 
        }
    }
    return sentinel.next; 
}
