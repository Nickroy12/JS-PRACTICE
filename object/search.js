const product = [
    {id:1, name: "Walton Fridge "  , price: 33000},
    {id:2, name: "Samsung Tv"  , price: 44000},
    {id:1, name: "Lanovo Laptop "  , price: 55000},
    {id:1, name: "I phone 17+ "  , price: 123000},
    {id:1, name: "Perasonic Washing masing "  , price: 73000},
]

function searchProduct(pro , search){
    let  matchProduct = []
    for(let item of pro){
        if(item.name.toLowerCase().includes(search.toLowerCase())){
             matchProduct.push(item.price)
        }
         
    }
     return matchProduct;
  
}
const output = searchProduct(product , "walton")
console.log(output);
