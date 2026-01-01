const arraychunk = (arr,size)=>{
    const chunked=[];
    let index =0;
    while(index<arr.length){
        const chunk = arr.slice(index,index+size);
        chunked.push(chunk);
        index+=size;

    }
    return chunked
}
console.log(arraychunk([3,4,5,6,7,5,4,3,2,5,6],4));
