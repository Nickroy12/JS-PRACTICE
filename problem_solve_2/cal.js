function add(num1 , num2){
     const add = num1 + num2;
     return add ;
}
function multiple(num1 , num2){
    const mul = num1 * num2;
    return mul;
}
function divide(num1 , num2){
    const div = num1 / num2;
    return div;
}
function sub(num1 , num2){
    const su = num1 - num2
    return su;
}

function calculator(a , b , operator){
  if(operator === "add"){
    const result = add(a , b);

    return result;
  }else if(operator === "mul"){ 

      const result = multiple(a , b);

      return result;
  }else if(operator === "divide" ){
    const result = divide(a , b)

    return result ;

  }else if(operator === "sub"){
    const result = sub(a , b);
    return result;
  }
}
const output = calculator(4 , 7 , "sub")

console.log(output);
