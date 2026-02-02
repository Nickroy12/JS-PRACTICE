let number = [12 , 32 , 45 , 23]

function sum(num){
  
  let sum = 0;

    for(let nums of num){
   
        if(nums % 2 === 0){
             sum = sum + nums;

        }  
    }
     return sum;
}
const output = sum(number); 
console.log(output);


