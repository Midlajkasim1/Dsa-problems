function InverCasting(str){
    return str.split('').map(word=>word===word.toUpperCase()?word.toLowerCase():word.toUpperCase()).join('')
}

let  str='Hello WorlLd';
console.log(InverCasting(str))