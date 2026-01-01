class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    pop() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.heapifyDown();
        }
        return min;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    heapifyUp(){
        let index = this.heap.length-1
        let parentIndex = Math.floor((index-1)/2)
        while(index>0 && this.heap[parentIndex]>this.heap[index]){
            [this.heap[index],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[index]]
            index = parentIndex
            parentIndex = Math.floor((index-1)/2)
        }
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
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
}

function findKthLargest(arr, k) {
    const heap = new MinHeap();

    for (let num of arr) {
        heap.push(num);
        if (heap.size() > k) {
            heap.pop(); // remove smallest to maintain size k
        }
    }

    return heap.peek(); // top of heap is the k-th largest
}
const arr = [3, 2, 1, 5, 6, 4];
const k = 3;
console.log(findKthLargest(arr, k)); // Output: 5
