function oddFilter(num){
   const  oddNum = [];

   for(let nem of num){
        if(nem % 2 === 1){
       oddNum.push(nem);
    
    }
   }
    // console.log(oddNum);
    sum = 0;

    for( let odd of oddNum){
        sum += odd;
    }
    console.log(sum);
    const count = oddNum.length;
    const avg =  sum / count;
    return avg;
}
const  number = [12, 31 , 32, 43, 65]
 const avrage = oddFilter(number)
 console.log("Avarage is" , avrage.toFixed(2));
 

 