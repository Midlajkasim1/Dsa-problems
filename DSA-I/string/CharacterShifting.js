 function charshift(input){
    let result=''
    for(let char of input){
   let newchar = String.fromCharCode(char.charCodeAt(0)+9)
      result+=newchar
    }
    return result
 }
 console.log(charshift('hdn'));
 