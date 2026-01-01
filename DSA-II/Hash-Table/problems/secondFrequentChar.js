function secondFrequentChar(str){
    const charMap = new Map();

    for(let char of str){
        charMap.set(char,(charMap.get(char)||0)+1);
    }
    let firstmax=0 , secondMax = 0
    let firstChar='',secondChar='';
    for(let [char,count] of charMap){
        if(count > firstmax){
            secondMax=firstmax;
            secondChar=firstChar;
            firstmax=count;
            firstChar=char;
        }else if(count>secondMax && count!==firstmax){
            secondMax=count;
            secondChar=char
        }
    }
    return secondChar || null;
}

console.log(secondFrequentChar("hello"));      // Output: "h" or "e" or "o"
console.log(secondFrequentChar("aabbccf"));     // Output: "b" (any of the second max)
console.log(secondFrequentChar("aaaabbbbcc"));

/////////////////////////////////////////////////////
function secondFrequentChar(str) {
    let hash = {};
  
    // count occurrences
    for (let ch of str) {
      hash[ch] = (hash[ch] || 0) + 1;
    }
  
    let firstMax = 0,
        secondMax = 0;
  
    let firstChar = "",
        secondChar = "";
  
    // find first and second max
    for (let ch in hash) {
      let count = hash[ch];
  
      if (count > firstMax) {
        secondMax = firstMax;
        secondChar = firstChar;
  
        firstMax = count;
        firstChar = ch;
      } 
      else if (count > secondMax && count !== firstMax) {
        secondMax = count;
        secondChar = ch;
      }
    }
  
    return secondChar || null;
  }
  
  console.log(secondFrequentChar("hello"));       // "h" or "e" or "o"
  console.log(secondFrequentChar("aabbccf"));     // "b" (or any second max)
  console.log(secondFrequentChar("aaaabbbbcc"));  // "c"
  