function missingNumber(num){
    let n = num.length+1
    let hash = new Array(n+1).fill(0)
    for(let i = 0 ;i<n;i++){
        //nums[i] paranja 1 so avdennan thudanga 0 l 0 aayirirkkum
        hash[num[i]] = (hash[num[i]]||0)+1
    }
    for(let i = 1 ; i<n;i++){
        if(hash[i] == 0){
            return i
        }
    }
}
console.log(missingNumber([1,2,3,5]));