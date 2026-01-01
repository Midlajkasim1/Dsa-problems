function duplicateRecu(arr,index=0,isUniquearr=[]){
   if(index>=arr.length)return isUniquearr;
   if(!isUniquearr.includes(arr[index])){
    isUniquearr.push(arr[index])
   }
   return duplicateRecu(arr,index+1,isUniquearr)
}
let arr=[5,6,4,7,4,7,3,4,5,7];
console.log(duplicateRecu(arr));
