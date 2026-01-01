function minheap(heap,value){
    heap.push(value);
    let index = heap.length-1
    let parentIndex = Math.floor((index-1)/2);
    while(index>0 && heap[parentIndex]>heap[index]){
        [heap[index],heap[parentIndex]] = [heap[parentIndex],heap[index]];
        index=parentIndex;
        parentIndex=Math.floor((index-1)/2)
    }
}
//delete minheap
function deleteHeap(heap,data){
    let index=-1;
    for(let i=0;i<heap.length;i++){
        if(heap[i]==data){
            index=i
            break
        }
    }
    if(index==-1)return -1
    heap[index] =heap[heap.length-1]
    heap.pop()
    while(true){
        let left = 2*index+1
        let right = 2 * index+2
        let smallest = index
        if(left>0 && heap[left]<heap[smallest]){
            smallest=left
        }
        if(right>0 && heap[right]<heap[smallest]){
            smallest=right
        }
        if(smallest!==index){
            [heap[index],heap[smallest]] = [heap[smallest],heap[index]]
            index=smallest
        }else{
            break
        } 
    }  
}

let heap=[];
let values=[10,7,11,5,4,13];
for(let value of values){
    minheap(heap,value)
    // console.log(`Inserted value ${value} into min heap ${heap}`);
    
}
console.log(heap);
 deleteHeap(heap,10)
console.log(`heap after deletion ${heap}`);

//time complexity O(log n)
