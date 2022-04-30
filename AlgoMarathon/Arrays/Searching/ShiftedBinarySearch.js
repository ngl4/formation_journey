
/*
Learn Strength Algo: Shifted Binary Search

Q: What is Binary Search? 
Q: How to detect which side is ordered? 

*/

/*
Visualization
3 4 5 1 2
      m
      l	h

m: 5
l: 3
h: 2

target 1

T: O(logn)
S: O(1)
*/

//Attempt # 1

function shiftedBinarySearch(array, target) {
	let low = 0;  //index
	let high = array.length - 1; //inclusive index
	while (low <= high){
		let mid = Math.floor((high+low)/2); 
		if (array[mid] === target) return mid; 
		if (array[low] <= array[mid]) {// on the LEFT SIDE
			if (array[low] <= target && target < array[mid]) { //found on the left
				high = mid - 1; 
			}else { //found on the right
				low = mid + 1; 
			}
		}else { // on the RIGHT SIDE
			if (array[mid] < target && target <= array[high]) { //on the right
				low = mid + 1; 
			}else { //on the left
				high = mid - 1; 
			}			
		}
	}
	return -1;
}


/*
Progress Notes: 

10min: watch Formation video and understand the problem 

15min: coding the problem (issues ~ not entirely how to solve ~ since I have failed some test cases)
(specifically in Algo Expert I failed the test cases#6 and other 3 more cases)

15min: watch Algo Expert video, review hints, understand the recursive approach on the problem and rewatched the Formation video 

10min: resolve the issue from my first 15 mins approach and successfully pass all the test cases 


Plain English: 
The shifted binary search is basically helping us to find the specific item 
by dividing up the data depends on if the target item is locating in the smaller or larger area 
of the middle point. 
Divide the playground into half. 
Lets take a look when the low pointer value (left pointer value) is less than or equal to the middle pointer value. 
    In this situation, it means that potentially the left side is ordered, and the right side is not ordered 

    If the target is smaller than or equal to the middle pointer value, and it is larger than the low pointer value, adjust the high pointer 
    else adjust the low pointer 

If the lower pointer value is larger than or equal to the middle pointer value:
    this means potentially the left side is not ordered and the right side is ordered 

    (similar situation on this end)
*/
