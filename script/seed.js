/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */

const {
  db,
  Product,
  Category,
  ProductCategory,
  Order,
  ProductOrder,
  User
} = require('../server/db')

const Promise = require('bluebird')
const Chance = require('chance')
const chalk = require('chalk')

const chance = new Chance()


function generateProducts() {
  const spells = [
    'Fireball',
    'Magic Missile',
    'Love Spell',
    'Sleep Spell',
    'Locusts',
    'Charm',
    'Hex',
    'Curse of the Ages',
    'Banish',
    'Disengrate',
    'Protective Bubble',
    'Acid Rain',
    'Invisibillity',
    'Teleport',
    'Levitate',
    'Money',
  ]
  const products = []
  for (let i = 0; i <= spells.length - 1; i++) {
    products.push({
      name: spells[i],
      categoryId: spells[i].categoryId,
      description: chance.paragraph(),
      price: chance.floating({ fixed: 2, min: 1, max: 100 }),
      inventory: chance.integer({ min: 0, max: 20 }),
      image: 'http://via.placeholder.com/250x250'
    })
  }
  return products
}

function generateUsers() {
  const users = []
  for (let i = 0; i <= 20; i++) {
    users.push({
      email: chance.email(),
      password: chance.word()
    })
  }

  return users
}

const admins = [
  { isAdmin: true, email: "admin@merlinmart.com", password: '123456' },
  { isAdmin: true, email: "admin1@merlinmart.com", password: '123456' }
]


function generateOrders() {
  const orders = []
  for (let i = 0; i <= 3; i++) {
    const statuses = ['Created', 'Completed', 'Processing', 'Canceled']
    const status = statuses[Math.floor(Math.random() * statuses.length)]
    orders.push({
      userId: i+1,
      firstName: chance.name(),
      lastName: chance.name(),
      status,
      email: chance.email(),
      address: chance.address(),
      state: chance.state(),
      zipcode: chance.zip()
    })
  }
  return orders
}

const productOrders = [
  { productId: 1, orderId: 4, quantity: 5, priceAtPurchase: 40 },
  { productId: 2, orderId: 1, quantity: 2, priceAtPurchase: 32 },
  { productId: 3, orderId: 2, quantity: 3, priceAtPurchase: 22 },
  { productId: 4, orderId: 2, quantity: 4, priceAtPurchase: 33 },
  { productId: 5, orderId: 3, quantity: 5, priceAtPurchase: 44 },
  { productId: 6, orderId: 2, quantity: 6, priceAtPurchase: 55 },
  { productId: 7, orderId: 1, quantity: 7, priceAtPurchase: 64 },
  { productId: 8, orderId: 3, quantity: 3, priceAtPurchase: 44 },
  { productId: 9, orderId: 1, quantity: 2, priceAtPurchase: 32 },
  { productId: 10, orderId: 4, quantity: 4, priceAtPurchase: 22 }
]

const productCategories = [
  { productId: 1, categoryId: 4 },
  { productId: 2, categoryId: 4 },
  { productId: 3, categoryId: 2 },
  { productId: 4, categoryId: 2 },
  { productId: 5, categoryId: 3 },
  { productId: 6, categoryId: 2 },
  { productId: 7, categoryId: 3 },
  { productId: 8, categoryId: 3 },
  { productId: 9, categoryId: 3 },
  { productId: 10, categoryId: 4 },
  { productId: 11, categoryId: 5 },
  { productId: 12, categoryId: 4 },
  { productId: 13, categoryId: 1 },
  { productId: 14, categoryId: 1 },
  { productId: 15, categoryId: 1 },
  { productId: 16, categoryId: 2 }
]

const categories = [
  'Utility',
  'Enchantment',
  'Curse',
  'Invocation',
  'Protection'
]

const seed = () =>
  Promise.each(categories, name => Category.create({ name }))
    .then(() => Promise.each(generateProducts(), product => Product.create(product)))
    .then(() => Promise.each(productCategories, pc => ProductCategory.create(pc)))
    .then(() => Promise.each(generateUsers(), user => User.create(user)))
    .then(() => Promise.each(admins, admin => User.create(admin)))
    .then(() => Promise.each(generateOrders(), order => Order.create(order)))
    .then(() => Promise.each(productOrders, po => ProductOrder.create(po)))


const main = () => {
  console.log(chalk.blue('Syncing db...'))
  db.sync({ force: true })
    .then(() => {
      console.log(chalk.blue('Seeding database...'))
      return seed()
    })
    .then(() => {
      console.log(chalk.green('Seeding succeeded'))
    })
    .catch(err => {
      console.log(chalk.red('Error while seeding'))
      console.log(chalk.red(err.stack))
    })
    .finally(() => {
      db.close()
      return null
    })
}

main()

