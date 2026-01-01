function fibinnocci(n){
    if(n==0)return 0;
    if(n==1)return 1;
    return fibinnocci(n-1)+fibinnocci(n-2)
}
function printfib(n){
 for(let i=0;i<n;i++){
    console.log(fibinnocci(i));
    
 }
}
let n=10;
printfib(n)