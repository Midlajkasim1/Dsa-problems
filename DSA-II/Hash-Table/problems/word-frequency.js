function wordFrequency(text){
    const freqTable={};
    const words=text.split(/\s+/);
    for(let word of words){
        word = word.toLowerCase()//clean punctuation
        freqTable[word]=(freqTable[word]||0)+1
    }
    return freqTable;
}
let text = "javascript is a beginner friendly programming is language.";
console.log(wordFrequency(text));
