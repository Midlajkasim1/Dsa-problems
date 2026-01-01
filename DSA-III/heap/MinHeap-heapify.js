// A heapify operation can be used to create a min heap from an unsorted array.
//  This is done by starting at the last non-leaf node and repeatedly performing 
// the “bubble down” operation until all nodes satisfy the heap property.

function minHeapify(arr,i,n){
    let smallest = i;
    let left = 2*i+1
    let right = 2*i+2
    if(left<n && arr[left]<arr[smallest]){
        smallest = left
    }
    if(right<n && arr[right]<arr[smallest]){
        smallest=right
    }
    if(smallest!=i){
        [arr[i],arr[smallest]] = [arr[smallest],arr[i]]
        minHeapify(arr,smallest,n)
    }
     
}

function main(){
    let arr=[10,5,15,2,20,30];
    for(let i =Math.floor((arr.length)/2)-1;i>=0;i--){
        minHeapify(arr,i,arr.length)
        console.log(`minheapify after operation ${arr}`);
        
    }
}
main()