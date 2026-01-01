function validParenthesis(str){
  let map={
    '(':')',
    '{':'}',
    '[':']'
  }
  let stack=[];
  for(let char of str){
    if(map[char]){
      stack.push(map[char])
    }else{
      if(stack.pop()!==char){
        return false
      }
    }
  }
  return stack.length==0
}
console.log(validParenthesis('{[)'))