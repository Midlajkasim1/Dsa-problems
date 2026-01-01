function jaggedArr(arr,target){
    for(let i=0;i<arr.length;i++){
        let left=0;
        let right=arr[i].length-1;
        while(left<=right){
            let mid = Math.floor((left+right)/2);
            if(arr[i][mid]===target)return [i,mid];
            if(target<arr[i][mid]){
                right=mid-1
            }else{
                left=mid+1
            }
                
            
        }
    }
}
let arr=[[5,6,7],[12,14,15],[34,35]]
console.log(jaggedArr(arr,34));




