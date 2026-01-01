class QuadraticHashTable {
    constructor(size = 5) {
        this.table = new Array(size).fill(null);
        this.size = size;
    }

    hash(key) {
        key = String(key);
        let sum = 0;
        for (let char of key) sum += char.charCodeAt(0);
        return sum % this.size;
    }

    insert(key, value) {
        let index = this.hash(key);
        let i = 1;

        while (this.table[index] !== null && this.table[index] !== "DELETED") {
            if (this.table[index][0] === key) {
                this.table[index][1] = value;
                return;
            }

            index = (index + i * i) % this.size;
            i++;

            if (i > this.size) throw new Error("Hash table is full");
        }

        this.table[index] = [key, value];
    }

    get(key) {
        let index = this.hash(key);
        let i = 1;

        while (this.table[index] !== null) {
            if (this.table[index][0] === key) {
                return this.table[index][1];
            }

            index = (index + i * i) % this.size;
            i++;

            if (i > this.size) break;
        }
        return undefined;
    }

    remove(key) {
        let index = this.hash(key);
        let i = 1;

        while (this.table[index] !== null) {
            if (this.table[index][0] === key) {
                this.table[index] = "DELETED";
                return true;
            }

            index = (index + i * i) % this.size;
            i++;

            if (i > this.size) break;
        }
        return false;
    }

    print() {
        this.table.forEach((item, i) => console.log(i, ":", item));
    }
}
