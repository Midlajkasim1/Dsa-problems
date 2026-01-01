class Stack{
    constructor(){
        this.q = []
    }
    push(x){
        let size = this.q.length
        this.q.push(x)
        for(let i = 0 ; i<size;i++){
        let x = this.q[0]
        this.q.shift()
        this.q.push(x)
        }
    }
    top(){
        return this.q[0]
    }
    pop(){
        let x = this.q[0]
        this.q.shift(x)
    }
    print(){
            console.log(this.q)
    
    }
}

const st = new Stack()
st.push(10)
st.push(20)
st.push(30)
st.push(40)
st.pop()
console.log("The top is",st.top())
st.print()