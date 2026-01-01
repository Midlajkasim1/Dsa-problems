function reverse(str){
    return str.split(' ').map(word=>word.split('').reverse().join('')).join(' ')
}

console.log(reverse('hello world'))