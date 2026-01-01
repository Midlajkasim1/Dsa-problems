// function reverseStr(str){
//     if(str.length==0){
//         return ''
//     }
//     return str[str.length-1]+reverseStr(str.slice(0,-1))
// }
let s='hello';
console.log(reverseSt(s));
function reverseSt(str){
    if(str.length==0){
        return ''
    }
    return reverseSt(str.substring(1)) + str[0];
}
// let s = 'hello';
// console.log(reverseSt(s));

// function reverseSt(str) {
//     if (str.length == 0) {
//         return '';
//     }
//     return reverseSt(str.substring(1)) + str[0];
// }