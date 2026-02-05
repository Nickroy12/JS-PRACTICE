const number = [12 , 13 , 32, 23];

function maxNum(num){
    let max = num[0];
    for (let i of num ){
       if(i > max){
           max = i;
       }
    }
    return max;
}
let output = maxNum(number);
console.log(output);
