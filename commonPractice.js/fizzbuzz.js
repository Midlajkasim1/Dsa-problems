function fizzCheck(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%5==0 &&arr[i]%3==0 ){
            console.log('fizzbuzz');
            
        }else if(arr[i]%5==0){
            console.log('fizz');
            
        }else if(arr[i]%3==0){
            console.log('buzz');
            
        }else{
            console.log(arr[i]);
            
        }
    }
}

fizzCheck([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
