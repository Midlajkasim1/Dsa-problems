class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}
class doublyList{
    constructor(data){
        let newNode=  new Node(data);
        this.head=newNode
        this.tail=this.head;
        this.length=1;
    }
    push(data){
        let newNode=new Node(data);
        // if(this.length==0){
        //     return undefined
        // }
        this.tail.next=newNode;
        newNode.prev=this.tail;
        this.tail=newNode;
        this.length++;
        return this
    }
    pop(){
        if(this.length==0){
            return null
        }
        let temp=this.tail;
        if(this.length==1){
            this.head=null;
            this.tail=null
        }
        this.tail=this.tail.prev;
        this.tail.next=null;
        temp.prev=null;
        this.length--;
        return temp
    }
    unshift(data){
        let newNode = new Node(data)
        if(this.length==0){
            this.head=newNode;
            this.tail=newNode;
        }
        newNode.next=this.head;
        this.head.prev=newNode;
        this.head=newNode;
        this.length++;
        return this
        
    }t
    shift(){
        if(this.length==0){
            this.head=null
            this.tail=null
            }
        let temp=this.head
        this.head=this.head.next;
        this.head.prev=null;
        temp.next=null
        this.length--
        return temp
    }
    reverse(){
        let current=this.head;
        let temp=null
        while(current!==null){
            temp=current.prev;
            current.prev=current.next;
            current.next=temp
        }
        if(!temp!==null){
            this.head=temp.prev
        }
    }
   print(){
       let current=this.head;
       let result=[];
       while(current){
           result.push(current.data);
           current=current.next;
       }
       console.log(result.join('->')+'-> null')
       
   }
}
let list=new doublyList(45);
list.push(12)
list.push(67)
list.push(34)
list.reverse()
list.print()