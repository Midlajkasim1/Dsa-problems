function SelectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let minIndex=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }
        if(i!==minIndex){
        let temp = arr[i];
        arr[i]=arr[minIndex];
        arr[minIndex]=temp
        }
    }
    return arr
}
let arr=[11,3,2,4,5,6,7,8,9,6,5,66,7];
console.log(SelectionSort(arr));
