function woodMas(chairQue , tableQue , bedQue){
    const perChair = 3;
    const perTable = 4;
    const perBed = 8;

    const totalChair = perChair * chairQue;
    const totalTable = perTable * tableQue;
    const totalBed = perBed * bedQue;

    const totalWood  = totalBed + totalChair + totalTable;

    return totalWood;
}
const wood = woodMas(8 , 1 , 3 );

console.log("total wood is" , wood);
