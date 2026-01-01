function isRotated(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    // If array has one element or is not rotated, return false
    if (arr.length === 1 || arr[left] <= arr[right]) {
        return false;
    }
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        // Check if mid+1 is minimum (rotation point)
        if (mid < arr.length - 1 && arr[mid] > arr[mid + 1]) {
            return true;
        }
        
        // Check if mid is minimum (rotation point)
        if (mid > 0 && arr[mid - 1] > arr[mid]) {
            return true;
        }
        
        // Decide which half to search
        if (arr[mid] > arr[0]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false;
}

// Test cases
console.log(isRotated([3, 4, 5, 1, 2]));      // true
console.log(isRotated([4, 5, 6, 7, 0, 1, 2])); // true
console.log(isRotated([1, 2, 3, 4, 5]));      // false
console.log(isRotated([2, 1]));               // true
console.log(isRotated([1]));                  // false