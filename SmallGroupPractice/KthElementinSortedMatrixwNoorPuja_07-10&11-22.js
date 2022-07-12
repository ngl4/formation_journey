/*
https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/ 

 3 4 5 6 7 8 9 10 11 2//
4 5 1 6 8 7 10 11 2 3

11 10 9 8 7 6 1 4 3 2 5  Top 3rd smallest elements

MaxHeap: 11,10,9
         10,9,8
         9,8,7
         8,7,6
         7,6,1
         6,4,1
         4,3,1
         3,1,2 


MinHeap: smallest element at it Top
1......8,9,10,11(o(n))
9,10,11 O(k)--push k elements 
8,10,11
7,10,11
6,10,11
1,10,11
4,10,11
3,10,11
2,10,11
5,10,11


O(k)

maxHeap:    minHeap:1,4,5

(a,b)->a-b>0?return a;
        
    

Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

n == matrix.length == matrix[i].length
All the rows and columns of matrix are guaranteed to be sorted in non-decreasing order.

You must find a solution with a memory complexity better than O(n2).
1   5   9   
2   20  21   k=5. 20;k=7 21
12  22  23



/*
class MyHeapNode {

  int row;
  int column;
  int value;

  public MyHeapNode(int v, int r, int c) {
    this.value = v;
    this.row = r;
    this.column = c;
  }

  public int getValue() {
    return this.value;
  }

  public int getRow() {
    return this.row;
  }

  public int getColumn() {
    return this.column;
  }
}


*/
/*
1   5   9   
2   20  21   
12  22  23

int[] arr=new int[3]
arr[0]=x
arr[1]=y
arr[2]=val



row:m
col:N
m*n:O(m*N)
n:M*N O(n)
n:O(n*n)=>O(n^2)

1,2,3,4
1,2,0: 0,1,2. O(1)

class Solution { // 14 ms, faster than 55.67%
    public int kthSmallest(int[][] matrix, int k) {
        int m = matrix.length, n = matrix[0].length; // For general, the matrix need not be a square
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((o1, o2) -> Integer.compare(o2, o1));
        for (int r = 0; r < m; ++r) {
            for (int c = 0; c < n; ++c) { k=3
                maxHeap.offer(matrix[r][c]); 9,5,2,1
                if (maxHeap.size() > k) maxHeap.poll();O(1)
                ////O(M*N)log k
            }
        }
        return maxHeap.poll();
    }
}

public class Solution {
    public int kthSmallest(int[][] matrix, int k) {//n:3 k:4 ans:9
        int n = matrix.length;//n:3
        PriorityQueue<Tuple> pq = new PriorityQueue<Tuple>();
        for(int j = 0; j <= n-1; j++)//j=0.   j=1   j=2    j<=2.  
         pq.offer(new Tuple(0, j, matrix[0][j]));,pq(0,1,5),pq(0,2,9)
        for(int i = 0; i < k-1; i++) {i=0. i<=3
            Tuple t = pq.poll(); T=0,0,1
            if(t.x == n-1) continue;
            pq.offer(new Tuple(t.x+1, t.y, matrix[t.x+1][t.y]));//
        }
        return pq.poll().val;
    }
}


class Tuple implements Comparable<Tuple> {
    int x, y, val;
    public Tuple (int x, int y, int val) {
        this.x = x;
        this.y = y;
        this.val = val;
    }
    
    @Override
    public int compareTo (Tuple that) {
        return this.val - that.val;// return min val 
    }
}

class Tuple {
  constructor(x, y, val) { //x row //y column. //value 
         this.x = x;
        this.y = y;
        this.val = val;   
  }

  compareTo(that){
    return Math.min(this.val, that.val); //2-5 returns 2, 1-2 returns 1
  }
}








class MyHeapNode {

  int row;
  int column;
  int value;

  public MyHeapNode(int v, int r, int c) {
    this.value = v;
    this.row = r;
    this.column = c;
  }

  public int getValue() {
    return this.value;
  }

  public int getRow() {
    return this.row;
  }

  public int getColumn() {
    return this.column;
  }
}

class MyHeapComparator implements Comparator<MyHeapNode> {
  public int compare(MyHeapNode x, MyHeapNode y) {
    return x.value - y.value;// return min value
  }
}

class Solution {

  public int kthSmallest(int[][] matrix, int k) {//3*3 k=2 ans:2

    int N = matrix.length;//3

    PriorityQueue<MyHeapNode> minHeap =
        new PriorityQueue<MyHeapNode>(Math.min(N, k), new MyHeapComparator());

    // Preparing our min-heap
    for (int r = 0; r < Math.min(N, k); r++) {//r<2

      // We add triplets of information for each cell
      minHeap.offer(new MyHeapNode(matrix[r][0], r, 0));
       // r:0 MyHeapNode(1, 0, 0)

    }

    MyHeapNode element = minHeap.peek();
    while (k-- > 0) {

      // Extract-Min
      element = minHeap.poll();
      int r = element.getRow(), c = element.getColumn();

      // If we have any new elements in the current row, add them
      if (c < N - 1) {

        minHeap.offer(new MyHeapNode(matrix[r][c + 1], r, c + 1));
      }
    }

    return element.getValue();
  }
}
*/

/*
class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        
        # The size of the matrix
        N = len(matrix)
        
        # Preparing our min-heap
        minHeap = []
        for r in range(min(k, N)):
            
            # We add triplets of information for each cell
            minHeap.append((matrix[r][0], r, 0))
        
        # Heapify our list
        heapq.heapify(minHeap)    
        
        # Until we find k elements
        while k:
            
            # Extract-Min
            element, r, c = heapq.heappop(minHeap)
            
            # If we have any new elements in the current row, add them
            if c < N - 1:
                heapq.heappush(minHeap, (matrix[r][c+1], r, c+1))
            
            # Decrement k
            k -= 1
        
        return element  

*/










// /*
// [
//   [1, 0, 0, 1, 0],
//   [1, 0, 1, 0, 0],
//   [0, 0, 1, 0, 1],
//   [1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 0]
// ]
// set ()
// [
//   [1, true, 0, 1, 0],
//   [true, true, true, 0, 0],
//   [0, 0, 0, 0, 1],
//   [1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 0]
// ]

// pseudocode 
// getRiverSizes (matrix)
// - results = []
//   - loop over the matrix 
//     - get the curr element 
//     - if the curr element is a 1 
//       - make a recursive call on this element row and col 
//       - add return value to our result
//     - else 
//       - skip it 
// */

// function riverSizes(matrix) {
//   let results = [];
//   for (let row = 0; row < matrix.length; row++) {
//     for (let col = 0; col < matrix[0].length; col++) {
//       let curr = matrix[row][col];
//       if (curr === 1) {
//         let sum = helper(matrix, row, col);
//         results.push(sum);
//       } else {
//         continue;
//       }
//     }
//   }
//   return results;
// }

// function helper (matrix, row, col) {
//   if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || matrix[row][col] !== 1) {
//     return 0;
//   }
//   matrix[row][col] = true;
//   // let sum = 1;
//   // sum += helper (matrix, row + 1, col); // down
//   // sum += helper (matrix, row - 1, col); // up
//   // sum += helper (matrix, row, col + 1); // right
//   // sum += helper (matrix, row, col - 1);  // left
//   return 1 + helper (matrix, row + 1, col) + helper (matrix, row - 1, col) + helper (matrix, row, col + 1) + helper (matrix, row, col - 1);
// }

// /*
// [
//   [t, 0, 0, 1, 0],
//   [t, 0, 1, 0, 0],
//   [0, 0, 1, 0, 1],
//   [1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 0]
// ]
// sum = 1
// row = 0
// col = 0
// down=2, up=0, lr=0
// return 2

// row = 1
// col = 0
// down=0, up=0,right=0, left=0
// return 1
// */

// console.log(getRiverSizes([
//   [1, 0, 0, 1, 0],
//   [1, 0, 1, 0, 0],
//   [0, 0, 1, 0, 1],
//   [1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 0]
// ]).sort(), ' expects [1,2,2,2,5]');

// -------- 

