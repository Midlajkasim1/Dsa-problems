class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
 }
 class linkedList{
     constructor(data){
         this.head=new Node(data);
         this.tail=this.head;
         this.length=1
     }
     push(data){
         let newNode=new Node(data);
         if(!this.head){
             this.head=newNode
             this.tail=newNode
         }
         this.tail.next=newNode;
         this.tail=newNode;
         this.length++;
         return this
     }
     nthnoderemove(n){
         let slow=this.head;
         let fast = this.head;
         let prev=null;
         for(let i=0;i<n;i++){
             if(!fast)return 
             fast=fast.next
         }
         while(fast){
             prev=slow;
             slow=slow.next;
             fast=fast.next
         }
         if(this.head===slow){
             this.head=slow.next;
             
         }else if(this.tail===slow){
             prev.next=null;
             this.tail=null;
         }else{
             prev.next=slow.next
         }
         this.length--
     }
     removefirst(n){
        let current=this.head;
        let prev=null;
        for(let i=1;i<n;i++){
            prev=current;
            current=current.next
        }
        prev.next=current.next;
        this.length--;
        return current
     }
     print(){
         let result=[];
         let current=this.head
         while(current){
             result.push(current.data);
             current=current.next
         }
         console.log(result.join('->')+'-> null')
     }
 }
 let list= new linkedList(56);
 list.push(45);
 list.push(37);
 
 list.push(95);
 
 list.push(17);
 list.print()
 list.removefirst(2);
 list.print()