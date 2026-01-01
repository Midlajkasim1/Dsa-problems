const fact = (number)=>{
    if(number==0){
        return 1;
    }
    return number * fact(number-1)
}
console.log(fact(4));
