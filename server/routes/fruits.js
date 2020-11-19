const express = require('express')

const db = require('../db/fruits')

const router = express.Router()

router.get('/', (req, res) => {
  db.getFruits()
    .then(results => {
      res.json({ fruits: results.map(fruit => fruit.name) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.get('/:author', (req, res) => {
  db.getAuthor()
    .then(results => {
      res.json({ author: results.map(author => rant.author) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "You've been HACKED" })
    })
})

module.exports = router
