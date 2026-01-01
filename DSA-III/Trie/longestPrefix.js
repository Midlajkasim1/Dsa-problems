class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isWord = true;
    }

    longestPrefix() {
        let node = this.root;
        let prefix = "";

        while (
            Object.keys(node.children).length === 1 && // only one path
            !node.isWord                            // not at word end
        ) {
            let [child] = Object.keys(node.children); // 
            prefix += child;
            node = node.children[child];
        }

        return prefix;
    }
}

// Example
let trie = new Trie();
let words = ["flower", "flow", "floer", "floering"];
words.forEach((word) => trie.insert(word));

console.log("longest prefix is", trie.longestPrefix());
