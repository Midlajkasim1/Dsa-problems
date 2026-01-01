
let arr=[12,3,44,5,6,7,9,4,3]; 
function InsertionSort(arr){
    for(let i=0;i<arr.length;i++){
        let curr=arr[i]
        let prev=i-1
        
        while(arr[prev]>curr&&prev>=0){
        arr[prev+1]=arr[prev]
        prev--
        }
        arr[prev+1]=curr
    }
    return arr
}
console.log(InsertionSort(arr))

