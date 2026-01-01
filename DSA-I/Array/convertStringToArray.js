
//convertin string to array

// let str='world famous';
// console.log(str.split(' '));
// // Split into characters
// let str = "hello";
// let arr = str.split(""); // ["h", "e", "l", "l", "o"]
// console.log(arr);

// // Split on a space
// str = "hello world";
// arr = str.split(" "); // ["hello", "world"]
// console.log(arr);

// // Split on a comma with limit
// str = "apple,banana,orange,grape";
// arr = str.split(",", 2); // ["apple", "banana"]
// console.log(arr);

// // No separator (whole string as one element)
// str = "hello";
// arr = str.split(); // ["hello"]
// console.log(arr);

//way 2 //spread
// let str='theking'
// console.log([...str]);

// Using Array.from()
// Converts an iterable (like a string) into an array.
// let str='hello';
// console.log(Array.from(str));

// let arr = Array.from("hello", char => char.toUpperCase());
// console.log(arr); // ["H", "E", "L", "L", "O"]

//manual
function convertstr(str){
    let arr=[];
    for(let i=0;i<str.length;i++){
        arr.push(str[i])
    }
    return arr
}
console.log(convertstr('hello'));
