class Uniq{
    constructor(){
        this.stack = []
        this.set = new Set()
    }
    push(value){
        if(!this.set.has(value)){
         this.stack.push(value)
         this.set.add(value)
        }else{
            console.log("duplicates are not allowed")
        }
        
    }
    pop(){
        let value = this.stack.pop()
        this.set.delete(value)
        
    }
    display(){
        console.log(this.stack)
    }
}
let st = new Uniq()
st.push(10)
st.push(20)
st.push(30)
st.pop()
st.push(30)
st.display()