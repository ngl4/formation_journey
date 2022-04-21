
# APPROACH 2 (SOLUTION #1 - slice - with extra space): 
def removeDuplicates(array):
    
    sorted_arr = sorted(array)
    i = 0
    while i < len(sorted_arr) - 1:
        
        if i < len(sorted_arr) - 1 and sorted_arr[i] == sorted_arr[i + 1]:
            del sorted_arr[i] 
        else:
            i += 1
        
    return sorted_arr


# APPROACH 2 (SOLUTION #2 - two pointers - no extra space): 
def removeDuplicates(array):
    
    array.sort()
    i = 0 # write ptr
    j = 0 # read ptr
    while j < len(array):
        if j > 0 and array[j] == array[j - 1]: # if dup skip read over
            j += 1
        else: # else write
            array[i] = array[j]
            i += 1
            j += 1
    while i < len(array): # pop off extra elements after write pntr
        array.pop()
    return array

print(removeDuplicates([4,2,6,7,4,8,7])) # [4,2,6,7,8]
print(removeDuplicates([4,4,4,4,4])) # [4]
print(removeDuplicates([1,3,2,6,8])) # [1,3,2,6,8]
print(removeDuplicates([])) # []


