function compressChars(str){
    if(!str){
        return "";
    }
    let result="";
    let count = 1;
    let currentChar = str[0];
    for(let i=1;i<str.length;i++){
        if(str[i]===currentChar){
            count++;
        }else{
            result+=count+currentChar;
            currentChar=str[i];
            count=1;
        }
       
    }
    result+=count+currentChar;
     return result
}

console.log(compressChars("aaabbccc"));
