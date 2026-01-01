function reversestr(str){
    const stack=[]

    for(let char of str){
        stack.push(char)
    }
    let reverstring='';
    while(stack.length>0){
        reverstring+= stack.pop()
    }
    return reverstring
}

const reverseString = reversestr("hello world");
console.log(reverseString);
