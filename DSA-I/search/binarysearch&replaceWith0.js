function binarySearch(arr,target){
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        let mid= Math.floor((left+right)/2);
        if(arr[mid]===target){
            arr[mid]=0;
            // return arr
        }
   
    if(arr[mid]>target){
        right=mid-1
    }else{
        left=mid+1
    }
}
    return arr

}
let arr=[2,3,4,5,6,7,8,11,15]
console.log(binarySearch(arr,8));
