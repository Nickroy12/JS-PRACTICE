const product = {
    name: 'Sunslik Black Sampoo',
    price: 342,
    quantity: 5
}
Object.freeze(product)
delete product.quantity
product.quantity = 1
const value = Object.values(product)
const key = Object.keys(product)
const entries = Object.entries(product)
console.log( value )
console.log( key)
console.log(entries )