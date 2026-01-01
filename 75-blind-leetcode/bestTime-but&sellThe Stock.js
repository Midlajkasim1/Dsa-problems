function theStock(prices){
    let curMin=prices[0];
    let curMax=0;
    for(let i=1;i<prices.length;i++){
        curMin=Math.min(prices[i],curMin);
        curMax=Math.max(curMax,prices[i]-curMin)
    }
    return curMax
}

let prices=[2,3,5,1,5,6,7,5];
console.log(theStock(prices));
