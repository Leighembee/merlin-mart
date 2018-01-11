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
} = require('../server/db')

const Promise = require('bluebird')
const Chance = require('chance')
const chalk = require('chalk')

const chance = new Chance()


function generateProducts() {
  const spellNames = [
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
    'Money'
  ]
  const products = []
  for (let i = 0; i <= spellNames.length - 1; i++) {
    products.push({
      name: spellNames[i],
      description: chance.paragraph(),
      price: chance.floating({ fixed: 2, min: 1, max: 100 }),
      inventory: chance.integer({ min: 0, max: 20 }),
      image: 'http://via.placeholder.com/250x250'
    })
  }
  return products
}
const seed = () =>
  Promise.each(generateProducts(), product => Product.create(product))
// .then(() => Promise.each(datasources, ds => Datasource.create(ds)))

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

