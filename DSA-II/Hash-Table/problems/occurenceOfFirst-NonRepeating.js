function occurence(str){
    let map = new Map()
    for(let char of str){
        map.set(char,(map.get(char)||0)+1)
    }
    for(let char of str){
        if(map.get(char)== 1){
            return char
        }
    }
    return -1
}
console.log(occurence("masdlayalam"))


//////////////////last non-repesting
function lastNonRepeating(str) {
    let hash = {};
  
    // count frequency
    for (let ch of str) {
      hash[ch] = (hash[ch] || 0) + 1;
    }
  
    // scan from end → find last non-repeating
    for (let i = str.length - 1; i >= 0; i--) {
      if (hash[str[i]] === 1) {
        return str[i];
      }
    }
  
    return -1;
  }
  
  console.log(lastNonRepeating("masdlayalam"));
  