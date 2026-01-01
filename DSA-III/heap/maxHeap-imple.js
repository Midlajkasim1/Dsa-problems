class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(data) {
        this.heap.push(data);
        this.heapifyUp();
    }

    pop() {
        let start = this.heap[0];
        let end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.heapifyDown();
        }
        return start; // return removed max
    }

    peek() {
        return this.heap[0];
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);

        // 🔥 change `>` (MinHeap) → `<` (MaxHeap)
        while (index > 0 && this.heap[parentIndex] < this.heap[index]) {
            [this.heap[index], this.heap[parentIndex]] =
                [this.heap[parentIndex], this.heap[index]];

            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    heapifyDown() {
        let index = 0;
        let length = this.heap.length;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let largest = index;

            // 🔥 change `<` (MinHeap) → `>` (MaxHeap)
            if (left < length && this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            if (right < length && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if (largest === index) break;

            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];

            index = largest;
        }
    }

    getHeap() {
        return this.heap;
    }
}
