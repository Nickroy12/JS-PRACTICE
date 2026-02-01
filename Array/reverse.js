let num = [1 , 2 ,3 ,  4 , 5, 6, 7];
// let reverse = num.reverse()
// console.log(reverse);

// console.log(num);

// for()

let reversed = []

for (let numb of num){
    console.log(numb);
    reversed.unshift(numb)
    
}
console.log(reversed);
