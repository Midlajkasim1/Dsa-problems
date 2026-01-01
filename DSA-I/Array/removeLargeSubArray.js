function RemoveSub(matrix){
    let maxrowindex=0 ,maxNum=-Infinity;
    for(let i=0;i<matrix.length;i++){
        let maxinRow= Math.max(...matrix[i]);
        if(maxinRow>maxNum){
            maxNum=maxinRow;
            maxrowindex=i
        }
    }
    matrix.splice(maxrowindex,1);
    return matrix;

}
let arr = [[2, 3, 4], [8, 9, 10], [5, 6, 7]];
console.log(RemoveSub(arr));


