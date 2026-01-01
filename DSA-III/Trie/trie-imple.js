class TrieNode{
   constructor(){
    this.childNode = new Array(26).fill(null);
    this.wordCount = 0
   }
}
   function insertion(root,key){
    let currentNode = root;
    for(let i=0;i<key.length;i++){
        let index = key[i].charCodeAt(0)-'a'.charCodeAt(0)
        if(currentNode.childNode[index]=== null){
            currentNode.childNode[index] = new TrieNode()
        } 
        currentNode = currentNode.childNode[index]

    }
    currentNode.wordCount++
   }
   //prefix search in trie
   function searchPrefix(root,prefix){
    let currentNode = root
    for(let i=0;i<prefix.length;i++){
        let index = prefix[i].charCodeAt(0)-'a'.charCodeAt(0)
        if(currentNode.childNode[index]===null){
            return false
        }
        currentNode = currentNode.childNode[index]
    }
    return true
   }
   //complete word search
   function searchWord(root,word){
    let currentNode=root
    for(let i=0;i<word.length;i++){
        let index = word[i].charCodeAt(0)-'a'.charCodeAt(0)
        if(currentNode.childNode[index]===null){
            return false
        }
        currentNode = currentNode.childNode[index]
    }
    return currentNode.wordCount>0
   }
   

//    //deletion
//    function delete_key(root,word){
//     let currentNode= root;
//     let lastBrancNode = null;
//     let lastBrancChar ='';
//     for(let c of word){
//         let index = c.charCodeAt(0)-'a'.charCodeAt(0)
//         if(currentNode.childNode[index] ===null){
//             return false
//         }else{
//             let count=0;
//             for(let i=0; i<26;i++){
//                 if(currentNode.childNode[i]!==null){
//                     count++
//                 }
//             }
//             if(count>1){
//                 lastBrancNode = currentNode
//                 lastBrancChar = c
//             }
//             currentNode = currentNode.childNode[index]
//         }
        
//     }
//     //
//     let count=0;
//     for(let j=0;j<26;j++){
//         if(currentNode.childNode[j]!==null){
//             count++
//         }
//         //1st case
//         if(count>0){
//             currentNode.wordCount--
//             return true
//         }
//         //second case
//         if(lastBrancNode!==null){
//             let index = lastBrancChar.charCodeAt(0)-'a'.charCodeAt(0)
//             lastBrancNode.childNode[index] = null;
//             return true
//         }else{
//             //third case;
//             root.childNode[word[0].charCodeAt(0)-'a'.charCodeAt(0)]
//             return true
//         }
//     }
//    }
function deleteKey(root, word) {
    let currentNode = root;
    let stack = [];  // store (node, index)

    // Step 1: Traverse the characters
    for (let c of word) {
        let index = c.charCodeAt(0) - 'a'.charCodeAt(0);

        if (currentNode.childNode[index] === null) {
            return false; // word doesn't exist
        }

        stack.push([currentNode, index]);
        currentNode = currentNode.childNode[index];
    }

    // Step 2: If word doesn't end here → can't delete
    if (currentNode.wordCount === 0) return false;

    // Step 3: Reduce count (remove the word)
    currentNode.wordCount--;

    // Step 4: If node still has children → stop (Case 1 or 2)
    if (currentNode.childNode.some(x => x !== null)) return true;

    // Step 5: Delete bottom-up (Case 3)
    while (stack.length > 0) {
        let [parent, index] = stack.pop();

        // delete pointer
        parent.childNode[index] = null;

        // stop if parent has:
        // (a) another child OR (b) a wordCount > 0
        if (parent.wordCount > 0 || parent.childNode.some(x => x !== null)) {
            break;
        }
    }

    return true;
}


   let root = new TrieNode()
   insertion(root,'cat');
   insertion(root,'can')
   insertion(root,'butterfly')

   console.log('insertion is completed');
   console.log(searchPrefix(root,'ca'));
   console.log(searchWord(root,'can'))
   console.log(delete_key(root,'cat')) //0(n)
   console.log(searchWord(root,'cat')) //0(n)
   console.log(searchPrefix(root,'t'))   //0(n)




   
   