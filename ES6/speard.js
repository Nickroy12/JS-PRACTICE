const params = [12 , 67, 89, 43 , 4]

const num = (u , v , x,y,z) =>{
    const sum = u + v + x + y + z;
    return sum 
}
const output = num(...params)

console.log(output)
console.log('___________')

let sonkha1 = [23, 45, 24];
let sonkha2 = [...sonkha1]

sonkha2.push(4)
console.log(sonkha1)
console.log(sonkha2)
