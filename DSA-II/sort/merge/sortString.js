function mergeSortString(str) {
    if (str.length <= 1) return str;

    const mid = Math.floor(str.length / 2);
    const left = mergeSortString(str.slice(0, mid));
    const right = mergeSortString(str.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = '';
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result += left[i]
            i++
        } else {
            result += right[j];
            j++
        }
    }

    result += left.slice(i) + right.slice(j);
    return result;
}

// ✅ Example usage
const sorted = mergeSortString("midlaj");
console.log(sorted);  // Output: "adiljm"
