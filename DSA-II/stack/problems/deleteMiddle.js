// -remove middle value from stack
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
    middle(){
        let length = this.stack.length
        let rem = Math.floor((length-1)/2)
        this.stack.splice(rem,1)
    }
    display(){
        console.log(this.stack)
    }
}
let st = new Uniq()
st.push(10)
st.push(20)
st.push(30)
st.push(40)
st.push(50)
st.middle()
st.display()



//remove middle element using stack -recursion
// function deleteMiddle(stack,currIndex,size){
//     if(currIndex == size) return
//     let top = stack.pop()
//     deleteMiddle(stack,currIndex+1,size)
//     if(currIndex!=Math.floor((size/2))){
//         stack.push(top)
//     }
// }
// function removeElem(stack){
//     let size = stack.length
//     deleteMiddle(stack,0,size)
// }
// let stack = [67,34,6776,1222,34,12,67]
// console.log(stack)
// removeElem(stack)
// console.log('after',stack)