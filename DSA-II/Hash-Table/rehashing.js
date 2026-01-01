class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class hashTable {
    constructor(size = 5) {
        this.table = new Array(size);
        this.size = size;
        this.count = 0; // for load factor
    }

    hash(key) {
        key = String(key);
        let sum = 0;
        for (let char of key) {
            sum += char.charCodeAt(0);
        }
        return sum % this.size;
    }

    insert(key, value) {
        let index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = new Node(key, value);
        } else {
            let current = this.table[index];
            while (current) {
                if (current.key === key) {
                    current.value = value;
                    return;
                }
                if (!current.next) break;
                current = current.next;
            }
            current.next = new Node(key, value);
        }

        this.count++;

        // Check load factor
        if (this.count / this.size > 0.7) {
            this.rehash();
        }
    }

    get(key) {
        let index = this.hash(key);
        let current = this.table[index];
        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return undefined;
    }

    remove(key) {
        let index = this.hash(key);
        let current = this.table[index];
        let prev = null;

        while (current) {
            if (current.key === key) {
                if (prev) {
                    prev.next = current.next;
                } else {
                    this.table[index] = current.next;
                }
                this.count--;
                return true;
            }
            prev = current;
            current = current.next;
        }
        return false;
    }

    print() {
        for (let i = 0; i < this.size; i++) {
            let current = this.table[i];
            while (current) {
                console.log(`Slot ${i}: key = ${current.key}, value = ${current.value}`);
                current = current.next;
            }
        }
    }

    // 🆕 Rehashing function
    rehash() {
        console.log("🔁 Rehashing...");
        let oldTable = this.table;
        this.size = this.size * 2;
        this.table = new Array(this.size);
        this.count = 0;

        for (let i = 0; i < oldTable.length; i++) {
            let current = oldTable[i];
            while (current) {
                this.insert(current.key, current.value);
                current = current.next;
            }
        }
    }
}
let list = new hashTable(5);
list.insert("name", "midlaj");
list.insert("age", "23");
list.insert("location", "kerala");
list.insert("language", "js");
list.insert("food", "biriyani"); // Should trigger rehashing

list.print();

console.log("Get age:", list.get("age"));

list.remove("age");
console.log("\nAfter removing age:");
list.print();
