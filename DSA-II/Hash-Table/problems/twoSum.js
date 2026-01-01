var twoSum = function(nums, target) {
    let map = new Map();  // Create a new Map to store number:index pairs

    for(let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];  // Calculate the complement
        if(map.has(compliment)) {             // Check if complement exists in map
            return [i, map.get(compliment)];  // Return current index and complement's index
        } else {
            map.set(nums[i], i);              // Store current number and its index
        }
    }
    return [];  // Return empty array if no solution found
};
console.log(twoSum([2, 7, 11, 15], 9));    // Output: [1, 0]
console.log(twoSum([3, 2, 4], 6));        // Output: [2, 1]
console.log(twoSum([3, 3], 6));           // Output: [1, 0]
