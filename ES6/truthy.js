let data ;
data = 0;
data = '0';
data = ' ';
if(data){
    console.log('truthy')
}else{
       console.log('falsy')
}
let price = 0;

// if(!price){
//     console.log('price is falsy')
// }else 
    if(!!price){
    console.log('price is falsy')
}