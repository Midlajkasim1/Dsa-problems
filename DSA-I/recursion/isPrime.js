function isPrime(n,divisor=Math.floor(n/2)){
    if(n<=1)return false;
    if(divisor===1)return true;
    if(n%divisor===0)return false

    return isPrime(n,divisor-1)
}
console.log(isPrime(4));
