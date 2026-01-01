// function removeletter(str,letter){
//     if(str.length===0)return ''
//     let firstChar=str[0]===letter?'':str[0];
//     return firstChar + removeletter(str.slice(1),letter)
// }
// let str='hello world';
// console.log(removeletter(str,'l'))

// function rempveletter(str,target,index=0,newstr=[]){
//     if(index>=str.length)return newstr.join('')
//         if(str[index]!==target){
//             newstr.push(str[index])
//         }
//         return rempveletter(str,target,index+1,newstr)
// }
let target='l';
let str='hello world'
console.log(rempveletter(str,target));


function removeLetter(str,target){
    if(str.length===0)return ''
    let first = str[0]
    if(target===first)return removeLetter(str.slice(1),target)
        return first + removeLetter(str.slice(1),target)
}