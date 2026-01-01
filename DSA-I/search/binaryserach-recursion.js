function binarySearchRecursive(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) return -1; // Base case: Element not found

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) return mid; // Found target, return index

    if (arr[mid] > target) {
        return binarySearchRecursive(arr, target, low, mid - 1); // Search left half
    } else {
        return binarySearchRecursive(arr, target, mid + 1, high); // Search right half
    }
}

// Example Usage
let arr = [1, 3, 5, 7, 9, 11, 13, 15];
let target = 7;
console.log(binarySearchRecursive(arr, target)); 

