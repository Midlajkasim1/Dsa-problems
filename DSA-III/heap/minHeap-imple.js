class Minheap{
    constructor(){
        this.heap=[]
    }
    push(data){
        this.heap.push(data)
        this.heapifyUp()
    }
    pop(){
        let start = this.heap[0]
        let end = this.heap.pop()
        if(this.heap.length>0){
            this.heap[0] = end
            this.heapifyDown()

        }
    }
    peek(){
        return this.heap[0]
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

    heapifyDown(){
        let index=0;
        let length = this.heap.length
        while(true){
            let left = 2 * index+1
            let right = 2* index+2
            let smallest = index
            if(left<length && this.heap[left]<this.heap[smallest]){
                smallest=left
            }
            if(right<length && this.heap[right]<this.heap[smallest]){
                smallest=right
            }
            if(smallest == index)break
            [this.heap[index],this.heap[smallest]] = [this.heap[smallest],this.heap[index]]
            index=smallest

        }
    }
    getHeap(){
        return this.heap
    }
}
let heap = new Minheap()
heap.push(10)
heap.push(20)
heap.push(30)
heap.push(40)
// heap.pop()
console.log(heap.getHeap())