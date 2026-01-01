class HashTable {
    constructor(size = 5) {
        this.table = new Array(size).fill(null); // null = empty slot
        this.size = size;
    }

    // Hash Function: Turns key into slot number
    hash(key) {
        key = String(key);
        let sum = 0;
        for (let char of key) {
            sum += char.charCodeAt(0);
        }
        return sum % this.size;
    }

    // Insert: Add a key-value pair with linear probing
    insert(key, value) {
        let index = this.hash(key); // Initial slot
        let originalIndex = index;

        // Probe until we find an empty slot or the key
        while (this.table[index] !== null) {
            // If key already exists, update value
            if (this.table[index][0] === key) {
                this.table[index][1] = value;
                return;
            }
            // Move to next slot
            index = (index + 1) % this.size;
            // If we’ve looped back, table is full
            if (index === originalIndex) {
                throw new Error("Hash table is full");
            }
        }
        // Empty slot found, insert key-value pair
        this.table[index] = [key, value];
    }

    // Find value of key with linear probing
    get(key) {
        let index = this.hash(key);
        let originalIndex = index;

        while (this.table[index] !== null) {
            if (this.table[index][0] === key) {
                return this.table[index][1];
            }
            index = (index + 1) % this.size;
            if (index === originalIndex) break; // Full loop, not found
        }
        return undefined; // Key not found
    }

    // Delete key-value pair with linear probing
    remove(key) {
        let index = this.hash(key);
        let originalIndex = index;

        while (this.table[index] !== null) {
            if (this.table[index][0] === key) {
                this.table[index] = "DELETED"; // Mark as deleted
                return true;
            }
            index = (index + 1) % this.size;
            if (index === originalIndex) break;
        }
        return false; // Key not found
    }

    // Print the hash table
    print() {
        for (let i = 0; i < this.size; i++) {
            if (this.table[i] !== null && this.table[i] !== "DELETED") {
                console.log(`Slot ${i}: key = ${this.table[i][0]}, value = ${this.table[i][1]}`);
            } else if (this.table[i] === "DELETED") {
                console.log(`Slot ${i}: DELETED`);
            }
        }
    }
}

// Test the hash table
let list = new HashTable(5);
list.insert("name", "midlaj");
list.insert("age", "23");
list.print();
console.log("Age:", list.get("age")); // "23"
list.remove("age");
list.print();