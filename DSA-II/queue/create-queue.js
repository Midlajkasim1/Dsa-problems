class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class Queue{
    constructor(data){
        let newNode = new Node(data);
        this.first=newNode;
        this.last=newNode;
        this.length=1;
        return this
    }
    enqueue(data){
        let newNode= new Node(data);
        if(this.length===0){
            this.first=newNode;
            this.last=newNode
        }
        this.last.next=newNode;
        this.last=newNode;
        this.length++;
        return this
    }
    dequeue(){
        if(this.length===0){
            return undefined
        }
        if(this.length===1){
            this.first=null;
            this.last=null
        }
        let temp = this.first
        this.first=this.first.next;
        temp.next=null;
        this.length--;
        return temp
    }
minvalue(){
    if(this.length===0){
        return undefined
    }
    let current=this.first;
    let minvalue=current.data;
    while(current.next){
        current=current.next
    }
    if(minvalue>current){
        minvalue=current
    }
    return minvalue
}
    print(){
        let result =[];
        let current=this.first;
        while (current) {
            result.push(current.data);
            current=current.next
        }
        console.log(result.join('-')+'-null');
        
    }
}
let list = new Queue();
list.enqueue(56)
list.enqueue(78)

list.enqueue(34)

list.enqueue(99)

list.print()
list.dequeue();
list.print()
console.log(list.minvalue());

// console.log(list);
