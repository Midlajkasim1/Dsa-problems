function thirdLeastFrequent(arr) {
    const freq = new Map();

    // Step 1: Build frequency map
    for (let num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    // Step 2: Track 3 minimum frequencies manually
    let min1 = Infinity, min2 = Infinity, min3 = Infinity;
    let val1 = null, val2 = null, val3 = null;

    for (let [num, count] of freq) {
        if (count < min1) {
            // shift down
            min3 = min2; val3 = val2;
            min2 = min1; val2 = val1;
            min1 = count; val1 = num;
        } else if (count < min2 && count !== min1) {
            min3 = min2; val3 = val2;
            min2 = count; val2 = num;
        } else if (count < min3 && count !== min1 && count !== min2) {
            min3 = count; val3 = num;
        }
    }

    return val3; // 3rd least frequent number or null
}

console.log(thirdLeastFrequent([1, 2, 3, 2, 3, 3, 4, 4, 5]));

// function thirdLeastFrequent(arr) {
//     const freq = new Map();

//     // Step 1: Build frequency map
//     for (let num of arr) {
//         freq.set(num, (freq.get(num) || 0) + 1);
//     }

//     // Step 2: Convert to array and sort by frequency
//     const sorted = [...freq.entries()].sort((a, b) => a[1] - b[1]);

//     // Step 3: Get the 3rd least frequent
//     return sorted[2] ? sorted[2][0] : null; // return number or null if not enough
// }
