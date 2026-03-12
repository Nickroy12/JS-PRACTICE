const number = [12 , 23, 65, 89];

const square = number.map((e, i) => {
    console.log(e, i);
    return e * 2;
});

console.log(square);
let sum = 0;

number.forEach(num => {
    sum += num;
});

console.log(sum);