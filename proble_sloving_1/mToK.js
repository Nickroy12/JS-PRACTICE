function mileToKm(km){
    const mile = km / 1.60934;
    return mile; 
}
const km = parseInt(mileToKm(5)) ;

console.log("Kilometer is" , km);
