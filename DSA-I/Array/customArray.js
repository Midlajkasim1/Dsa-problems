class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }


    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length
    }

    get(index){
        return this.data[index]
    }
pop(){
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem
}

shift(){
    const firstItem = this.data[0];
    for(let i=0;i<this.length;i++){
        this.data[i] = this.data[i+1] 
    }
    delete this.data[this.length-1];
    this.length--;
    return firstItem
}
unshift(item){
    for(let i=this.length-1;i>=0;i--){
        this.data[i+1] = this.data[i];
    }
    this.data[0] =item;
    this.length++;
    return item
}
delete(index){
  const deleteItem = this.data[index];
  for(let i=index;i<=this.length-1;i++){
    this.data[i]=this.data[i+1];
  }
  // Remove the last item
    delete this.data[this.length-1];
    this.length--;
    return deleteItem
}
}

const mynewArry = new MyArray();
mynewArry.push('midlaj');
mynewArry.push('john');
mynewArry.push('mark');
mynewArry.push('elon');
mynewArry.push('ko');

// mynewArry.pop();

// mynewArry.shift();
mynewArry.unshift('marco')
console.log(mynewArry);

// console.log(mynewArry.get(1));
mynewArry.delete(0)
console.log(mynewArry);
