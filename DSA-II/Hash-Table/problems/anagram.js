function isAnagram(s, t) {


    // Use an object as a frequency counter
    const charCount = {};

    // Count frequencies in s
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Subtract frequencies for t
    for (let char of t) {
        if (!charCount[char]) return false; // Char not in s or count exhausted
        charCount[char]--;
    }

    // All counts should be 0 (implicitly checked above)
    return true;
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car"));         // false
console.log(isAnagram("a", "ab"));            // false