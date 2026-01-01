class DoubleHashTable {
    constructor(size = 7) {
        this.table = new Array(size).fill(null);
        this.size = size;
    }

    // Primary hash
    hash1(key) {
        key = String(key);
        let sum = 0;
        for (let char of key) sum += char.charCodeAt(0);
        return sum % this.size;
    }

    // Secondary hash (must never give 0)
    hash2(key) {
        key = String(key);
        let sum = 0;
        for (let char of key) sum += char.charCodeAt(0);
        return 1 + (sum % (this.size - 1));
    }

    insert(key, value) {
        let index = this.hash1(key);
        let step = this.hash2(key);
        let i = 0;

        while (this.table[index] !== null && this.table[index] !== "DELETED") {
            if (this.table[index][0] === key) {
                this.table[index][1] = value;
                return;
            }

            i++;
            index = (index + i * step) % this.size;

            if (i > this.size) throw new Error("Hash table is full");
        }

        this.table[index] = [key, value];
    }

    get(key) {
        let index = this.hash1(key);
        let step = this.hash2(key);
        let i = 0;

        while (this.table[index] !== null) {
            if (this.table[index][0] === key) {
                return this.table[index][1];
            }

            i++;
            index = (index + i * step) % this.size;

            if (i > this.size) break;
        }

        return undefined;
    }

    remove(key) {
        let index = this.hash1(key);
        let step = this.hash2(key);
        let i = 0;

        while (this.table[index] !== null) {
            if (this.table[index][0] === key) {
                this.table[index] = "DELETED";
                return true;
            }

            i++;
            index = (index + i * step) % this.size;

            if (i > this.size) break;
        }

        return false;
    }

    print() {
        console.log(this.table);
    }
}
