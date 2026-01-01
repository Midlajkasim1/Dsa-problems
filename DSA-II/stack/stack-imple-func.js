let t=-1;
let max=1000;
let arr=Array(max).fill(0);
function isEmpty(){
    if(t<0){
        console.log("stack is empty");
    }
    return false
}
function push(data){
    if(t>max-1){
        console.log("stack overflow")
    }
    t+=1;
    arr[t]=data
    return true
}
function pop(){
    if(t<0){
        console.log("underflow")
    }
    let x=arr[t];
    t-=1;
    return x
}
function peek(){
    return arr[t]
}
function print(){
    for(let i=0;i<=t;i++){
        console.log(arr[i])
    }
}
push(45);
push(35)
print();
console.log("-------")
pop();
print()