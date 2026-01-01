let arr=[2,3,4,5,5,5,6,5,4,4,4,6,7,9];
let target = 5;
console.log(arr);
function sort(arr, target) {
  arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    if (arr[i] == target) {
      let val = arr[i];
      arr.push(val);
      arr.splice(i, 1);
    }
  }
  return arr;
}
console.log(sort(arr, target));