class Node{
    constructor(key,value){
        this.key=key;
        this.value=value;
        this.next=null
    }
}
class hashTable{
    constructor(size=5){
        this.table= new Array(size);
        this.size=size;
    }
    // Hash Function: Turns key into slot number
    hash(key){
        key = String(key);
        let sum=0;
        for(let char of key){
            sum +=char.charCodeAt(0)
        }
        return sum %this.size;
    }
    // Insert: Add a key-value pair
    insert(key,value){
    let index = this.hash(key) //slot number
    if(!this.table[index]){
        this.table[index] = new Node(key,value);
    }else{
        let current=this.table[index];
        while(current){
            if(current.key === key){
                current.value =value;
                return 
            }
            if(!current.next)break;
            current = current.next
        }
        current.next = new Node(key,value)
    }
    }
    //find value of key 
    get(key){
        let index = this.hash(key);
        let current = this.table[index];
        while(current){
            if(current.key === key){
                return  current.value
                
            }
            current = current.next
        }
        return undefined
    }
    //delete key value pair;
    remove(key){
        let index = this.hash(key);
        let current = this.table[index];
        if(!current)return false
        let prev = null
      while(current){
        if(current.key === key){
            this.table[index]= current.next;
            return true
        }
        prev = current;
        current= current.next
      }
       return false;

        }
    print(){
        for(let i=0;i<this.size;i++){
         let current= this.table[i];
         while(current){
            console.log(`Slot ${i} : key = ${current.key}, value = ${current.value}`);
            current = current.next
            
         }
        }
    }
}
let list = new hashTable(5);
list.insert("name","midlaj");
list.insert("age","23");
list.print();
console.log("Name",list.get("age"));;
list.remove("age");
list.print()
