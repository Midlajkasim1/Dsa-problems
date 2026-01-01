function longestRepeatingChar(str) {
    // if (str.length === 0) return ["", 0]; // Edge case for empty string

    let maxChar = str[0]; 
    let maxCount = 1;
    let currentChar = str[0];
    let currentCount = 1;

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            currentCount++; // Increase count if same as previous char
        } else {
            currentChar = str[i]; // Reset for new character
            currentCount = 1;
        }

        if (currentCount > maxCount) {
            maxCount = currentCount;
            maxChar = str[i];
        }
    }

    return [maxChar, maxCount];
}
console.log(longestRepeatingChar("aaabbccccddee")); // Output: ['c', 4]



