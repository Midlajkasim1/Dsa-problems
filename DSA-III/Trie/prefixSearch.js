class TrieNode {
  constructor() {
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
  }

  // ✅ Check if any word starts with given prefix
  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }
}

// ✅ Test
let trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("care");

console.log(trie.startsWith("ca"));  // true
console.log(trie.startsWith("car")); // true
console.log(trie.startsWith("dog")); // false
