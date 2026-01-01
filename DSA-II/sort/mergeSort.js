function mergeSort(arr){
    if(arr.length <=1)return arr;

    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid)

    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let result =[];                                                                      
    let i=0;
    let j=0;
   while(i<left.length && j<right.length){
    if(left[i]<right[j]){
      result.push(left[i])
      i++;
    }else{
        result.push(right[j]);
        j++
    }
   }
   result.push(...left.slice(i))
   result.push(...right.slice(j));
   return result
}
const res = mergeSort([22, 43, 77, 56,2, 54, 64]);
console.log(res);


