function BubbleSort(arr){
    for(let i =0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j]=arr[j+1];
                arr[j+1]=temp
            }
        }
    }
    return arr
}


let arr=[3,6,4,3,44,67,8,4,2,3]
console.log(BubbleSort(arr));




// function BubbleSort(arr,n){
//     if(n<=1)return arr
//     for(let i=0;i<n-1;i++){
//     if(arr[i]>arr[i+1]){
//        let temp = arr[i];
//        arr[i]=arr[i+1];
//        arr[i+1]=temp
//     }
    
//     }
//     return BubbleSort(arr,n-1)
// }
// let arr=[55,4,3,6,7,8,34,6,8];
// console.log(BubbleSort(arr,arr.length))