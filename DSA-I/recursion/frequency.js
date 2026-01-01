function frequency(arr,freq={},index=0){
    if(index>=arr.length)return freq;
    let element=arr[index];
    freq[element] =(freq[element]||0)+1;
    return frequency(arr,freq,index+1)

}
let arr=[3,4,5,6,7,3,5,67,3,4,6];
console.log(frequency(arr));
