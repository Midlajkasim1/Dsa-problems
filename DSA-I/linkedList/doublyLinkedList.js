class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;

    }
}
class doulblylist{
    constructor(data){
        this.head=new Node(data);
        this.tail=this.head
        this.length=1
    }
    push(data){
        let newNode= new Node(data)
        if(!this.head){
            this.head=newNode;
            this.tail=newNode
        }
        this.tail.next=newNode;
        newNode.prev=this.tail;
        this.tail=newNode;
        this.length++;
        return this
    }
    pop(){
        if(this.length===1){
            this.head=null;
            this.tail=null
        }
        let temp=this.tail;
        this.tail=this.tail.prev;
        this.tail.next=null;
        temp.prev=null;
        this.length--
    }
    unshift(data){
        let newNode= new Node(data);

        newNode.next=this.head;
        this.head.prev=newNode;
        this.head=newNode;  ///change
        this.length++
    }
    shift(){
        let temp=this.head;
        this.head=this.head.next;
        this.head.prev=null;
        temp.next=null
        this.length--
    }
reverse(){
    let current=this.head;
    let temp=null;
    while(current!==null){
        temp=current.prev;
        current.prev=current.next;
        current.next=temp;
        current=current.prev
    }
    if(temp!==null){
        this.head=temp.prev
    }
}
getfirst(){
    return this.head;
}
getlast(){
    return this.tail;
}
getIndex(index){
    let counter=0;
    let temp=this.head;
    while(temp){
        if(index===counter){
            return temp;
        }
        counter++;
        temp=temp.next
    }
    return counter

}
set(index,data){
    let temp=this.getIndex(index);
    if(temp){
        temp.data=data;
        return true
    }
    return false
}
insert(index,data){
    let temp=this.getIndex(index-1);
    let newNode= new Node(data);
      let after=temp.next;
      temp.next=newNode;
      newNode.prev=temp;
      newNode.next=after;
      this.length++
}
delete(data){
    let current=this.head;
    while(current && current.data!==data){
        current=current.next
    }
    if(this.head===current){
        this.head=current.next;
        if(this.head){
            this.head.prev=null;
        }
        return
    }
    if(this.tail===current){
        this.tail=current.prev;
        this.tail.next=null;
        return
    }
    current.prev.next=current.next;
    current.next.prev=current.prev
}

isCircular() {
    if (!this.head) return false;
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}
intersection(otherList) {
    if (!this.head || !otherList.head) return new DoublyList();
    let result = new DoublyList();
    result.head = null;
    result.tail = null;
    result.length = 0;
    let seen = new Set();
    let current = this.head;
    while (current) {
        seen.add(current.data);
        current = current.next;
    }
    current = otherList.head;
    while (current) {
        if (seen.has(current.data)) {
            result.push(current.data);
            seen.delete(current.data);
        }
        current = current.next;
    }
    return result;
}

fromArray(arr) {
    if (!arr || arr.length === 0) return this;
    this.head = null;
    this.tail = null;
    this.length = 0;
    for (let item of arr) {
        this.push(item);
    }
    return this;
}

toArray() {
    let arr = [];
    let current = this.head;
    while (current) {
        arr.push(current.data);
        current = current.next;
    }
    return arr;
}
reversestr(str){
    if(!str || str.length===0)return '';
    this.head=null;;
    this.tail=null;
    this.length=0
    
    for(let i=0;i<str.length;i++){
        let newNode = new Node(str[i]);
        if(!this.head){
          this.head=newNode;
          this.tail=newNode;
        }else{
              this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode;
        }
                    this.length++

    }
            this.reverse()

    let result='';
    let current=this.head;
    while(current){
        result+=current.data;
        current=current.next;
        
    }
    return result
}
// NEW: Remove element at specific index
removeAt(index) {
    if (index < 0 || index >= this.length) return false; // Invalid index
    if (!this.head) return false; // Empty list

    if (index === 0) { // Remove from start
        this.shift();
        return true;
    }
    if (index === this.length - 1) { // Remove from end
        this.pop();
        return true;
    }

    let current = this.getIndex(index); // Node to remove
    if (!current) return false; // Shouldn’t happen with valid index, but safety

    current.prev.next = current.next; // Link previous to next
    current.next.prev = current.prev; // Link next to previous
    this.length--;
    return true;
}
deletemiddle(){
    let prev=null;
    let slow=this.head;
    let fast=this.head;
    while(fast!==null && fast.next!==null){
        prev=slow;
        slow=slow.next;
        fast=fast.next.next
    }
    prev.next=slow.next
    return slow
}
duplicateremove(){
    let current=this.head;
    let seen=new Set();
    let prev=null;
    while(current){
        if(seen.has(current.data)){
            prev.next=current.next;
            this.length--
            current=prev.next
        }else{
            seen.add(current.data);
            prev=current;
            current=current.next
        }
    }
}
nthnoderemove(n){
    let fast=this.head;
    let slow=this.head;
    let prev=null;
    for(let i=0;i<n;i++){
        if(!fast)return false
        fast=fast.next
    }
    while(fast){
        prev=slow;
        slow=slow.next;
        fast=fast.next;
    }
    prev.next=slow.next;
    slow.next.prev=prev;
    this.length--;

}
nthefirat(n){
    let current=this.head;
    let prev=null;
    for(let i=1;i<n;i++){
        prev=current;
        current=current.next;
    }
    prev.next=current.next;
    this.length--
}

merge(otherlist){
    if(!this.head){
        this.head=otherlist.head;
        this.tail=otherlist.tail;
        this.length=otherlist.length
    }
    this.tail.next=otherlist.head;
    this.tail=otherlist.tail;
    this.length+=otherlist.length
}
sort(){
    let arr=[];
    let current=this.head;
    while(current){
        arr.push(current.data);
        current=current.next
    }
    arr.sort((a,b)=>b-a);
    this.head=new Node(arr[0]);
    this.tail=this.head;
    
    for(let i=0;i<arr.length;i++){
        this.push(arr[i])
    }
    return this
}
isPalindrome(){
    let prevSlow=null;
    let fast=this.head;
    let slow=this.head;
    while(fast!==null && fast.next!==null){
        prevSlow=slow;
        slow=slow.next;
        fast=fast.next.next
    }
    prevSlow.next=null;
    let secondHalf=slow;
    let current=secondHalf;
    let prev=null;
    while(current){
        let next = current.next;
        current.next=prev;
        prev=current;
        current=next;
    }
    secondHalf=prev;
    let firstHalf=this.head;
    while(secondHalf){
        if(firstHalf.data!==secondHalf.data)return false
        firstHalf=firstHalf.next;
        secondHalf=secondHalf.next
    }
    return true
}

    print(){
        let result=[];
        let current=this.head;
        while(current){
            result.push(current.data);
            current=current.next
        }
        console.log(result.join('<->')+'<-> null');
        
    }
}
let list = new doulblylist(1);
list.push(2);
list.push(4)

list.push(1)

list.print();
list.duplicateremove()
// let list1= new doulblylist(99);
// list1.push(88);
// list1.push(77);
// list.sort();
list.print()

// list.pop();
// list.print();
// list.unshift(67);
// list.print();
// // list.shift();
// // list.print();
// // list.reverse();
// // list.print();
// console.log(list.isPalindrome()
// );;

  
    // delete(data){   //10->20->30
    //     let current=this.head;
    //     while(current&&current.data!==data){
    //         current=current.next
    //     }
    //     if(this.head===current){
    //         this.head=current.next
    //         if(this.head){
    //             this.head.prev=null;
    //         }else{
    //             this.tail=null;
    //         }
    //         return
    //     }
    //     if(this.tail===current){
    //         this.tail=current.prev
    //         this.tail.next=null;
    //         return
    //     }
    //     //case-3 -delete middle
    //     current.prev.next=current.next;
    //     current.next.prev=current.prev
    // }

    // reverse(){
    //     let current = this.head;
    //     let temp = null;
    //     while(current!==null){
    //          temp = current.prev;
    //          current.prev = current.next;
    //          current.next=temp;
             
    //          current=current.prev;
    //     }
    //     if(temp!==null){
    //         this.head = temp.prev;
    //     }
    // }