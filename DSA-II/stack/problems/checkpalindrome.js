function isPalindrome(str){
    let stack =  []
    for(let i = 0 ; i<str.length;i++){
        stack.push(str[i])
    }
    for(let i = 0 ; i< stack.length ; i++){
        if(stack[i]!=stack.pop()){
            return false
        }
    }
    return true
}
console.log(isPalindrome('malayalam'))