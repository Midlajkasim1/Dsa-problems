function  Printmessage(n){
    if(n===0)return '';
    console.log("print message");;
    Printmessage(n-1)
    
};
Printmessage(10)