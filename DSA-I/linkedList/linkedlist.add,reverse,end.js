class Node{
    constructor(data){
        this.data= data;
        this.next= null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
    }
    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head=newNode;
            return
        }
        let current = this.head;
        while(current.next){
            current=current.next
        }
        current.next = newNode
    }
    front(num){
        let node=new Node(num)
        node.next=this.head
        this.head=node
    }
    reverse(){
        if(this.head === null){
            return null
        }
        let current = this.head
        let prev = null
        let next = null
        
        while(current){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return this.head = prev
    }
    print(){
        let current= this.head;
        let result= [];
        while(current){
            result.push(current.data);
            current=current.next
        }
        console.log(result.join('->')+'- null')
    }
}
let list = new linkedList();
list.append(30);
list.append(20);
list.append(50)
list.append(70)
list.append(90)
list.front(1)

list.print()
console.log('reverseing')
list.reverse()
list.print()
