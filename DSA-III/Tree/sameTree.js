class Node{
    constructor(v){
        this.key = v
        this.left = null
        this.right = null
    }
}

class BT{
    constructor(){
        this.root = null
    }
    insert(value){
        let node = new Node(value)
        if(!this.root){
            this.root = node
            return
        }
        let q = []
        q.push(this.root)
        while(q.length>0){
            let curr = q.shift()
            if(!curr.left){
                curr.left = node
                return
            }
            if(!curr.right){
                curr.right = node
                return
            }
            q.push(curr.left)
            q.push(curr.right)
        }
    }
}

function isSameTree(q1,q2){
    if(!q1 && !q2)return true
    if(!q1||!q2)return false
    if(q1.key != q2.key)return false
    return isSameTree(q1.left,q2.left) && isSameTree(q1.right,q2.right)
}

let bt = new BT()
console.log('first tree')
bt.insert(1)
bt.insert(2)
bt.insert(3)

let bt2 = new BT()
console.log('second tree')
bt2.insert(1)
bt2.insert(2)
bt2.insert(3)
console.log(isSameTree(bt.root,bt2.root))