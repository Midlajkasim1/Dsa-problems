// function sumArr( arr, target){
//     let result=[]
//    for(let i=0;i<arr.length-1;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]+arr[j]==target){
//             result = [arr[i],arr[j]];
//             return result

//         }
//     }
//    }
//    return result
// }
// let arr =[2,3,4,5,5,3,4,3];
// let target=10;
// console.log(sumArr(arr,target));


//
function sumArr(arr, target) {
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (set.has(complement)) {
            return [complement, arr[i]]; // Return the pair of values
        }
        set.add(arr[i]);
    }
    return []; // No pair found
}

// Test
let arr = [2, 7, 11, 15];
let target = 9;
console.log(sumArr(arr, target)); // [2, 7] (or [7, 2], order depends on traversal)