// let arr=[2,7,11,15];
// let target=9
function sum(arr,target){
    let map=new Map();
    for(let i=0;i<arr.length;i++){
        const compliment= arr[i]-target
        if(map.has(compliment)){
            return [map.get(compliment),i]
        }else{
            map.set(arr[i],i)
        }
    }
    return []
}
 let arr=[2,7,11,15];
 let target=9;
 console.log(sum(arr,target))
