function arrayToHashTable(arr) {
    const hash = {};
    for (let item of arr) {
        hash[item] = (hash[item] || 0) + 1;
    }
    return hash;
}

// Example
let arr = ['a', 'b', 'a', 'c', 'b', 'a'];
console.log(arrayToHashTable(arr));
// Output: { a: 3, b: 2, c: 1 }
