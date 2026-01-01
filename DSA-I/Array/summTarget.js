function checksal(arr,target){
    let ans=[]
    for(let i=0;i<arr.length-1;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                ans.push([i,j])
                
            }
        }
    }
    return ans
}
console.log(checksal([3,4,2,6,7,9,8,1],9))
