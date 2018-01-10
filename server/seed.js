const Promise = require('bluebird')
const Chance = require('chance')
let chance = new Chance

let {
  db,
  Products
} = require('./db/models')

function generateProducts(num) {
    const products = []
    for(let i=0; i<=num; i++) {
        products.push({
            name: chance.name(),
            description: chance.paragraph(),
            price: chance.floating({ fixed: 2, min: 1, max: 100}) ,
            inventory: chance.integer({min: 0, max: 20}),
            image: chance.avatar({ fileExtension: 'jpg' }),
        })
    }
    return products
}

const products = generateProducts(20)

console.log(products)