const router = require('express').Router();
const { Review, Product, User } = require('../db/models')

router.get('/', (req, res, next) => {
  Review.findAll({
    include: [ User ] 
  })
    .then( reviewsWithTheirUsers => res.send(reviewsWithTheirUsers) )
    .catch(next)
})

router.post('/', (req, res, next) => {
  Review.create(req.body)
    .then( newReview => res.status(201).send(newReview) )
    .catch(next)
})

module.exports = router
