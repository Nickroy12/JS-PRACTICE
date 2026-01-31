let total = 0
for(let i = 1 ; i <= 100; i++){
    if(i % 5 === 0){
        console.log("num" , i)
        total += i;
    }
}
console.log(total);
