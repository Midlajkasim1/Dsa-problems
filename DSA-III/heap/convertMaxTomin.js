// Maxheap class (modified from Minheap)
class Maxheap {
    constructor() {
        this.heap = [];
    }

    push(data) {
        this.heap.push(data);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        // Changed > to < for max-heap (larger values go up)
        while (index > 0 && this.heap[parentIndex] < this.heap[index]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
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
            let largest = index; // Changed smallest to largest
            // Changed < to > to find larger child
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

// Your original Minheap class (unchanged, included for completeness)
class Minheap {
    constructor() {
        this.heap = [];
    }

    push(data) {
        this.heap.push(data);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[parentIndex] > this.heap[index]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
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
            let smallest = index;
            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    getHeap() {
        return this.heap;
    }
}

// Function to convert min-heap to max-heap
function minToMaxHeap(minHeapArray) {
    let maxHeap = new Maxheap();
    // Push each element to max-heap
    for (let val of minHeapArray) {
        maxHeap.push(val);
    }
    return maxHeap.getHeap();
}

// Test the conversion
let heap = new Minheap();
heap.push(10);
heap.push(20);
heap.push(30);
heap.push(40);
console.log("Min-Heap:", heap.getHeap()); // Output: [10, 20, 30, 40]
let maxHeapArray = minToMaxHeap(heap.getHeap());
console.log("Max-Heap:", maxHeapArray); // Output: [40, 20, 30, 10]