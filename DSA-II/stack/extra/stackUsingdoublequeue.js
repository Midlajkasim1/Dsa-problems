class Stack{
    constructor(){
        this.q1 = []
        this.q2 = []
    }
    push(value){
        this.q2.push(value)
        while(this.q1.length!=0){
            this.q2.push(this.q1.shift())
        }
        this.q = this.q2
        this.q2 = this.q1
        this.q1 = this.q
    }
    pop(){
        if(this.q1.length == 0)return
        return this.q1.shift()
    }
    top(){
        return this.q1[0]
    }
    print(){
        console.log(this.q1)
    }
}

let st = new Stack()
st.push(10)
st.push(20)
st.push(30)
st.pop()
console.log('the top is',st.top())
st.print()