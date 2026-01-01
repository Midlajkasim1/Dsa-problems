function mostFrequentChar(str) {
    const charMap = {};  // plain object instead of Map
  
    // Count frequencies
    for (let char of str) {
      charMap[char] = (charMap[char] || 0) + 1;
    }
  
    let maxChar = '';
    let maxCount = 0;
  
    // Loop through object keys
    for (let char in charMap) {
      if (charMap[char] > maxCount) {
        maxChar = char;
        maxCount = charMap[char];
      }
    }
  
    return maxChar;
  }
  
  console.log(mostFrequentChar("hello"));   // "l"
  console.log(mostFrequentChar("aabbcc"));  // "a"
  