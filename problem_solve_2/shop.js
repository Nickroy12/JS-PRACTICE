const product = [
    {name: "Egg" , Price: 8, quantity: 12},
    {name: "rice" , Price: 76, quantity: 20},
    {name: "Oil" , Price: 190, quantity: 4},
    {name: "Hen" , Price: 150, quantity: 1.5}
]

function shopCart(pro){
  const  totalPrice = 0;

  for(let i of pro){
    total = totalPrice + i.Price * i.quantity;
  }
  return total;
}

const output = shopCart(product) 
console.log(output)