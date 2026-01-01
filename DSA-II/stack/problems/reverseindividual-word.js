// function reverseWord(str){
//     let stack = []
//     let res = ''
//     for(let i = 0 ; i< str.length;i++){
//         if(str[i]!=' '){
//             stack.unshift(str[i])
//         }else{
//                     while(stack.length>0){
//             res+=stack.shift()
//         }
//         res+=' '
//         }


//     }
//             while(stack.length>0){
//             res+=stack.shift()
//         }
//     return res 
// }
// let str = 'geeks for geekis'
// console.log(reverseWord(str))
function reverseWord(str) {
    let stack = [];
    let res = '';

    for (let i = 0; i < str.length; i++) {

        if (str[i] !== ' ') {
            stack.push(str[i]);  // push like stack
        } else {
            while (stack.length > 0) {
                res += stack.pop();  // pop like stack
            }
            res += ' ';
        }
    }

    // flush last word
    while (stack.length > 0) {
        res += stack.pop();
    }

    return res;
}

console.log(reverseWord("geeks for geekis"));
