function leapYer(year){
 if(year % 4 === 0 && year % 100 !== 0 ){
    console.log(year , "is LeapYear");
 }else{
     console.log(year , "is not LeapYear");
 }
}
leapYer(2045);
