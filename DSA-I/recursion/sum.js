function Sum(arr,index=0){
    if(index===arr.length)return 0;
    return arr[index]+Sum(arr,index+1)
}
let arr=[3,4,5,6,7,8];
console.log(Sum(arr));
