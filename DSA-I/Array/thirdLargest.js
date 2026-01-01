let arr=[2,3,43,5,6,7,54,65,5];

let newarr=arr.reduce((acc,val)=>{
    if(acc.largest<val){
        acc.third= acc.second;
        acc.second = acc.largest;
        acc.largest=val
    }else if(acc.second<val && val!==acc.largest){
        acc.third=acc.second;
        acc.second=val;
    }else if(acc.third<val && val!==acc.second){
        acc.third=val
    }
    return acc
},{
largest:-Infinity,
second:-Infinity,
third:-Infinity
})
console.log(newarr.third)


//smallest
// let arr = [2, 3, 43, 5, 6, 7, 54, 65, 5];

// let newarr = arr.reduce((acc, val) => {
//     if (val < acc.smallest) { // Find smallest number
//         acc.third = acc.second;
//         acc.second = acc.smallest;
//         acc.smallest = val;
//     } else if (val < acc.second && val !== acc.smallest) { // Find second smallest
//         acc.third = acc.second;
//         acc.second = val;
//     } else if (val < acc.third && val !== acc.second) { // Find third smallest
//         acc.third = val;
//     }
//     return acc;
// }, {
//     smallest: Infinity,
//     second: Infinity,
//     third: Infinity
// });

// console.log(newarr.third); // Output: 5 (third smallest number)
