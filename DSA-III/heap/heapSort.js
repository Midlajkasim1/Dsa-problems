function heapify(arr,index,n){
    let left=2*index+1;
    let right=2*index+2;
    let largest=index
    if(left<n && arr[left]>arr[largest]){
        largest=left
    }
    if(right<n && arr[right]>arr[largest]){
        largest=right
    }
    if(largest!=index){
        [arr[index],arr[largest]] = [arr[largest],arr[index]];
         heapify(arr,largest,n)
    } 

    ////
}
function heapSort(arr){
    let n= arr.length;
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,i,n)
    }
    for(let i=n-1;i>=0;i--){
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr,0,i)
    }
    return arr
}
let arr=[30,20,70,60,90,40];

console.log(heapSort(arr));
