/**multi-lavel condition */

const price = 2100;

if (price >= 5000){
    // discount 10%
    const discount = price * 10 / 100;
    console.log(discount);
    
}else if(price <= 2500){
    // discount 5%
    const discount = price * 5 / 100;
    
    console.log( `your 5% discount is  ${discount} ,your totall is ${price - discount} `);

    
}
else{
    console.log(price)
}