const phone = [
    {name: "Samsung a6" , price: 30000 , camera: "46px" , color:"black"},
    {name: "Samsung g a43" , price: 24000 , camera: "46px" , color:"black"},
    {name: "Samsung j6+" , price: 42000 , camera: "46px" , color:"black"},
    {name: "Samsung a52" , price: 50000 , camera: "46px" , color:"black"},
]
function getCheap(phone){
    let min = phone[0]
     for(let i in phone){
        if(i.price < min.price){
             min = phone;
        }
     }
     return min
}
const cheapMobile = getCheap(phone);

console.log(cheapMobile);
