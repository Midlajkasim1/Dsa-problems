function occurence(str){
    let map = new Map()
    for(let i = 0 ; i<str.length;i++){
        map.set(str[i],(map.get(str[i])||0)+1)
    }
    return map
}
console.log(occurence('malayalammshisjd'))


// function occurence(str){
//     let map = new Map()
//     for(let i = 0 ; i<str.length;i++){
//         map.set(str[i],(map.get(str[i])||0)+1)
//     }
//     for(let i = 0 ; i<str.length;i++){
//         if(map.get(str[i])==1){
//             return str[i]
//         }
//     }
//   console.log(map);
  
  
// }
// console.log(occurence('malamys'));