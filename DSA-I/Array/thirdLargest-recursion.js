function findThirdLargest(arr, index = 0, largest = -Infinity, second = -Infinity, third = -Infinity) {
    if (index >= arr.length) {
        return third === -Infinity ? null : third; 
    }

    let current = arr[index];

    if (current > largest) {
        third = second;
        second = largest;
        largest = current;
    } else if (current > second && current !== largest) {
        third = second;
        second = current;
    } else if (current > third && current !== second && current !== largest) {
        third = current;
    }

    return findThirdLargest(arr, index + 1, largest, second, third);
}
let arr = [12, 35, 1, 10, 34, 1];
console.log("Third Largest:", findThirdLargest(arr));