// function partition(arr,low,high){
//     let pivot=arr[high];
//    let i=low-1
    
//     for(let j=low;j<high;j++){
//         if(arr[j]<=pivot){
//             i++;
//             [arr[i],arr[j]] = [arr[j],arr[i]]
//         }
//     }
//     [arr[i+1],arr[high]] = [arr[high],arr[i+1]]

//     return i+1
// }

// function quickSort(arr,low,high){
//     if(low<high){
//         let pi = partition(arr,low,high)

//         quickSort(arr,low,pi-1);
//         quickSort(arr,pi+1,high)
//     }
//     return arr

// }

// let arr = [64,34,25,12,11,90];
// console.log("Sorted array:", quickSort(arr, 0, arr.length - 1));



function quick(arr){
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    if(arr.length<2){
        return arr
    }
    for(let i = 0 ; i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick(left),pivot,...quick(right)]
}
console.log(quick([45,23,12,567,322,34]))






//when pivot is take first element
// Partition function with first element as pivot
// function partition(arr, low, high) {
//     let pivot = arr[low]; // Pivot is the first element
//     let i = low;          // Start i at low (pivot’s position will be adjusted later)

//     // Traverse from low + 1 to high
//     for (let j = low + 1; j <= high; j++) {
//         if (arr[j] <= pivot) {
//             i++;                  // Move boundary of smaller elements
//             [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
//         }
//     }

//     // Place pivot in its final position by swapping with i
//     [arr[low], arr[i]] = [arr[i], arr[low]];
//     return i; // Return pivot’s final position
// }

// // Quick Sort function (unchanged)
// function quickSort(arr, low, high) {
//     if (low < high) {
//         let pi = partition(arr, low, high);
//         quickSort(arr, low, pi - 1);  // Sort left sub-array
//         quickSort(arr, pi + 1, high); // Sort right sub-array
//     }
//     return arr;
// }

// // Test the implementation
// let arr = [64, 34, 25, 12, 22, 11, 90];
// console.log("Original array:", arr);
// quickSort(arr, 0, arr.length - 1);
// console.log("Sorted array:", arr);