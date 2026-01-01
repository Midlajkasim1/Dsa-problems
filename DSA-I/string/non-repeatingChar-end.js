// function Nonrepeat(str){
//     let strcount={};
//     for(let char of str){
//         strcount[char]=(strcount[char] ||0)+1
//     }
//     for(let i=str.length-1;i>=0;i--){
//         if(strcount[str[i]]===1){
//             return str[i]
//         }
//     }
//     return false
// }

// let str = ['a', 'b', 'c', 'a', 'b', 'd', 'e', 'd', 'f', 'e','r'];
// console.log(Nonrepeat(str));


function Nonrepeatfst(arr){
    let arrcount={};
for(let char of arr){
    arrcount[char]=(arrcount[char]||0)+1
}
for(let i=0;i<=arr.length;i++){
    if(arrcount[arr[i]]===1){
        return arr[i]
    }
}
return false
}
let str = ['a', 'b', 'c', 'a', 'b', 'd', 'e', 'd', 'f', 'e','r'];

 console.log(Nonrepeatfst(str));
