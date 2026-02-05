function add(num1 , num2){
    if(typeof num1 === "number" || typeof num2 === "number"){
        return "Invalid Num"
    }
     const add = num1 + num2;
     return add ;
}

const output = add(3 , "5")

console.log(output);
