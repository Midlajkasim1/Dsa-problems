class TrieNode{
    constructor(){
        this.children={}
        this.isWord=false
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
        let node = this.root;
        for(let i=0;i<word.length;i++){
            let letter = word[i]
            if(!node.children[letter]){
                node.children[letter] = new TrieNode()
            }
            node = node.children[letter]
        }
        node.isWord=true
    }
    suggestionHelper(node,lists,curr){
        if(node.isWord){
            lists.push(curr)
        }
        for(let child in node.children){
            this.suggestionHelper(node.children[child],lists,curr+child)
        }
    }
    suggestion(prefix){
        let node = this.root;
        let curr='';
        for(let i=0;i<prefix.length;i++){
            if(!node.children[prefix[i]]){
                return []
            }
            node = node.children[prefix[i]]
            curr+=prefix[i]
        }
        let lists=[]
        this.suggestionHelper(node,lists,curr);
        return lists
    }
}
let trie = new Trie();
let word = ['hello','hep','hello world','dog','hell','cat','helping']
word.forEach((word)=>{
    trie.insert(word)
})
console.log('suggestion for hel ',trie.suggestion('hel'));
