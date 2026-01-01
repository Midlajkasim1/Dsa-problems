class PriorityQueue{
    constructor(){
        this.heap = []
    }
    enqueue(value,priority){
        this.heap.push({value,priority})
        this.heapifyUp()
    }
    pop(){
        let start = this.heap[0]
        let end = this.heap.pop()
        if(this.heap.length>0){
            this.heap[0] = end
        }
        this.heapifyDown()
        return start
    }
    heapifyUp(){
        let index = this.heap.length-1
        let parentIndex = Math.floor((index-1)/2)
        while(index>0 && this.heap[parentIndex].priority>this.heap[index].priority){
            [this.heap[index],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[index]]
            index = parentIndex
            parentIndex = Math.floor((index-1)/2)
        }
    }
    heapifyDown(){
        let index = 0
        let length = this.heap.length
        while(true){
            let left = 2*index+1
            let right = 2*index+2
            let smallest = index
            if(left<length && this.heap[left].priority<this.heap[smallest].priority){
                smallest = left
            }
            if(right<length && this.heap[right].priority<this.heap[smallest]){
                smallest = right
            }
            if(smallest == index)break
            [this.heap[index],this.heap[smallest]] = [this.heap[smallest],this.heap[index]]
            index = smallest
        }
    }
    
    getHeap(){
        return this.heap
    }
    
    peek(){
        return this.heap[0]
    }
    
    isEmpty(){
        return this.heap.length==0
    }
}

let pq = new PriorityQueue()
pq.enqueue("Task 1", 3);  
pq.enqueue("Task 2", 1);
pq.enqueue("Task 3", 4);
pq.enqueue("Task 4", 2);
pq.enqueue("Task 5", 5);
console.log(pq.getHeap())